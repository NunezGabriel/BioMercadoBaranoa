import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-ui";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://biomercado-baranoa-comunidad.roanox4.chatgpt.site",
  ),
  title: {
    default: "BioMercado Baranoa · De residuos a oportunidades",
    template: "%s · BioMercado Baranoa",
  },
  description:
    "Un proyecto de economía circular en Baranoa, Atlántico. Residuos orgánicos, compost y oportunidades para nuestra comunidad.",
  openGraph: {
    title: "BioMercado Baranoa",
    description:
      "Una nueva vida para nuestros residuos. Un proyecto que nace en comunidad.",
    locale: "es_CO",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main id="contenido">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
