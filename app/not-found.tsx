import { ButtonLink } from "@/components/site-ui";
import { Sprout } from "lucide-react";
export default function NotFound() {
  return (
    <section className="not-found">
      <Sprout size={64} strokeWidth={1} />
      <span className="eyebrow">404</span>
      <h1>
        Por aquí todavía
        <br />
        no hay raíces.
      </h1>
      <p>Esta página no existe. Volvamos al inicio del recorrido.</p>
      <ButtonLink href="/">Volver al inicio</ButtonLink>
    </section>
  );
}
