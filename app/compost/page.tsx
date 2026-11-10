import type { Metadata } from "next";
import { Flower2, Leaf, Shovel, Sprout } from "lucide-react";
import {
  Botanical,
  Breadcrumb,
  ButtonLink,
  Eyebrow,
  Faqs,
  JoinBanner,
  PageIntro,
  Photo,
} from "@/components/site-ui";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Compost" };
export default function CompostPage() {
  return (
    <>
      <Breadcrumb label="Compost" />
      <section className="inner-hero compost-hero">
        <div>
          <PageIntro
            label="De vuelta a la tierra"
            title="Una segunda vida."
            accent="Muchas nuevas raíces."
            description="El compost es el resultado del aprovechamiento de la materia orgánica. Queremos producirlo localmente para conectar los residuos del mercado con cultivos, viveros y jardines."
          />
          <ButtonLink href="/contacto?interes=compost">
            Me interesa el compost
          </ButtonLink>
          <span className="under-button-note">
            Producto en desarrollo. Disponibilidad por confirmar.
          </span>
        </div>
        <div className="inner-visual">
          <Photo
            src={site.images.compost}
            alt="Imagen referencial del trabajo con compost"
          />
          <span className="image-sticker">
            <Sprout size={25} />
            <span>
              Materia orgánica.
              <br />
              <strong>Nuevas posibilidades.</strong>
            </span>
          </span>
        </div>
      </section>
      <section className="compost-story section-space">
        <div className="soft-panel">
          <Botanical />
          <span className="giant-leaf">
            <Leaf strokeWidth={0.8} />
          </span>
          <span className="overline">EL TIEMPO TAMBIÉN TRANSFORMA</span>
          <h2>
            La naturaleza
            <br />
            conoce el camino.
          </h2>
        </div>
        <div>
          <Eyebrow>Un proceso con cuidado</Eyebrow>
          <h2>
            Del residuo vegetal
            <br />
            <span className="muted-title">al compost.</span>
          </h2>
          <p>
            La propuesta contempla clasificar y mezclar los residuos, controlar
            la humedad y la aireación, y dar tiempo a su maduración.
          </p>
          <p>
            Antes de ofrecer el producto, el equipo deberá validar el proceso,
            su calidad y las presentaciones. Queremos crecer sobre una base bien
            cuidada.
          </p>
          <ul className="check-list">
            <li>
              <Leaf size={18} /> Aprovechamiento de materia orgánica
            </li>
            <li>
              <Sprout size={18} /> Producción local como propósito
            </li>
            <li>
              <Shovel size={18} /> Orientación sobre el uso del producto
            </li>
          </ul>
        </div>
      </section>
      <section className="uses-section section-space">
        <div className="section-heading">
          <div>
            <Eyebrow>Para quienes hacen crecer la vida</Eyebrow>
            <h2>
              Cada espacio verde
              <br />
              <span className="muted-title">tiene su propia historia.</span>
            </h2>
          </div>
        </div>
        <div className="uses-grid">
          {[
            {
              icon: Sprout,
              title: "Cultivos y fincas",
              text: "Agricultores y pequeños productores interesados en el aprovechamiento local.",
            },
            {
              icon: Leaf,
              title: "Viveros",
              text: "Personas que acompañan el crecimiento de plantas desde sus primeras raíces.",
            },
            {
              icon: Flower2,
              title: "Jardines",
              text: "Quienes cuidan espacios verdes y quieren conocer alternativas de abono orgánico.",
            },
          ].map((x) => (
            <article key={x.title}>
              <x.icon size={35} strokeWidth={1.4} />
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
        <div className="availability-note">
          <span className="status-dot" />
          <p>
            Las presentaciones, cantidades y condiciones de entrega se definirán
            tras la validación del producto.
          </p>
        </div>
      </section>
      <Faqs />
      <JoinBanner />
    </>
  );
}
