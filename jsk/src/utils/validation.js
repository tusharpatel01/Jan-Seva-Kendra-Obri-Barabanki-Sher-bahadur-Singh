import {z} from 'zod';import {centre} from '../config/centreConfig';
const p2=n=>String(n).padStart(2,'0');
export const todayStr=()=>{const d=new Date();return `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;};
export const fmtDate=v=>{const [y,m,d]=(v||'').split('-');return y?`${d}/${m}/${y}`:'';};
const t12=m=>{const h=Math.floor(m/60);return `${h%12||12}:${p2(m%60)} ${h<12?'AM':'PM'}`;};
export const isClosedDate=v=>{const day=new Date(v+'T00:00:00').getDay();return centre.hours.weeklyClosed.includes(day)||centre.hours.holidays.includes(v);};
export function slotsFor(date){
  const {open,close,intervalMinutes:i}=centre.hours;const [oh,om]=open.split(':').map(Number),[ch,cm]=close.split(':').map(Number);
  const now=new Date(),nowMin=now.getHours()*60+now.getMinutes(),today=date===todayStr(),out=[];
  for(let m=oh*60+om;m<ch*60+cm;m+=i){if(today&&m<=nowMin)continue;out.push(t12(m));}
  return out;
}
export const makeSchema=t=>z.object({
  service:z.string().min(1,t.form.e.service),
  date:z.string().min(1,t.form.e.date).refine(v=>v>=todayStr(),t.form.e.past).refine(v=>!isClosedDate(v),t.form.e.closed),
  time:z.string().min(1,t.form.e.time),
  name:z.string().trim().min(2,t.form.e.name).max(80,t.form.e.name),
  mobile:z.string().refine(v=>/^(\+91|91|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g,'')),t.form.e.mobile),
  message:z.string().max(300,t.form.e.msg).optional(),
});
