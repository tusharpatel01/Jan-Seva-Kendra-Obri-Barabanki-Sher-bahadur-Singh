import {MessageCircle} from 'lucide-react';import {useLang} from '../../hooks/useLang';import {centre} from '../../config/centreConfig';import WaLink from '../common/WhatsAppButton';
export default function Footer(){
  const {t,lang}=useLang();
  return <footer className="bg-navy text-white"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
    <div><p className="text-lg font-bold">{lang==='hi'?centre.nameHi:centre.nameEn}</p><p className="mt-1 text-saffron-dark brightness-150">{t.tagline}</p></div>
    <address className="text-sm not-italic text-white/85">{centre.address}</address>
    <div className="flex flex-col items-start gap-3"><WaLink message={t.wa.general} className="btn btn-wa"><MessageCircle size={18}/>{t.hero.c3}</WaLink>
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/85">{[['services','#services'],['about','#about'],['contact','#contact']].map(([k,h])=><a key={k} href={h} className="hover:underline">{t.nav[k]}</a>)}</nav></div></div>
    <p className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/75">{t.footer.disc} © {new Date().getFullYear()} {centre.owner}</p></footer>;
}
