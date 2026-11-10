import type { Metadata } from "next";
import { Suspense } from "react";
import { HandHeart, Mail, MapPin, MessageCircle } from "lucide-react";
import { Botanical, Breadcrumb, Eyebrow } from "@/components/site-ui";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contacto" };
export default function ContactPage() {
  return (
    <>
      <Breadcrumb label="Contacto" />
      <section className="contact-page">
        <div className="contact-copy">
          <Eyebrow>Producto, recolección y alianzas</Eyebrow>
          <h1>
            Conoce el compost.
            <br />
            <span>Conversemos.</span>
          </h1>
          <p>
            Consulta por nuestro compost, por la recolección
            para tu negocio o por una alianza de apoyo técnico, logística o
            comercialización.
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
          <div className="contact-channels">
            <h2>Hablemos directamente</h2>
            <a className="contact-whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, equipo de BioMercado Baranoa. Quisiera conocer más sobre su proyecto.")}`}
              target="_blank" rel="noopener noreferrer">
              <MessageCircle size={21} />
              <span><strong>WhatsApp</strong><span>{site.whatsappLabel}</span></span>
            </a>
            <div className="contact-email-heading"><Mail size={19} /> Correos del equipo</div>
            <ul>
              {site.emails.map((email) => (
                <li key={email}><a href={`mailto:${email}`}>{email}</a></li>
              ))}
            </ul>
          </div>
          <div className="contact-note">
            <HandHeart size={22} />
            <p>
              Escríbenos directamente o prepara tu consulta con el formulario.
              Podrás revisarla y enviarla desde WhatsApp o tu aplicación de correo.
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
