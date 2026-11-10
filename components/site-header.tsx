"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["/", "Inicio"],
  ["/compost", "Nuestro compost"],
  ["/nosotras", "Nosotras"],
  ["/recoleccion", "Recolección"],
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <Link
          href="/"
          className="brand"
          aria-label="BioMercado Baranoa, inicio"
        >
          <img
            src="/images/logo-biomercado-transparente.png"
            alt="BioMercado Baranoa"
            width="739"
            height="170"
          />
        </Link>
        <nav
          className={`desktop-nav ${open ? "nav-open" : ""}`}
          id="navegacion"
          aria-label="Navegación principal"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
          <Link href="/contacto" className="mobile-contact">
            Contacto <ArrowUpRight size={17} />
          </Link>
        </nav>
        <Link href="/contacto" className="header-contact">
          Hablemos <ArrowUpRight size={18} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="navegacion"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
