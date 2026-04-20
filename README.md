# Climanares: Landing Page & GTM Measurement Showcase

Este proyecto es un **Lander de Alto Nivel** para una empresa de climatización en Chile, diseñado no solo para convertir, sino para servir como un **caso de estudio en la implementación profesional de métricas con Google Tag Manager (GTM)**.

---

## 🚀 Propósito del Proyecto
1. **Comercial**: Presentar una imagen premium y profesional para Climanares, enfocada en los sectores de oficinas, salas de venta y cocinas industriales.
2. **Técnico (Portafolio)**: Demostrar una implementación limpia y escalable de seguimiento de datos (Tracking) sin intervención directa en el código de aplicación para cada evento.

---

## 🛠️ Stack Tecnológico
- **Frontend**: HTML5, Vanilla CSS (Glassmorphism), Vanilla JavaScript.
- **Visuales**: Imágenes de alta resolución generadas con IA para coherencia estética.
- **Medición**: Google Tag Manager, Google Analytics 4 (Estructura preparada).

---

## 📈 Guía de Implementación de Mediciones

Se ha instalado **Google Tag Manager (GTM)** como el "contenedor central" de todas las etiquetas de marketing. Esto permite gestionar mediciones sin necesidad de modificar el código fuente constantemente.

- **GTM ID Instalado:** `GTM-THQ7HWVN`
- **Ubicación en el código:**
    - Fragmento `<script>` inmediatamente después de la apertura del `<head>`.
    - Fragmento `<noscript>` inmediatamente después de la apertura del `<body>`.

---

## 2. Cómo Finalizar la Configuración en el Panel de GTM

Para que los datos comiencen a fluir hacia Google Analytics 4 (GA4), el administrador debe seguir estos pasos dentro de la interfaz de [Google Tag Manager](https://tagmanager.google.com/):

### Paso A: Crear la Etiqueta de Configuración de GA4
1. Ir a **Etiquetas** > **Nueva**.
2. **Nombre:** `GA4 - Configuración`.
3. **Tipo de etiqueta:** "Google Analytics: Configuración de GA4".
4. **ID de medición:** Ingresar el ID de flujo de GA4 (ejemplo: `G-XXXXXXXXXX`).
5. **Activación (Trigger):** Seleccionar "All Pages" (Todas las páginas).
6. **Guardar**.

### Paso B: Configurar la Conversión de WhatsApp (Evento Crítico)
Dado que el objetivo principal es el contacto industrial, debemos medir los clics en el botón de WhatsApp:
1. Crear un **Activador** (Trigger):
    - **Tipo:** Solo enlaces.
    - **Condición:** El URL del clic contiene `wa.me` o `whatsapp`.
    - **Nombre:** `Click - WhatsApp`.
2. Crear una **Etiqueta de Evento**:
    - **Tipo:** "Google Analytics: Evento de GA4".
    - **Nombre:** `GA4 - Evento - WhatsApp`.
    - **Nombre del evento:** `generate_lead`.
    - **Activación:** Seleccionar el activador `Click - WhatsApp`.
3. **Publicar** los cambios en GTM.

---

## 3. Verificación de la Instalación

Para asegurar que todo funciona correctamente antes de invertir en publicidad:

1. **GTM Preview Mode:** Utilizar la herramienta de vista previa de GTM para navegar el sitio y confirmar que la etiqueta de GA4 se dispara ("Fired").
2. **Tag Assistant:** Utilizar la extensión de Chrome "Tag Assistant Companion" para validar la correcta carga de los fragmentos.
3. **GA4 DebugView:** En el panel de administración de Google Analytics, abrir "DebugView" y hacer clic en el botón de WhatsApp del sitio para ver el evento en tiempo real.

---

## 4. Mejores Prácticas SEO y Datos

Este sitio ha sido optimizado estructuralmente para reportar mejor información a Google:
- **Títulos Semánticos:** Ayudan a GA4 a categorizar qué tipo de servicio está viendo el usuario (Oficinas vs. Cocinas).
- **Meta Descriptions:** Optimizadas para aumentar el CTR (Click-Through Rate) en los resultados de búsqueda.

---

## Próximos Pasos Sugeridos
1. Vincular Google Ads con GTM para el seguimiento de conversiones de campañas pagadas.
2. Implementar el **Pixel de Meta (Facebook/Instagram)** vía GTM si se planea hacer campañas en redes sociales.

---
**Climanares - Documentación Técnica 2026**
