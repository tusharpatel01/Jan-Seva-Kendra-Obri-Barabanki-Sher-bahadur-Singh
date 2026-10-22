import {MessageCircle} from 'lucide-react';import {useLang} from '../../hooks/useLang';import {centreWhatsAppUrl} from '../../utils/whatsapp';
export default function WaLink({message,className='btn btn-wa',children}){
  const {t}=useLang();const url=centreWhatsAppUrl(message);
  if(!url)return <button type="button" disabled title={t.waOff} className={`${className} cursor-not-allowed opacity-50`}>{children}</button>;
  return <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}
export function FloatingWhatsApp(){
  const {t}=useLang();
  return <div className="fixed bottom-4 right-4 z-30"><WaLink message={t.wa.general} className="grid h-14 w-14 place-items-center rounded-full bg-leaf text-white shadow-lg hover:bg-leaf-dark"><MessageCircle/><span className="sr-only">WhatsApp</span></WaLink></div>;
}
