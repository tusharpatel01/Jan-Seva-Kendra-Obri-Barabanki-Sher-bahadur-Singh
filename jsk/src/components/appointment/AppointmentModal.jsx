import {useState,useMemo} from 'react';import {useForm} from 'react-hook-form';import {zodResolver} from '@hookform/resolvers/zod';import {Phone,ArrowLeft,MessageCircle} from 'lucide-react';
import Modal from '../common/Modal';import {useLang} from '../../hooks/useLang';import {publicServices} from '../../data/services';
import {makeSchema,todayStr,fmtDate,slotsFor} from '../../utils/validation';import {centreWhatsAppUrl,telUrl} from '../../utils/whatsapp';
const FIELDS=[['service'],['date','time'],['name','mobile','message'],[]];
const Err=({e})=>e?<p role="alert" className="err">{e.message}</p>:null;
export default function AppointmentModal({initialService,onClose}){
  const {t,lang}=useLang();const list=useMemo(publicServices,[]);const [step,setStep]=useState(initialService?1:0);const [sent,setSent]=useState(false);
  const {register,trigger,getValues,watch,setValue,formState:{errors}}=useForm({resolver:zodResolver(useMemo(()=>makeSchema(t),[t])),mode:'onTouched',defaultValues:{service:initialService||'',date:'',time:'',name:'',mobile:'',message:''}});
  const label=id=>{const s=list.find(x=>x.id===id);return s?(lang==='hi'?s.hi:s.en):t.form.general;};
  const next=async()=>{if(await trigger(FIELDS[step]))setStep(step+1);};
  const d=watch();const url=step===3?centreWhatsAppUrl(t.wa.appt({name:d.name.trim(),mobile:d.mobile,service:label(d.service),date:fmtDate(d.date),time:d.time,msg:(d.message||'').trim()})):null;
  const send=()=>{if(url){window.open(url,'_blank','noopener,noreferrer');setSent(true);}};
  const tel=telUrl();
  return <Modal onClose={onClose} label={t.form.title}>
    <h3 className="pr-8 text-xl font-bold text-navy">{t.form.title}</h3>
    <p className="mt-1 text-sm text-ink/70">{t.form.step} {step+1}/4 — {t.form.names[step]}</p>
    <div className="mt-2 h-1.5 rounded bg-navy/10"><div className="h-full rounded bg-saffron transition-all" style={{width:`${(step+1)*25}%`}}/></div>
    <div className="mt-5">
      {step===0&&<fieldset><legend className="mb-2 font-semibold">{t.form.service}</legend><div className="grid max-h-72 gap-2 overflow-y-auto">
        {[{id:'general'},...list].map(s=><label key={s.id} className="flex cursor-pointer items-center gap-3 rounded-lg border border-navy/20 p-3 has-[:checked]:border-navy has-[:checked]:bg-navy/5"><input type="radio" value={s.id} {...register('service')} className="h-5 w-5 accent-[#12264a]"/>{label(s.id)}</label>)}</div><Err e={errors.service}/></fieldset>}
      {step===1&&<div className="space-y-4">
        <div><label htmlFor="ap-date" className="mb-1 block font-semibold">{t.form.date}</label><input id="ap-date" type="date" min={todayStr()} className="field" {...register('date',{onChange:()=>setValue('time','')})}/>{d.date&&<p className="mt-1 text-sm text-ink/70">{fmtDate(d.date)}</p>}<Err e={errors.date}/></div>
        <div><label htmlFor="ap-time" className="mb-1 block font-semibold">{t.form.time}</label><select id="ap-time" className="field" disabled={!d.date} {...register('time')}><option value="">{d.date?t.form.timePick:t.form.timeFirst}</option>{d.date&&slotsFor(d.date).map(s=><option key={s}>{s}</option>)}</select><p className="mt-1 text-sm text-ink/70">{t.form.timeNote}</p><Err e={errors.time}/></div></div>}
      {step===2&&<div className="space-y-4">
        <div><label htmlFor="ap-name" className="mb-1 block font-semibold">{t.form.name}</label><input id="ap-name" autoComplete="name" className="field" {...register('name')}/><Err e={errors.name}/></div>
        <div><label htmlFor="ap-mob" className="mb-1 block font-semibold">{t.form.mobile}</label><input id="ap-mob" type="tel" inputMode="tel" autoComplete="tel" placeholder="98XXXXXXXX" className="field" {...register('mobile')}/><Err e={errors.mobile}/></div>
        <div><label htmlFor="ap-msg" className="mb-1 block font-semibold">{t.form.msg}</label><textarea id="ap-msg" rows={3} maxLength={300} className="field" {...register('message')}/><Err e={errors.message}/></div></div>}
      {step===3&&<div><p className="mb-2 font-semibold">{t.form.review}</p>
        <dl className="space-y-2 rounded-lg bg-cream p-4 text-sm">{[[t.form.service,label(d.service)],[t.form.date,fmtDate(d.date)],[t.form.time,d.time],[t.form.name,d.name],[t.form.mobile,d.mobile],[t.form.msg,d.message||'—']].map(([k,v])=><div key={k} className="flex justify-between gap-4"><dt className="text-ink/70">{k}</dt><dd className="text-right font-medium">{v}</dd></div>)}</dl>
        <p className="mt-3 rounded-lg border border-saffron/40 bg-saffron/10 p-3 text-sm">{t.form.notice}</p>
        {!url&&<p role="alert" className="err">{t.waOff}</p>}
        <button type="button" onClick={send} disabled={!url} className="btn btn-wa mt-4 w-full disabled:cursor-not-allowed disabled:opacity-50"><MessageCircle size={18}/>{t.form.send}</button>
        {tel&&<a href={tel} className="btn btn-ghost mt-2 w-full"><Phone size={18}/>{t.contact.call}</a>}
        {sent&&<p role="status" className="mt-3 text-sm text-leaf-dark">{t.form.sent}</p>}</div>}
    </div>
    <div className="mt-6 flex justify-between gap-3">{step>0?<button type="button" onClick={()=>setStep(step-1)} className="btn btn-ghost"><ArrowLeft size={16}/>{t.form.back}</button>:<span/>}
      {step<3&&<button type="button" onClick={next} className="btn btn-navy">{t.form.next}</button>}</div></Modal>;
}
