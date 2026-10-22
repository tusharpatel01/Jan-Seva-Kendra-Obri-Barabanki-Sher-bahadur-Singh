# Jan Seva Kendra — Sher Bahadur Singh, Obri, Barabanki

Hindi/English React + Vite + Tailwind site. Appointment requests go out via WhatsApp only (no backend, no database).
This is a private local centre site, not an official government website.

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build in dist/

## Activate the real number (src/config/centreConfig.js)
1. Confirm the number with the owner. 2. Check `phone` and `whatsapp` (country code + digits, no "+"). 3. Set `contactVerified: true`.
Until then WhatsApp/call buttons are disabled and no number is shown publicly.

## Business hours / holidays
Set `hours.configured: true`, `open`, `close`, `intervalMinutes`, `weeklyClosed` (0=Sun…6=Sat) and `holidays` (['2026-11-12']). Shown as *preferred* times only.

## Services (src/data/services.js)
Every sample service starts with `isVerified:false, isAvailable:false`, so none show in production. To publish one: set both to `true`, then add `docs:['…']` and `fee:'…'` only if confirmed. (`npm run dev` previews samples, labelled "Sample — unverified".)

## Other edits
Address, landmark, `mapsUrl` (use a verified pin link) — centreConfig.js. Text in both languages — src/data/translations.js. Photos: add `public/hero.jpg` (overlays the placeholder panel automatically). Use only real photos you have rights to.

## Deploy on Vercel
Push to GitHub → vercel.com → Add New Project → import repo. Framework: Vite, build `npm run build`, output `dist`. Deploy.
