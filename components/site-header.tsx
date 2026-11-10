"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["/", "Inicio"],
  ["/compost", "Nuestro compost"],
  ["/nosotras", "Nosotras"],
  ["/recoleccion", "Recolección"],
];
export function SiteHeader() {
  const pathname = usePathname();
  // El menú queda abierto solo en la ruta donde se abrió; al navegar se cierra.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
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
          <Image
            src="/images/logo-biomercado-transparente.png"
            alt="BioMercado Baranoa"
            width={739}
            height={170}
            sizes="260px"
            loading="eager"
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
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
