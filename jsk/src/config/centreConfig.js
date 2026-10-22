// ONE place to edit centre details. Nothing here is verified until the owner confirms it.
export const centre = {
  nameHi: 'जन सेवा केंद्र, शेर बहादुर सिंह',
  nameEn: 'Jan Seva Kendra — Sher Bahadur Singh',
  owner: 'Sher Bahadur Singh',
  locality: 'Obri, Barabanki, Uttar Pradesh',
  address: 'Jan Seva Kendra, Sher Bahadur Singh, Obri, opposite SBI Main Branch, Ayodhya Road, Barabanki, Uttar Pradesh 225001.',
  landmark: 'In front of SBI Main Branch, Ayodhya Road, Barabanki',
  pin: '225001',
  phone: '+91 8707756815',
  whatsapp: '918707756815',      // country code + digits only
  contactVerified: true,        // set true ONLY after the owner confirms the number
  hours: {
    configured: false,           // set true after confirming real hours
    open: '10:00', close: '17:00', intervalMinutes: 30, // placeholders used for "preferred time" options
    weeklyClosed: [],            // 0=Sunday ... 6=Saturday, e.g. [0]
    holidays: [],                // 'YYYY-MM-DD' strings
  },
  // Replace with a verified map pin link before publishing.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Jan Seva Kendra Sher Bahadur Singh Obri Ayodhya Road Barabanki 225001'),
  defaultLang: 'hi',
  showDraftServicesInDev: true,  // npm run dev only: preview unverified sample services (never in production build)
  brand: { navy: '#12264a', saffron: '#c2610a', cream: '#fbf7f0', ink: '#2b2f36', leaf: '#3f7a52' }, // mirrored in tailwind.config.js
};
