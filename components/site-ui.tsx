import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Leaf,
  MapPin,
} from "lucide-react";
import { faqs } from "@/lib/site";
export function ButtonLink({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <span className="button-icon">
        <ArrowUpRight size={19} />
      </span>
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="status-dot" />
      {children}
    </span>
  );
}
export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`botanical ${className}`}
      width="420"
      height="500"
      viewBox="0 0 420 500"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.8">
        <path d="M30 500C109 387 206 259 354 8" />
        <path d="M156 323C93 318 42 245 52 144C150 177 198 226 156 323Z" />
        <path d="M157 322L53 145M163 306L66 183M170 280L83 213M170 257L102 225" />
        <path d="M210 242C231 135 305 89 408 79C377 190 304 253 210 242Z" />
        <path d="M211 242L406 80M234 236L389 100M257 227L367 121M282 211L345 142" />
        <path d="M290 114C236 89 216 50 228 0C291 21 310 59 290 114Z" />
        <path d="M291 115L227 0M289 97L238 27M294 80L249 43" />
        <path d="M93 413C164 326 238 306 313 342C262 407 175 447 93 413Z" />
        <path d="M94 413L312 342M114 419L281 351M147 421L248 361M178 414L215 374" />
      </g>
    </svg>
  );
}
export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>Imagen referencial</figcaption>
    </figure>
  );
}
export function Faqs({ limit }: { limit?: number }) {
  return (
    <section className="faq-section section-space">
      <div>
        <Eyebrow>Conversemos</Eyebrow>
        <h2>
          Pequeñas dudas.
          <br />
          <span className="muted-title">Buenas respuestas.</span>
        </h2>
        <p>
          Estamos construyendo el proyecto paso a paso. Aquí te contamos por
          dónde vamos.
        </p>
        <Link href="/contacto" className="text-link">
          Tengo otra pregunta <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="faq-list">
        {faqs.slice(0, limit).map((item, i) => (
          <details key={item.question}>
            <summary>
              <span className="faq-number">0{i + 1}</span>
              <span>{item.question}</span>
              <ChevronDown size={20} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function JoinBanner() {
  return (
    <section className="join-banner">
      <Botanical />
      <div className="join-copy">
        <span className="overline">LO BUENO CRECE CUANDO LO COMPARTIMOS</span>
        <h2>
          El próximo paso
          <br />
          lo damos juntos.
        </h2>
        <p>
          Un comercio, un cultivo, una idea. Hay muchas formas de ser parte de
          BioMercado.
        </p>
      </div>
      <ButtonLink href="/contacto" secondary>
        Quiero ser parte
      </ButtonLink>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand footer-brand">
            <img
              src="/images/logo-biomercado.png"
              width="330"
              height="76"
              alt="BioMercado Baranoa"
            />
          </Link>
          <p>
            Transformamos residuos en vida.
            <br />
            Una idea que nace y crece en comunidad.
          </p>
        </div>
        <div className="footer-location">
          <MapPin size={20} />
          <div>
            <strong>De Baranoa, para Baranoa.</strong>
            <span>Atlántico, Colombia</span>
            <span className="stage-label">
              <span /> Proyecto en preparación
            </span>
          </div>
        </div>
        <Link href="/contacto" className="footer-contact">
          Cultivemos una conversación <ArrowUpRight size={20} />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BioMercado Baranoa</span>
        <span>
          Hecho con propósito. Pensado para nuestra tierra. <Leaf size={15} />
        </span>
      </div>
    </footer>
  );
}
export function Breadcrumb({ label }: { label: string }) {
  return (
    <div className="breadcrumb">
      <Link href="/">Inicio</Link>
      <ArrowRight size={12} />
      <span>{label}</span>
    </div>
  );
}
export function PageIntro({
  label,
  title,
  accent,
  description,
}: {
  label: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <Eyebrow>{label}</Eyebrow>
      <h1>
        {title}
        <br />
        <span>{accent}</span>
      </h1>
      <p>{description}</p>
    </div>
  );
}
