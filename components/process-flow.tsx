"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Leaf, PackageCheck, RotateCcw, Store, Truck } from "lucide-react";

const steps = [
  { icon: Store, title: "Separación", text: "Los comercios separan los restos de frutas y verduras de otros residuos." },
  { icon: Truck, title: "Recolección", text: "Se acuerdan rutas y horarios para llevar los residuos al área de compostaje." },
  { icon: Leaf, title: "Compostaje y maduración", text: "La materia orgánica se transforma con control de humedad, aireación y tiempo." },
  { icon: PackageCheck, title: "Compost empacado", text: "Tras validar su calidad, el compost se empaca para su comercialización según la necesidad del comprador." },
];

export function ProcessFlow() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [replay, setReplay] = useState(0);
  useEffect(() => {
    // Con movimiento reducido, el CSS ya muestra el recorrido completo sin animar.
    if (!root.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-flow" ref={root} data-visible={visible}>
      <div className="flow-caption">
        <span><span className="status-dot" /> Del mercado a una nueva vida</span>
        <button type="button" onClick={() => { setReplay((value) => value + 1); setVisible(true); }}>
          <RotateCcw size={15} /> Ver recorrido
        </button>
      </div>
      <ol className="flow-nodes" key={replay} aria-label="Proceso previsto de recolección y compostaje">
        {steps.map((step, index) => (
          <li className="flow-node" key={step.title} style={{ "--step": index } as CSSProperties}>
            <div className="flow-icon"><step.icon size={30} strokeWidth={1.5} /><span>0{index + 1}</span></div>
            {index < steps.length - 1 && <span className="flow-connection" aria-hidden="true" />}
            <div className="flow-copy"><h3>{step.title}</h3><p>{step.text}</p></div>
          </li>
        ))}
      </ol>
      <p className="flow-footnote">Así está planteado el proceso. Las rutas y el inicio de operación están por confirmar.</p>
    </div>
  );
}
