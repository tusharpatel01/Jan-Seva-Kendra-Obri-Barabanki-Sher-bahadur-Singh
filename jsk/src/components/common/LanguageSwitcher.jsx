import {Languages} from 'lucide-react';import {useLang} from '../../hooks/useLang';
export default function LanguageSwitcher(){
  const {lang,setLang,t}=useLang();
  return <button type="button" onClick={()=>setLang(lang==='hi'?'en':'hi')} aria-label={t.langLabel} className="btn btn-ghost px-3"><Languages size={16}/>{t.langBtn}</button>;
}
