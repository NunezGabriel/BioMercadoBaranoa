# BioMercado Baranoa

Web de presentación del proyecto de compostaje y economía circular de Baranoa, Atlántico. Incluye cinco páginas adaptadas a escritorio y móvil: Inicio, Recolección, Compost, Nosotras y Contacto.

La identidad usa el logo proporcionado por el equipo y una paleta salvia, crema y verde bosque inspirada en la referencia visual del proyecto.

## Desarrollo local

Requiere Node.js 22.13 o posterior.

```bash
npm ci
npm run dev
```

La consola indica la dirección local, normalmente `http://localhost:5173`.

```bash
npx tsc --noEmit
npm run build
npm start
```

El proyecto usa React, TypeScript y Vinext (API de rutas de Next.js sobre Vite). El build produce un Worker compatible con Cloudflare. Las herramientas de Sites conservan la configuración de publicación en `.openai/hosting.json`; el remoto `origin` sigue siendo el repositorio de GitHub.

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

El logo `public/images/logo-biomercado.png` es el archivo proporcionado por el usuario y conserva sus proporciones y fondo blanco. Las fotografías iniciales proceden de la presentación del proyecto y se muestran como referencias, no como evidencia de instalaciones propias.

Para incorporar las imágenes nuevas, guardarlas en `public/images/` y actualizar sus rutas en `lib/site.ts`. Los campos `hero`, `collection`, `compost` y `community` corresponden a las cuatro composiciones descritas en `IMAGE_PROMPTS.md`.

## Contacto y alcance actual

El equipo todavía no ha facilitado un teléfono o correo oficial. Por eso el formulario **prepara un mensaje local**, que el visitante puede editar, copiar o descargar; no envía ni almacena datos en un servidor. No hay pagos, reservas, cuentas ni una base de datos de clientes.

Cuando el equipo confirme sus canales, completar `whatsapp` (solo dígitos con código de país) o `email` en `lib/site.ts`. El resultado del formulario mostrará entonces el enlace correspondiente para que el visitante comparta su consulta. También debe revisarse el texto informativo de `app/contacto/page.tsx` para reflejar el canal habilitado.

El contenido presenta el emprendimiento como un proyecto en preparación. Antes de abrirlo al público, el equipo debe confirmar el estado de operación, las condiciones del servicio, las presentaciones del compost y los datos de contacto. No se publican cifras de impacto, testimonios o alianzas no confirmadas.

## Publicación

Los commits se hacen en este repositorio. La identidad de Sites se conserva en `.openai/hosting.json`. La publicación inicial de Sites es privada para el propietario; compartir públicamente es una acción independiente.

Los directorios `node_modules`, `dist`, `.wrangler`, `.sites-runtime`, los archivos de entorno y los archivos temporales de publicación están excluidos de Git.
