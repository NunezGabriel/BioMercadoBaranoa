"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Clock3, Leaf, Play } from "lucide-react";
import { Botanical, Eyebrow } from "@/components/site-ui";
import { site } from "@/lib/site";

export function PitchVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [opened, setOpened] = useState(false);
  const [error, setError] = useState("");

  function play() {
    if (!video.current) return;
    setError("");
    setOpened(true);
    video.current.focus({ preventScroll: true });
    void video.current.play().catch(() => {
      setError("Pulsa reproducir en los controles del video para continuar.");
    });
  }

  return (
    <section className="pitch-section section-space" id="nuestro-pitch" aria-labelledby="pitch-title">
      <div className="section-heading">
        <div>
          <Eyebrow>El proyecto, contado por nosotras</Eyebrow>
          <h2 id="pitch-title">Conoce la idea.<br /><span className="muted-title">Escucha a su equipo.</span></h2>
        </div>
        <p>Te presentamos BioMercado Baranoa: cómo nace la propuesta, qué queremos hacer y el camino que estamos construyendo.</p>
      </div>
      <div className="pitch-card">
        <div className="pitch-topline">
          <span><span className="status-dot" /> Nuestra presentación</span>
          <span><Clock3 size={15} /> {site.pitch.duration} min</span>
        </div>
        <div className="pitch-player">
          <video
            ref={video}
            src={site.pitch.src}
            preload="none"
            controls={opened}
            playsInline
            tabIndex={opened ? 0 : -1}
            aria-label="Presentación del proyecto BioMercado Baranoa"
            onPlay={() => { setOpened(true); setError(""); }}
            onError={() => setError("No pudimos cargar el video. Puedes abrirlo desde el enlace inferior.")}
          >
            Tu navegador no admite este reproductor. <a href={site.pitch.src}>Abre el video de la presentación.</a>
          </video>
          {!opened && (
            <button className="pitch-cover" type="button" onClick={play}
              aria-label="Reproducir el pitch de BioMercado Baranoa, 11 minutos y 33 segundos">
              <Botanical className="pitch-leaves" />
              <span className="pitch-cover-brand"><Leaf size={20} strokeWidth={1.5} /> BIOMERCADO BARANOA</span>
              <span className="pitch-cover-title">De residuos<br />a oportunidades<span>.</span></span>
              <span className="pitch-play"><span className="pitch-play-circle"><Play size={25} fill="currentColor" /></span><span>Reproducir presentación</span></span>
              <span className="pitch-cover-bottom"><span>Una idea que nace en comunidad</span><span>Baranoa, Atlántico</span></span>
            </button>
          )}
        </div>
        <div className="pitch-caption">
          <span>Las voces detrás de BioMercado.</span>
          <Link href="/contacto?interes=alianzas">Conversemos sobre el proyecto <ArrowUpRight size={17} /></Link>
        </div>
        {error && <p className="pitch-error" role="status">{error} <a href={site.pitch.src} target="_blank" rel="noopener noreferrer">Abrir video</a></p>}
      </div>
    </section>
  );
}
