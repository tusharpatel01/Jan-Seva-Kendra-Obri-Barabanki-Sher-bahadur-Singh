import {useState} from 'react';import {motion} from 'framer-motion';import {Menu,X,FileText} from 'lucide-react';
import {useLang} from '../../hooks/useLang';import LanguageSwitcher from '../common/LanguageSwitcher';
const LINKS=[['home','#home'],['services','#services'],['how','#how'],['about','#about'],['contact','#contact']];
export default function Navbar({onBook}){
  const {t}=useLang();const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
      <a href="#home" className="flex min-w-0 items-center gap-2"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-white"><FileText size={20}/></span>
        <span className="min-w-0 leading-tight"><span className="block truncate text-lg font-bold text-navy">जन सेवा केंद्र</span><span className="block truncate text-xs text-ink/70">{t.brandSub}</span></span></a>
      <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">{LINKS.map(([k,h])=><a key={k} href={h} className="text-sm font-medium text-ink hover:text-saffron">{t.nav[k]}</a>)}</nav>
      <div className="flex items-center gap-2">
        <LanguageSwitcher/><button type="button" onClick={()=>onBook()} className="btn btn-primary hidden sm:inline-flex">{t.book}</button>
        <button type="button" className="btn btn-ghost px-3 lg:hidden" aria-expanded={open} aria-label={t.menu} onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
      </div></div>
    {open&&<motion.nav aria-label="Mobile" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="border-t border-navy/10 bg-white px-4 pb-4 lg:hidden">
      {LINKS.map(([k,h])=><a key={k} href={h} onClick={()=>setOpen(false)} className="block border-b border-navy/5 py-3 font-medium text-navy">{t.nav[k]}</a>)}
      <button type="button" onClick={()=>{setOpen(false);onBook();}} className="btn btn-primary mt-3 w-full">{t.book}</button></motion.nav>}
  </header>;
}
