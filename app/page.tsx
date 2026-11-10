import Image from "next/image";
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
  Play,
} from "lucide-react";
import {
  Botanical,
  ButtonLink,
  Eyebrow,
  Faqs,
  JoinBanner,
  Photo,
} from "@/components/site-ui";
import { site } from "@/lib/site";
import { ProcessFlow } from "@/components/process-flow";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <Eyebrow>BioMercado Baranoa · Compost orgánico</Eyebrow>
          <h1>
            Compost para
            <br />
            seguir
            <br />
            <span>creciendo.</span>
            <Leaf className="title-leaf" strokeWidth={1.3} />
          </h1>
          <p>
            Conoce nuestro compost orgánico. Una propuesta de cinco
            emprendedoras para aprovechar los residuos vegetales de Baranoa y
            devolverlos a cultivos, viveros y jardines.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/compost">Conoce nuestro compost</ButtonLink>
            <Link className="quiet-link" href="/nosotras">
              Quiénes somos <ArrowUpRight size={18} />
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
            <Image
              src={site.images.compost}
              alt="Bolsa de composta con la etiqueta de BioMercado Baranoa"
              width={1672}
              height={941}
              sizes="(max-width: 900px) 100vw, 55vw"
              loading="eager"
              fetchPriority="high"
            />
            <span className="photo-reference">Imagen referencial</span>
          </div>
          <div className="hero-photo-top">
            <span>
              <span className="status-dot" /> Nuestro compost
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
              <small>DEL MERCADO A LA TIERRA</small>
              <strong>
                Compost orgánico.
                <br />
                Nuevas oportunidades.
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
        <a href="#nuestro-compost" aria-label="Conocer nuestro compost">
          <ArrowDown size={20} />
        </a>
      </div>
      <section className="product-spotlight section-space" id="nuestro-compost">
        <Photo
          src={site.images.spotlight}
          alt="Personas compartiendo residuos vegetales y trabajando con compost y semilleros"
          className="product-growth-photo"
        />
        <div className="product-spotlight-copy">
          <Eyebrow>Nuestro producto</Eyebrow>
          <h2>Compost BioMercado.<br /><span className="muted-title">De vuelta a tu tierra.</span></h2>
          <p>Compost a partir del aprovechamiento de residuos vegetales, pensado para quienes cultivan y cuidan espacios verdes.</p>
          <p>Venta por kilogramo y empaques según la necesidad del comprador. Consulta las presentaciones, el precio y la disponibilidad con el equipo.</p>
          <ButtonLink href="/compost#consulta-producto">Consultar por el producto</ButtonLink>
        </div>
      </section>
      <section className="intro-section section-space" id="como-funciona">
        <div className="section-heading">
          <div>
            <Eyebrow>El origen de nuestro compost</Eyebrow>
            <h2>
              Del mercado a la bolsa.
              <br />
              <span className="muted-title">Un proceso que transforma.</span>
            </h2>
          </div>
          <p>
            BioMercado busca unir a quienes generan residuos con quienes pueden
            darles una nueva vida. Así imaginamos el recorrido.
          </p>
        </div>
        <ProcessFlow />
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
                Conoce el compost que estamos preparando para
                cultivos, viveros y jardines.
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
          <Link href="/nosotras#nuestro-pitch" className="pitch-home-link">
            <Play size={15} /> Ver nuestra presentación · {site.pitch.duration} min
          </Link>
        </div>
      </section>
      <Faqs limit={3} />
      <JoinBanner />
    </>
  );
}
