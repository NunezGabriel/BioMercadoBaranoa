"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  Leaf,
  MessageCircle,
  Sprout,
  Store,
  Users,
} from "lucide-react";
import { site } from "@/lib/site";
const interests = [
  { value: "residuos", label: "Entregar residuos", icon: Store },
  { value: "compost", label: "Conocer el compost", icon: Sprout },
  { value: "colaborar", label: "Colaborar", icon: Users },
];
export function ContactForm() {
  const params = useSearchParams();
  const [interest, setInterest] = useState("residuos");
  const [message, setMessage] = useState("");
  const [copyState, setCopyState] = useState("");
  useEffect(() => {
    const value = params.get("interes");
    if (interests.some((i) => i.value === value)) setInterest(value!);
  }, [params]);
  const hasContact = Boolean(site.whatsapp || site.email);
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nombre") || "").trim();
    const contact = String(data.get("contacto") || "").trim();
    if (!name || !contact) return;
    const business = String(data.get("negocio") || "").trim();
    const detail = String(data.get("mensaje") || "").trim();
    const label = interests
      .find((i) => i.value === interest)!
      .label.toLowerCase();
    setMessage(
      `Hola, equipo de BioMercado Baranoa. Soy ${name} y me interesa ${label}.${business ? `\nMi negocio: ${business}.` : ""}\nMi contacto: ${contact}.${detail ? `\n\n${detail}` : ""}\n\nMe gustaría conocer los próximos pasos del proyecto.`,
    );
    setCopyState("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyState("Mensaje copiado");
    } catch {
      setCopyState("Selecciona el mensaje para copiarlo, o descárgalo.");
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([message], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "mi-mensaje-biomercado.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className="contact-form-panel">
      <div className="form-heading">
        <span className="leaf-icon">
          <Leaf size={23} />
        </span>
        <div>
          <h2>Empecemos por conocernos.</h2>
          <p>Prepara una consulta en pocos pasos.</p>
        </div>
      </div>
      <form
        onSubmit={prepare}
        onChange={() => {
          setMessage("");
          setCopyState("");
        }}
      >
        <fieldset className="interest-field">
          <legend>¿Cómo te gustaría participar?</legend>
          <div className="interest-options">
            {interests.map((i) => (
              <label
                className={interest === i.value ? "selected" : ""}
                key={i.value}
              >
                <input
                  type="radio"
                  name="interes"
                  value={i.value}
                  checked={interest === i.value}
                  onChange={() => {
                    setInterest(i.value);
                    setMessage("");
                  }}
                />
                <i.icon size={22} />
                <span>{i.label}</span>
                <Check className="selection-check" size={14} />
              </label>
            ))}
          </div>
        </fieldset>
        <div className="form-fields">
          <label htmlFor="nombre">
            Tu nombre
            <input
              id="nombre"
              name="nombre"
              autoComplete="name"
              placeholder="¿Cómo te llamas?"
              required
              maxLength={100}
              pattern={".*\\S.*"}
            />
          </label>
          {interest === "residuos" && (
            <label htmlFor="negocio">
              Nombre del negocio <span>(opcional)</span>
              <input
                id="negocio"
                name="negocio"
                autoComplete="organization"
                placeholder="Tu comercio, restaurante o fruver"
                maxLength={160}
              />
            </label>
          )}
          <label htmlFor="contacto">
            WhatsApp o correo
            <input
              id="contacto"
              name="contacto"
              placeholder="El medio por el que prefieres conversar"
              required
              maxLength={180}
              pattern={".*\\S.*"}
            />
          </label>
          <label htmlFor="mensaje">
            ¿Qué tienes en mente? <span>(opcional)</span>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos un poco sobre tu interés…"
              rows={3}
              maxLength={2000}
            />
          </label>
        </div>
        <button type="submit" className="button button-primary form-submit">
          Preparar mi mensaje{" "}
          <span className="button-icon">
            <ArrowUpRight size={19} />
          </span>
        </button>
        <p className="form-privacy">
          Tus datos permanecen en esta página. Preparar el mensaje no lo envía
          ni lo guarda en un servidor.
        </p>
      </form>
      {message && (
        <section className="prepared-message" aria-live="polite">
          <h3>
            <CheckCircle2 size={20} /> Tu mensaje está listo
          </h3>
          <p>
            Revísalo y compártelo con el equipo por el canal que tengan
            acordado.
          </p>
          <textarea
            aria-label="Mensaje preparado"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
          />
          <div className="message-actions">
            <button onClick={copy}>
              <Copy size={17} /> Copiar mensaje
            </button>
            <button onClick={download}>
              <Download size={17} /> Descargar
            </button>
            {hasContact && (
              <a
                href={
                  site.whatsapp
                    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
                    : `mailto:${site.email}?subject=Consulta%20BioMercado&body=${encodeURIComponent(message)}`
                }
                target={site.whatsapp ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> Compartir
              </a>
            )}
          </div>
          <span className="copy-status" role="status">
            {copyState}
          </span>
        </section>
      )}
    </div>
  );
}
