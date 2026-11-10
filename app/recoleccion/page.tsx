import type { Metadata } from "next";
import { Apple, Carrot, CalendarDays, Check, Store, Truck } from "lucide-react";
import {
  Breadcrumb,
  ButtonLink,
  Eyebrow,
  Faqs,
  JoinBanner,
  PageIntro,
  Photo,
} from "@/components/site-ui";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Recolección" };
export default function CollectionPage() {
  return (
    <>
      <Breadcrumb label="Recolección" />
      <section className="inner-hero collection-hero">
        <div>
          <PageIntro
            label="Para comercios y negocios"
            title="Lo que tu negocio deja,"
            accent="puede ser un comienzo."
            description="Estamos preparando una alternativa para separar y aprovechar los residuos de frutas y verduras del mercado de Baranoa. El primer paso lo damos desde cada comercio."
          />
          <ButtonLink href="/contacto?interes=residuos">
            Me interesa participar
          </ButtonLink>
          <span className="under-button-note">
            Conoce la propuesta. Las rutas aún están por definir.
          </span>
        </div>
        <div className="inner-visual">
          <Photo
            src={site.images.collection}
            alt="Referencia de recipientes para residuos orgánicos en un mercado"
          />
          <span className="image-sticker">
            <Store size={23} />
            <span>
              Del mercado
              <br />
              <strong>a una nueva oportunidad</strong>
            </span>
          </span>
        </div>
      </section>
      <section className="section-space separation-section">
        <div>
          <Eyebrow>Separar es cuidar</Eyebrow>
          <h2>
            Un pequeño hábito.
            <br />
            <span className="muted-title">Un mejor punto de partida.</span>
          </h2>
          <p>
            La propuesta inicial se concentra en residuos vegetales. Mantenerlos
            separados permite pensar en su aprovechamiento desde el origen.
          </p>
        </div>
        <div className="sorting-board">
          <div className="sorting-header">
            <span>¿Por dónde empezamos?</span>
            <span className="small-round">
              <Check size={18} />
            </span>
          </div>
          <div className="sorting-item">
            <span className="sorting-icon">
              <Apple size={32} />
            </span>
            <div>
              <h3>Frutas</h3>
              <p>Cáscaras y restos de frutas, separados.</p>
            </div>
            <Check size={18} />
          </div>
          <div className="sorting-item">
            <span className="sorting-icon">
              <Carrot size={32} />
            </span>
            <div>
              <h3>Verduras</h3>
              <p>Restos vegetales de tu actividad diaria.</p>
            </div>
            <Check size={18} />
          </div>
          <p className="sorting-note">
            Sin empaques ni materiales mezclados. Las condiciones finales de
            recepción se validarán antes de comenzar.
          </p>
        </div>
      </section>
      <section className="steps-section section-space">
        <div className="section-heading">
          <div>
            <Eyebrow>Así lo estamos imaginando</Eyebrow>
            <h2>
              Una recolección
              <br />
              <span className="muted-title">que se organiza contigo.</span>
            </h2>
          </div>
          <p>
            La frecuencia, los horarios y las condiciones se acordarán con cada
            comercio cuando el servicio esté listo.
          </p>
        </div>
        <div className="timeline">
          {[
            {
              icon: Store,
              title: "Nos conocemos",
              text: "Entendemos tu negocio, los residuos que genera y tus necesidades.",
            },
            {
              icon: CalendarDays,
              title: "Acordamos el proceso",
              text: "Definimos separación, recipientes y una propuesta de horarios.",
            },
            {
              icon: Truck,
              title: "Conectamos con el compostaje",
              text: "Planteamos el traslado al espacio de aprovechamiento y su seguimiento.",
            },
          ].map((item, i) => (
            <article key={item.title}>
              <div className="timeline-icon">
                <item.icon size={27} />
              </div>
              <span className="overline">PASO 0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <Faqs limit={3} />
      <JoinBanner />
    </>
  );
}
