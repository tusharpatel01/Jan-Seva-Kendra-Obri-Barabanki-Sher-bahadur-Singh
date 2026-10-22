import {useState,useMemo} from 'react';import {Search,X,FileBadge,FileText,Home,Baby,Landmark,ClipboardList,CreditCard,GraduationCap,PenLine,Printer,Zap,Smartphone} from 'lucide-react';
const L={FileBadge,FileText,Home,Baby,Landmark,ClipboardList,CreditCard,GraduationCap,PenLine,Printer,Zap,Smartphone};
import {useLang} from '../../hooks/useLang';import {publicServices,categories,isPublic} from '../../data/services';
import WaLink from '../common/WhatsAppButton';import Modal from '../common/Modal';import {Heading} from '../common/Reveal';
const ACC={cert:'border-t-navy',scheme:'border-t-saffron',id:'border-t-leaf',digital:'border-t-navy-light'};
const name=(s,lang)=>lang==='hi'?s.hi:s.en;
function Card({s,onInfo,onBook}){
  const {t,lang}=useLang();const Icon=L[s.icon]||L.FileText;
  return <article className={`flex flex-col rounded-xl border border-t-4 border-navy/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg ${ACC[s.cat]}`}>
    <div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cream text-navy"><Icon size={22}/></span>
      <div><h3 className="font-bold text-navy">{s.hi}</h3><p className="text-sm text-ink/70">{s.en}</p></div></div>
    <p className="mt-3 flex-1 text-sm">{lang==='hi'?s.dhi:s.den}</p>
    <p className="mt-3 flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-navy/5 px-2 py-1 text-navy">{t.svc.cats[s.cat]}</span>{!isPublic(s)&&<span className="rounded-full bg-saffron/10 px-2 py-1 text-saffron-dark">{t.svc.sample}</span>}</p>
    <div className="mt-4 grid gap-2"><button type="button" onClick={()=>onInfo(s)} className="btn btn-ghost">{t.svc.info}</button>
      <div className="grid grid-cols-2 gap-2"><WaLink message={t.wa.enquiry(name(s,lang))} className="btn btn-wa px-2 text-xs sm:text-sm">{t.svc.ask}</WaLink>
        <button type="button" onClick={()=>onBook(s.id)} className="btn btn-primary px-2 text-xs sm:text-sm">{t.book}</button></div></div></article>;
}
function Details({s,onClose,onBook}){
  const {t,lang}=useLang();const ok=isPublic(s);
  return <Modal onClose={onClose} label={name(s,lang)}><h3 className="pr-8 text-xl font-bold text-navy">{s.hi}</h3><p className="text-ink/70">{s.en}</p><p className="mt-3">{lang==='hi'?s.dhi:s.den}</p>
    <dl className="mt-5 space-y-4 text-sm">
      <div><dt className="font-semibold text-navy">{t.svc.docs}</dt><dd>{ok&&s.docs.length?<ul className="list-disc pl-5">{s.docs.map(d=><li key={d}>{d}</li>)}</ul>:t.svc.docsTbc}</dd></div>
      <div><dt className="font-semibold text-navy">{t.svc.fee}</dt><dd>{ok&&s.fee?s.fee:t.svc.feeTbc}</dd></div>
      <div><dt className="font-semibold text-navy">{t.svc.process}</dt><dd><ol className="list-decimal pl-5">{t.svc.steps.map(x=><li key={x}>{x}</li>)}</ol></dd></div>
      <div><dt className="font-semibold text-navy">{t.svc.status}</dt><dd className={ok?'text-leaf-dark':''}>{ok?t.svc.yes:t.svc.no}</dd></div></dl>
    <div className="mt-6 flex flex-col gap-2 sm:flex-row"><WaLink message={t.wa.enquiry(name(s,lang))}>{t.svc.ask}</WaLink><button type="button" className="btn btn-primary" onClick={()=>{onClose();onBook(s.id);}}>{t.book}</button></div></Modal>;
}
export default function ServicesSection({onBook}){
  const {t,lang}=useLang();const all=useMemo(publicServices,[]);const [q,setQ]=useState('');const [cat,setCat]=useState('all');const [sel,setSel]=useState(null);
  const list=all.filter(s=>(cat==='all'||s.cat===cat)&&`${s.hi} ${s.en} ${s.dhi} ${s.den}`.toLowerCase().includes(q.trim().toLowerCase()));
  const reset=()=>{setQ('');setCat('all');};
  return <section id="services" className="py-16"><div className="mx-auto max-w-6xl px-4"><Heading title={t.svc.title} sub={t.svc.sub}/>
    <div className="mb-6 flex flex-col gap-4"><div className="relative"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50"/><label className="sr-only" htmlFor="svc-q">{t.svc.search}</label>
      <input id="svc-q" value={q} onChange={e=>setQ(e.target.value)} placeholder={t.svc.search} className="field pl-10"/></div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Category">{['all',...categories].map(c=><button key={c} type="button" aria-pressed={cat===c} onClick={()=>setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-medium ${cat===c?'border-navy bg-navy text-white':'border-navy/30 text-navy hover:bg-navy/5'}`}>{c==='all'?t.svc.all:t.svc.cats[c]}</button>)}
        {(q||cat!=='all')&&<button type="button" onClick={reset} className="inline-flex items-center gap-1 px-2 text-sm text-saffron-dark underline"><X size={14}/>{t.svc.reset}</button>}</div></div>
    {list.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(s=><Card key={s.id} s={s} onInfo={setSel} onBook={onBook}/>)}</div>
      :<div className="rounded-xl border border-dashed border-navy/30 bg-white p-8 text-center"><p>{all.length?t.svc.empty:t.svc.emptyNone}</p>{all.length>0&&<button type="button" onClick={reset} className="btn btn-ghost mt-4">{t.svc.reset}</button>}</div>}
    {sel&&<Details s={sel} onClose={()=>setSel(null)} onBook={onBook}/>}</div></section>;
}
