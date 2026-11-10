"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle, Package, Scale } from "lucide-react";
import { site } from "@/lib/site";

const inquiries = {
  pedido: {
    label: "Realizar pedido",
    message: "Hola, equipo de BioMercado Baranoa. Me interesa realizar un pedido de compost. Quisiera acordar la cantidad que necesito y conocer las presentaciones disponibles, el precio y las condiciones de entrega. ¿Me pueden orientar?",
  },
  consulta: {
    label: "Hacer una consulta",
    message: "Hola, equipo de BioMercado Baranoa. Quisiera conocer más sobre su compost, las presentaciones previstas y la orientación para utilizarlo. ¿Me pueden dar más información?",
  },
};

export function ProductInquiry() {
  const [selected, setSelected] = useState<keyof typeof inquiries | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const phone = site.whatsapp.replace(/\D/g, "");
  const price = site.product.pricePerKgCOP;
  const message = selected ? inquiries[selected].message : "";
  const priceLabel = price === null ? "Precio por consultar" : `${new Intl.NumberFormat("es-CO", {
    style: "currency", currency: "COP", maximumFractionDigits: 0,
  }).format(price)} COP / kg`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus("Mensaje copiado");
    } catch {
      setCopyStatus("Selecciona el texto y cópialo manualmente.");
    }
  }

  return (
    <div className="product-inquiry" id="consulta-producto">
      <div className="purchase-heading">
        <span className="purchase-format"><Scale size={18} /> Venta por kilogramo</span>
        <span>{priceLabel}</span>
      </div>
      <dl className="sales-options">
        <div>
          <dt><Scale size={19} /> La cantidad que necesitas</dt>
          <dd>La propuesta contempla comercializar el compost por kilogramo. Consulta la cantidad y disponibilidad con el equipo.</dd>
        </div>
        <div>
          <dt><Package size={19} /> Presentaciones y empaque</dt>
          <dd>Empaques según la necesidad del comprador. La presentación y el precio se acuerdan antes de confirmar el pedido.</dd>
        </div>
      </dl>
      <div className="sales-actions">
        {(Object.keys(inquiries) as Array<keyof typeof inquiries>).map((kind) => {
          const inquiry = inquiries[kind];
          const className = `button ${kind === "pedido" ? "button-primary" : "button-secondary"} purchase-action`;
          return phone ? (
            <a key={kind} className={className} href={`https://wa.me/${phone}?text=${encodeURIComponent(inquiry.message)}`}
              target="_blank" rel="noopener noreferrer">
              <MessageCircle size={19} /> {inquiry.label} por WhatsApp <ArrowUpRight size={17} />
            </a>
          ) : (
            <button key={kind} type="button" className={className} aria-controls="mensaje-producto"
              aria-expanded={selected === kind} onClick={() => { setSelected(kind); setCopyStatus(""); }}>
              <MessageCircle size={19} /> {inquiry.label} <ArrowUpRight size={17} />
            </button>
          );
        })}
      </div>
      <p className="purchase-note">{phone
        ? "Continuarás en WhatsApp. El equipo confirmará disponibilidad, presentación, precio y entrega antes de acordar la compra."
        : "El número de WhatsApp está pendiente de confirmación. Por ahora, los botones preparan un mensaje para copiar; no envían ni reservan pedidos."}</p>
      <div id="mensaje-producto">
        {selected && (
          <div className="purchase-message">
            <label htmlFor="consulta-preparada">{selected === "pedido" ? "Tu solicitud de pedido" : "Tu consulta"}</label>
            <textarea id="consulta-preparada" readOnly rows={5} value={message} onFocus={(event) => event.target.select()} />
            <button type="button" className="copy-purchase" onClick={copy}>
              {copyStatus === "Mensaje copiado" ? <Check size={17} /> : <Copy size={17} />} Copiar mensaje
            </button>
            <span role="status">{copyStatus}</span>
          </div>
        )}
      </div>
    </div>
  );
}
