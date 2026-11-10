import type { Metadata } from "next";
import { Flower2, Leaf, Shovel, Sprout } from "lucide-react";
import {
  Breadcrumb,
  Eyebrow,
  Faqs,
  JoinBanner,
  PageIntro,
  Photo,
} from "@/components/site-ui";
import { site } from "@/lib/site";
import { ProductInquiry } from "@/components/product-inquiry";
export const metadata: Metadata = {
  title: "Compost orgánico",
  description: "Conoce el compost de BioMercado Baranoa. Venta por kilogramo y presentaciones según la necesidad del comprador. Consulta precio y disponibilidad.",
};
export default function CompostPage() {
  return (
    <>
      <Breadcrumb label="Compost" />
      <section className="inner-hero compost-hero">
        <div>
          <PageIntro
            label="Nuestro producto · BioMercado Baranoa"
            title="Compost orgánico."
            accent="Para lo que cultivas."
            description="Estamos preparando un compost a partir de residuos vegetales del mercado y negocios de alimentos de Baranoa. Una propuesta para agricultores, viveros y personas que cuidan sus jardines."
          />
          <ProductInquiry />
        </div>
        <div className="inner-visual">
          <Photo
            src={site.images.compostDetail}
            alt="Tres bolsas de composta BioMercado Baranoa sobre una mesa en el campo"
            className="compost-product-photo"
          />
          <span className="image-sticker">
            <Sprout size={25} />
            <span>
              Compost BioMercado
              <br />
              <strong>Consulta nuestras presentaciones</strong>
            </span>
          </span>
        </div>
      </section>
      <section className="compost-story section-space">
        <Photo src={site.images.hero} alt="Brote verde en un montículo de compost" className="product-growth-photo" />
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
            Antes de su venta, validaremos el proceso, la calidad del compost
            y sus presentaciones, junto con las
            indicaciones para utilizarlo.
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
            Consulta por la cantidad, el empaque, el precio y la disponibilidad
            antes de acordar una compra o entrega.
          </p>
        </div>
      </section>
      <Faqs />
      <JoinBanner />
    </>
  );
}
