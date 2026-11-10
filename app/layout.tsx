import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-ui";
import "./globals.css";

// Dominio público del sitio. En Vercel se toma automáticamente el dominio de
// producción; si se conecta un dominio propio, puede fijarse con NEXT_PUBLIC_SITE_URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
