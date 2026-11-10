import type { Metadata } from "next";
import { Suspense } from "react";
import { HandHeart, MapPin } from "lucide-react";
import { Botanical, Breadcrumb, Eyebrow } from "@/components/site-ui";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return (
    <>
      <Breadcrumb label="Contacto" />
      <section className="contact-page">
        <div className="contact-copy">
          <Eyebrow>Hay una conversación por comenzar</Eyebrow>
          <h1>
            Tu idea también
            <br />
            puede <span>echar raíces.</span>
          </h1>
          <p>
            ¿Tienes un comercio, te interesa el compost o quieres colaborar?
            Cuéntanos qué te mueve a ser parte de BioMercado.
          </p>
          <div className="contact-place">
            <span className="small-round">
              <MapPin size={22} />
            </span>
            <div>
              <strong>Nos une Baranoa.</strong>
              <span>Atlántico, Colombia</span>
            </div>
          </div>
          <div className="contact-note">
            <HandHeart size={22} />
            <p>
              Estamos preparando el proyecto y definiendo el canal de atención.
              Por ahora puedes preparar tu mensaje y copiarlo para compartirlo
              con el equipo.
            </p>
          </div>
          <Botanical />
        </div>
        <Suspense
          fallback={
            <div className="contact-form-panel">Preparando formulario…</div>
          }
        >
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}
