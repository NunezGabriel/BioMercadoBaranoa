import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-ui";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://biomercado-baranoa-comunidad.roanox4.chatgpt.site",
  ),
  title: {
    default: "BioMercado Baranoa · Compost orgánico",
    template: "%s · BioMercado Baranoa",
  },
  description:
    "Conoce BioMercado Baranoa, su propuesta de compost por kilogramo y el equipo de emprendedoras que impulsa el aprovechamiento de residuos vegetales.",
  openGraph: {
    title: "BioMercado Baranoa",
    description:
      "Compost para seguir creciendo. Conoce nuestro producto y a las emprendedoras detrás de BioMercado Baranoa.",
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
