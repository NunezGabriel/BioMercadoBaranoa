# BioMercado Baranoa

Web de marca y producto de BioMercado Baranoa, Atlántico. Presenta la propuesta de venta de compost por kilogramo y empaques según la necesidad del comprador, sin fijar tamaños de bolsa. Incluye cinco páginas adaptadas a escritorio y móvil: Inicio, Nuestro compost, Nosotras, Recolección y Contacto.

La identidad usa el logo proporcionado por el equipo y una paleta salvia, crema y verde bosque inspirada en la referencia visual del proyecto.

## Desarrollo local

Requiere Node.js 20.9 o posterior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

Para comprobar la versión de producción:

```bash
npm run build
npm start
```

El proyecto es Next.js estándar (App Router) con React y TypeScript. No usa base de datos, variables de entorno obligatorias ni servicios externos.

## Archivos principales

- `app/`: páginas, metadatos y estilos responsive.
- `components/site-header.tsx`: navegación de escritorio y móvil.
- `components/site-ui.tsx`: componentes visuales compartidos y preguntas frecuentes.
- `components/contact-form.tsx`: preparación, copia y descarga de consultas.
- `lib/site.ts`: canales de contacto, rutas de imágenes y contenido de preguntas frecuentes.
- `public/images/`: logo e imágenes de referencia.
- `public/fonts/`: Manrope y su licencia OFL, servidos localmente.
- `IMAGE_PROMPTS.md`: instrucciones para generar las cuatro imágenes definitivas.

## Imágenes

El logo `public/images/logo-biomercado-transparente.png` corresponde al archivo transparente `nobglogo.png` proporcionado por el usuario. El encabezado y el pie de página no tienen un recuadro blanco. La ruta nueva evita reutilizar la imagen anterior desde la caché del navegador.

Las imágenes aportadas por el usuario están integradas sin modificar. La portada usa `compost-biomercado-bolsa.png`; la cabecera de Nuestro compost usa `compost-presentaciones-campo.png`, mediante `site.images.compostDetail`. La escena `compost-comunidad.png` se muestra en la sección «Compost BioMercado. De vuelta a tu tierra.» de Inicio, mediante `site.images.spotlight`. `brote-compost.png` y `recoleccion-vegetales.png` ilustran el compost y la separación de residuos.

Para incorporar las imágenes nuevas, guardarlas en `public/images/` y actualizar sus rutas en `lib/site.ts`. Los campos `hero`, `collection`, `compost` y `community` corresponden a las cuatro composiciones descritas en `IMAGE_PROMPTS.md`.

## Contacto y alcance actual

Inicio presenta el producto y enlaza a Nuestro compost. La ficha explica la venta por kilogramo y las presentaciones según la necesidad del comprador, como plantean el Excel y el PPT. No fija pesos por bolsa ni incluye un contador de cantidades. Las acciones «Realizar pedido» y «Hacer una consulta» preparan mensajes distintos para acordar cantidad, presentación, precio y entrega con el equipo; no registran ventas ni reservan existencias.

Para activar los dos enlaces de WhatsApp, completar `site.whatsapp` en `lib/site.ts` con el número oficial y código de país. Cada enlace abre su mensaje preparado, que el cliente debe enviar. Mientras el número esté vacío, los botones permiten preparar y copiar el mensaje, con un aviso de que no se envía. `site.product.pricePerKgCOP` puede configurarse con el precio aprobado por kilogramo en pesos colombianos; `null` muestra «Precio por consultar».

El recorrido animado de cuatro nodos está en `components/process-flow.tsx` y se muestra únicamente en Inicio. Se reproduce al entrar en pantalla y puede repetirse con «Ver recorrido». Se adapta a disposición vertical en móvil y respeta la preferencia de movimiento reducido. No requiere video ni dependencias adicionales.

El equipo todavía no ha facilitado un teléfono o correo oficial. Por eso el formulario **prepara un mensaje local**, que el visitante puede editar, copiar o descargar; no envía ni almacena datos en un servidor. No hay pagos, reservas, cuentas ni una base de datos de clientes.

Cuando el equipo confirme sus canales, completar `whatsapp` (solo dígitos con código de país) o `email` en `lib/site.ts`. El resultado del formulario mostrará entonces el enlace correspondiente para que el visitante comparta su consulta. También debe revisarse el texto informativo de `app/contacto/page.tsx` para reflejar el canal habilitado.

El contenido presenta el emprendimiento como un proyecto en preparación. Las presentaciones concretas, el precio, la disponibilidad y las condiciones de entrega siguen pendientes de confirmación. No hay carrito ni cobro en línea.

El formulario mantiene la opción general «Sobre el compost», sin asociarla a un peso ni a una compra, y las consultas por recolección. «Proponer alianza» está acotado a acuerdos de recolección o logística de residuos, apoyo técnico al compostaje y comercialización del compost. No ofrece un programa abierto de voluntariado o inscripción. Los enlaces antiguos con `interes=colaborar` siguen abriendo la opción de alianzas.

## Publicación en Vercel

1. Sube los cambios a GitHub (`git push`).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio `BioMercadoBaranoa`.
3. Vercel detecta Next.js automáticamente. No hay que cambiar el comando de build ni el directorio de salida, ni configurar variables de entorno.
4. Pulsa **Deploy**. Cada `git push` a `main` vuelve a publicar el sitio.

Opcional: si se conecta un dominio propio, añade la variable `NEXT_PUBLIC_SITE_URL` (por ejemplo `https://biomercadobaranoa.com`) para que las vistas previas al compartir enlaces usen ese dominio. Sin ella se usa el dominio de producción de Vercel.

Las imágenes de `public/images/` se sirven con `next/image`, que en Vercel las convierte a formatos ligeros (WebP/AVIF) y al tamaño de cada pantalla.
