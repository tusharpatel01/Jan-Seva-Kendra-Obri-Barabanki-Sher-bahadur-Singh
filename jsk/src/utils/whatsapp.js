import {centre} from '../config/centreConfig';
const OK=/^91[6-9]\d{9}$/;
/** Returns a valid wa.me URL, or null if the number is invalid/missing. */
export function buildWhatsAppUrl(phoneNumber,message=''){
  const d=String(phoneNumber||'').replace(/\D/g,'');
  return OK.test(d)?`https://wa.me/${d}?text=${encodeURIComponent(message)}`:null;
}
export const centreWhatsAppUrl=m=>centre.contactVerified?buildWhatsAppUrl(centre.whatsapp,m):null;
export const telUrl=()=>centre.contactVerified&&OK.test(centre.whatsapp)?`tel:+${centre.whatsapp}`:null;
