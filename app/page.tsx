import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Leaf,
  Recycle,
  Sprout,
  Store,
  HandHeart,
  MapPin,
} from "lucide-react";
import {
  Botanical,
  ButtonLink,
  Eyebrow,
  Faqs,
  JoinBanner,
} from "@/components/site-ui";
import { site } from "@/lib/site";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <Eyebrow>Una idea que nace en Baranoa</Eyebrow>
          <h1>
            Una nueva vida
            <br />
            para nuestros
            <br />
            <span>residuos.</span>
            <Leaf className="title-leaf" strokeWidth={1.3} />
          </h1>
          <p>
            Lo que hoy termina en el mercado puede volver a la tierra. Estamos
            preparando un proyecto para convertir residuos orgánicos en compost
            y oportunidades para nuestra comunidad.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/recoleccion">Conoce el proyecto</ButtonLink>
            <Link className="quiet-link" href="/compost">
              Descubre el compost <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="hero-location">
            <span className="small-round">
              <MapPin size={18} />
            </span>
            <span>
              De nuestra tierra.
              <br />
              <strong>Para nuestra gente.</strong>
            </span>
            <span className="hero-location-divider" />
            <span className="location-name">
              Baranoa, Atlántico
              <br />
              <span>Colombia</span>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <Botanical />
          <div className="hero-photo">
            <img
              src={site.images.hero}
              alt="Imagen referencial de compost que vuelve a la tierra entre plantas verdes"
              fetchPriority="high"
            />
            <span className="photo-reference">Imagen referencial</span>
          </div>
          <div className="hero-photo-top">
            <span>
              <span className="status-dot" /> Economía circular
            </span>
            <span className="round-outline">
              <ArrowUpRight size={23} />
            </span>
          </div>
          <div className="hero-floating">
            <span className="floating-icon">
              <Sprout size={28} strokeWidth={1.6} />
            </span>
            <div>
              <small>EL CICLO VUELVE A EMPEZAR</small>
              <strong>
                Menos desperdicio.
                <br />
                Más posibilidades.
              </strong>
            </div>
          </div>
          <span className="hero-side-note">
            SEPARAR · TRANSFORMAR · VOLVER A CRECER
          </span>
        </div>
      </section>
      <div className="purpose-strip">
        <span>
          <Leaf /> Orgánico por naturaleza
        </span>
        <span>
          <Recycle /> Circular por propósito
        </span>
        <span>
          <HandHeart /> Local de corazón
        </span>
        <a href="#como-funciona" aria-label="Ver cómo funciona">
          <ArrowDown size={20} />
        </a>
      </div>
      <section className="intro-section section-space" id="como-funciona">
        <div className="section-heading">
          <div>
            <Eyebrow>Una idea sencilla. Un cambio compartido.</Eyebrow>
            <h2>
              Todo está conectado.
              <br />
              <span className="muted-title">También lo que desechamos.</span>
            </h2>
          </div>
          <p>
            BioMercado busca unir a quienes generan residuos con quienes pueden
            darles una nueva vida. Así imaginamos el recorrido.
          </p>
        </div>
        <div className="process-grid">
          {[
            {
              icon: Store,
              n: "01",
              title: "Separamos",
              text: "Frutas y verduras, desde su origen y sin mezclarlas con otros residuos.",
            },
            {
              icon: Recycle,
              n: "02",
              title: "Recolectamos",
              text: "Con rutas y horarios que acordaremos con los comercios participantes.",
            },
            {
              icon: Leaf,
              n: "03",
              title: "Transformamos",
              text: "El compostaje convierte la materia orgánica en un recurso para la tierra.",
            },
            {
              icon: Sprout,
              n: "04",
              title: "Volvemos a crecer",
              text: "Compost para agricultores, viveros, jardines y nuevas oportunidades.",
            },
          ].map((s, i) => (
            <article className="process-item" key={s.n}>
              <div className="process-top">
                <span className="process-icon">
                  <s.icon size={27} strokeWidth={1.5} />
                </span>
                <span className="step-number">{s.n}</span>
                {i < 3 && <ArrowRight className="step-arrow" size={20} />}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="path-section section-space">
        <div className="section-heading">
          <div>
            <Eyebrow>Encuentra tu lugar en el ciclo</Eyebrow>
            <h2>
              Dos caminos.
              <br />
              <span className="muted-title">Un mismo propósito.</span>
            </h2>
          </div>
          <span className="section-note">
            Una propuesta pensada
            <br />
            para conectar personas.
          </span>
        </div>
        <div className="path-grid">
          <Link href="/recoleccion" className="path-card collection-card">
            <div className="path-card-top">
              <Store size={28} strokeWidth={1.5} />
              <span className="round-arrow">
                <ArrowUpRight />
              </span>
            </div>
            <div className="path-card-copy">
              <span className="overline">PARA COMERCIOS Y NEGOCIOS</span>
              <h3>
                Tu residuo tiene
                <br />
                mucho por dar.
              </h3>
              <p>
                Conoce la propuesta de separación y recolección para el mercado,
                restaurantes y fruver.
              </p>
              <span className="card-link">
                Quiero entregar mis residuos <ArrowRight size={17} />
              </span>
            </div>
            <Botanical />
          </Link>
          <Link href="/compost" className="path-card compost-card">
            <div className="path-card-top">
              <Sprout size={28} strokeWidth={1.5} />
              <span className="round-arrow">
                <ArrowUpRight />
              </span>
            </div>
            <div className="path-card-copy">
              <span className="overline">PARA QUIENES CULTIVAN</span>
              <h3>
                La tierra también
                <br />
                merece lo bueno.
              </h3>
              <p>
                Descubre el compost que queremos crear para cultivos, viveros y
                espacios verdes.
              </p>
              <span className="card-link">
                Me interesa el compost <ArrowRight size={17} />
              </span>
            </div>
            <div className="compost-card-art" aria-hidden="true">
              <span />
              <Leaf strokeWidth={0.8} />
            </div>
          </Link>
        </div>
      </section>
      <section className="community-section section-space">
        <div className="community-art">
          <Botanical />
          <div className="community-word">
            La tierra
            <br />
            nos une<span>.</span>
          </div>
          <div className="community-seal">
            <HandHeart size={25} />
            <span>
              Un proyecto
              <br />
              con raíces locales
            </span>
          </div>
        </div>
        <div className="community-copy">
          <Eyebrow>Hecho en comunidad</Eyebrow>
          <h2>
            Empezamos con
            <br />
            una idea.
            <br />
            <span className="muted-title">Crecemos contigo.</span>
          </h2>
          <p>
            Somos un equipo de emprendedoras que ve una oportunidad en los
            residuos del mercado de Baranoa. Queremos cuidar el entorno y crear
            nuevas conexiones entre los comercios y el campo.
          </p>
          <Link href="/nosotras" className="text-link">
            Conoce a quienes lo impulsan <ArrowUpRight size={20} />
          </Link>
          <div className="community-tags">
            <span>
              <Leaf size={16} /> Educación ambiental
            </span>
            <span>
              <HandHeart size={16} /> Participación local
            </span>
          </div>
        </div>
      </section>
      <Faqs limit={3} />
      <JoinBanner />
    </>
  );
}
