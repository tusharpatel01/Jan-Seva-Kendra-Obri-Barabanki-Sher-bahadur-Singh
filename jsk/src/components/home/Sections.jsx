import {
  MapPin,
  MessageCircle,
  ShieldCheck,
  ListChecks,
  Smartphone,
  FileText,
  Phone,
  Navigation,
  Clock,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "../../hooks/useLang";
import { centre } from "../../config/centreConfig";
import { telUrl, centreWhatsAppUrl } from "../../utils/whatsapp";
import WaLink from "../common/WhatsAppButton";
import Reveal, { Heading } from "../common/Reveal";
const wrap = "mx-auto max-w-6xl px-4";
export function Hero({ onBook }) {
  const { t } = useLang();
  return (
    <section id="home">
      <div
        className={`${wrap} grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-20`}
      >
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-saffron/10 px-3 py-1 text-sm font-medium text-saffron-dark">
            <MapPin size={16} />
            {t.hero.loc}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {t.hero.h}
          </h1>
          <p className="mt-4 max-w-xl text-lg">{t.hero.p}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-navy">
              {t.hero.c1}
            </a>
            <button
              type="button"
              onClick={() => onBook()}
              className="btn btn-primary"
            >
              {t.book}
            </button>
            <WaLink message={t.wa.general}>
              <MessageCircle size={18} />
              {t.hero.c3}
            </WaLink>
          </div>
        </motion.div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-h-[460px] overflow-hidden rounded-[2rem] rounded-tr-[5rem] bg-navy">
            <div className="absolute inset-0 grid place-items-center p-6 text-center text-white">
              <div>
                <FileText size={56} className="mx-auto text-orange-300" />
                <p className="mt-3 text-xl font-semibold">{t.tagline}</p>
              </div>
            </div>
            {/* Add a real photo at public/hero.jpg — it overlays this panel automatically */}
            <img
              src="/hero.jpg"
              alt={t.hero.alt}
              className="absolute inset-0 h-full w-full object-fill"
              onError={(e) => e.currentTarget.remove()}
            />
          </div>
        </div>
      </div>
      <div className="border-y border-navy/10 bg-white">
        <ul className={`${wrap} grid gap-3 py-4 sm:grid-cols-3`}>
          {[MapPin, ListChecks, Smartphone].map((I, i) => (
            <li
              key={i}
              className="flex items-center gap-2 font-medium text-navy"
            >
              <I size={20} className="shrink-0 text-leaf" />
              {t.trust[i]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="bg-white py-16">
      <div className={wrap}>
        <Heading title={t.how.title} />
        <ol className="ml-4 grid gap-8 border-l-2 border-saffron/40 pl-6 lg:ml-0 lg:mt-12 lg:grid-cols-4 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-8">
          {t.how.steps.map(([h, d], i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.65rem] top-0 grid h-8 w-8 place-items-center rounded-full bg-navy text-sm font-bold text-white lg:-top-[3.15rem] lg:left-0">
                {i + 1}
              </span>
              <h3 className="font-bold text-navy">{h}</h3>
              <p className="mt-1 text-sm">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 flex items-start gap-2 rounded-lg bg-cream p-4 text-sm">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-leaf" />
          {t.how.note}
        </p>
      </div>
    </section>
  );
}
export function About({ onBook }) {
  const { t } = useLang();
  return (
    <section id="about" className="py-16">
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2`}>
        <Reveal>
          <Heading title={t.about.title} />
          <p className="text-lg">{t.about.p}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onBook()}
              className="btn btn-primary"
            >
              {t.book}
            </button>
            <a href="#contact" className="btn btn-ghost">
              {t.nav.contact}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-3xl rounded-bl-[4rem] bg-navy p-8 text-white">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <User className="shrink-0 text-orange-300" />
                {t.about.by}
              </li>
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-orange-300" />
                {t.about.at}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Contact({ onBook }) {
  const { t } = useLang();
  const tel = telUrl();
  const h = centre.hours;
  const rows = [
    [User, t.contact.owner, centre.owner],
    [MapPin, t.contact.addr, centre.address],
    [Navigation, t.contact.landmark, centre.landmark],
    [
      Clock,
      t.contact.hours,
      h.configured ? `${h.open} – ${h.close}` : t.contact.hoursTbc,
    ],
    [Phone, t.contact.phone, tel ? centre.phone : t.contact.phoneTbc],
  ];
  return (
    <section id="contact" className="bg-white py-16">
      <div className={wrap}>
        <Heading title={t.contact.title} />
        <div className="grid gap-8 lg:grid-cols-2">
          <dl className="space-y-4">
            {rows.map(([I, k, v]) => (
              <div key={k} className="flex gap-3">
                <I size={20} className="mt-1 shrink-0 text-saffron" />
                <div>
                  <dt className="text-sm font-semibold text-navy">{k}</dt>
                  <dd>{v}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="flex flex-col items-start gap-3 rounded-2xl bg-cream p-6">
            {tel ? (
              <a href={tel} className="btn btn-navy w-full sm:w-auto">
                <Phone size={18} />
                {t.contact.call}
              </a>
            ) : null}
            <WaLink
              message={t.wa.general}
              className="btn btn-wa w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              {t.hero.c3}
            </WaLink>
            {!centreWhatsAppUrl("x") && (
              <p className="text-sm text-ink/80">{t.waOff}</p>
            )}
            <a
              href={centre.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto"
            >
              <Navigation size={18} />
              {t.contact.map}
            </a>
            <button
              type="button"
              onClick={() => onBook()}
              className="btn btn-primary w-full sm:w-auto"
            >
              {t.book}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export function FAQ() {
  const { t } = useLang();
  return (
    <section id="faq" className="py-16">
      <div className={`${wrap} max-w-3xl`}>
        <Heading title={t.faq.title} />
        <div className="space-y-3">
          {t.faq.items.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-navy/15 bg-white p-4"
            >
              <summary className="cursor-pointer list-none font-semibold text-navy marker:hidden after:float-right after:text-saffron after:content-['+'] group-open:after:content-['–']">
                {q}
              </summary>
              <p className="mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
