import {useEffect,useRef} from 'react';import {motion} from 'framer-motion';import {X} from 'lucide-react';import {useLang} from '../../hooks/useLang';
export default function Modal({onClose,label,children}){
  const {t}=useLang();const ref=useRef(null);const cb=useRef(onClose);cb.current=onClose;
  useEffect(()=>{const k=e=>e.key==='Escape'&&cb.current();document.addEventListener('keydown',k);document.body.style.overflow='hidden';ref.current?.focus();
    return()=>{document.removeEventListener('keydown',k);document.body.style.overflow='';};},[]);
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-navy/60 sm:items-center sm:p-4" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <motion.div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={label} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5 outline-none sm:max-w-xl sm:rounded-2xl sm:p-7">
      <button type="button" onClick={onClose} aria-label={t.close} className="absolute right-3 top-3 rounded-full p-2 hover:bg-cream"><X size={20}/></button>{children}
    </motion.div></div>;
}
