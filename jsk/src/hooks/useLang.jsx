import {createContext,useContext,useState,useEffect} from 'react';
import {dict} from '../data/translations';import {centre} from '../config/centreConfig';
const Ctx=createContext(null);
export function LangProvider({children}){
  const [lang,setLang]=useState(()=>{try{return sessionStorage.getItem('lang')||centre.defaultLang;}catch{return centre.defaultLang;}});
  useEffect(()=>{document.documentElement.lang=lang;try{sessionStorage.setItem('lang',lang);}catch{/* ignore */}},[lang]);
  return <Ctx.Provider value={{lang,setLang,t:dict[lang]}}>{children}</Ctx.Provider>;
}
export const useLang=()=>useContext(Ctx);
