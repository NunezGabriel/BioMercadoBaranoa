import type { Metadata } from "next";
import { site } from "@/lib/site";
import { HandHeart, Leaf, MapPin, Sprout, Users } from "lucide-react";
import {
  Botanical,
  Breadcrumb,
  ButtonLink,
  Eyebrow,
  JoinBanner,
  PageIntro,
} from "@/components/site-ui";
export const metadata: Metadata = { title: "Nosotras" };
const names = [
  "Lina David David",
  "Luisa Fernanda Peña Arango",
  "Sandra Orellano Navas",
  "Danys Rivera Tenorio",
  "Liliana Velasquez Garzon",
];
export default function AboutPage() {
  return (
    <>
      <Breadcrumb label="Nosotras" />
      <section className="about-hero">
        <div>
          <PageIntro
            label="Un equipo. Un propósito compartido."
            title="Las buenas ideas"
            accent="echan raíces juntas."
            description="Somos un equipo de cinco emprendedoras que encontró en los residuos orgánicos una oportunidad para cuidar el entorno y aportar a la comunidad de Baranoa."
          />
          <ButtonLink href="/contacto?interes=alianzas">
            Proponer una alianza
          </ButtonLink>
        </div>
        <div className="about-art">
          <Botanical />
          <span className="about-art-circle">
            <HandHeart size={76} strokeWidth={1} />
          </span>
          <span className="about-art-text">
            Por Baranoa.
            <br />
            Para crecer
            <br />
            <em>juntas.</em>
          </span>
          <span className="about-art-location">
            <MapPin size={17} /> Baranoa, Atlántico
          </span>
        </div>
      </section>
      {site.images.community && (
        <figure className="community-photo">
          <img
            src={site.images.community}
            alt="Imagen conceptual de manos colaborando en una siembra"
          />
          <figcaption>Imagen referencial</figcaption>
        </figure>
      )}
      <section className="our-story section-space">
        <Eyebrow>El origen de BioMercado</Eyebrow>
        <h2>
          Mirar lo cotidiano.
          <br />
          <span className="muted-title">Imaginar algo diferente.</span>
        </h2>
        <div className="story-columns">
          <p>
            En el mercado, los restos de frutas y verduras forman parte de cada
            jornada. Cuando se mezclan y no se aprovechan, se pierde la
            oportunidad de darles otro destino.
          </p>
          <p>
            De esa observación nace BioMercado Baranoa: una propuesta para
            conectar comercios, compostaje y personas que cultivan. Nuestro
            producto previsto es compost para comercializar por kilogramo. Estamos preparando
            su producción y las condiciones para ofrecerlo a nuestros clientes.
          </p>
        </div>
      </section>
      <section className="team-section section-space">
        <div className="section-heading">
          <div>
            <Eyebrow>Quienes están sembrando esta idea</Eyebrow>
            <h2>
              Detrás del proyecto,
              <br />
              <span className="muted-title">un equipo con ganas.</span>
            </h2>
          </div>
          <p>
            Cinco miradas que se encuentran en una misma intención: transformar
            residuos en oportunidades.
          </p>
        </div>
        <div className="team-grid">
          {names.map((name, i) => (
            <article key={name}>
              <div className={`team-avatar avatar-${i}`}>
                <Sprout size={38} strokeWidth={1.2} />
                <span>0{i + 1}</span>
              </div>
              <h3>{name}</h3>
              <span>Equipo emprendedor</span>
            </article>
          ))}
        </div>
      </section>
      <section className="values-section section-space">
        <div>
          <Eyebrow>Lo que queremos cultivar</Eyebrow>
          <h2>
            Un impacto que
            <br />
            <span className="muted-title">empieza cerca.</span>
          </h2>
          <p>
            Estos son los cambios que buscamos impulsar a medida que el proyecto
            tome forma.
          </p>
        </div>
        <div className="values-list">
          {[
            {
              icon: Leaf,
              title: "Cuidar nuestro entorno",
              text: "Contribuir a una mejor separación y aprovechamiento de los residuos del mercado.",
            },
            {
              icon: Users,
              title: "Aprender en comunidad",
              text: "Promover conversaciones y educación ambiental entre comerciantes y vecinos.",
            },
            {
              icon: HandHeart,
              title: "Crear oportunidades locales",
              text: "Conectar a quienes generan residuos con quienes pueden aprovechar el compost.",
            },
          ].map((x) => (
            <article key={x.title}>
              <span>
                <x.icon size={23} />
              </span>
              <div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
