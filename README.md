# Generador PDF - Todo Cristal 💎

Aplicación web interactiva para la creación, personalización y exportación de presupuestos profesionales en formato PDF A4 para **Todo Cristal**.

---

## 📁 Estructura del Proyecto

El repositorio está organizado con la siguiente estructura limpia y modular:

```text
todo-cristal-pdf/
├── index.html            # Archivo HTML principal en la raíz del repositorio
├── css/
│   └── styles.css        # Estilos modulares, CSS variables y formato de hoja A4
├── js/
│   └── app.js            # Lógica JS: reactividad, cálculo de totales y html2pdf.js
├── assets/
│   └── logo.svg          # Logo vectorial de Todo Cristal (optimizado)
└── README.md             # Documentación del proyecto e instrucciones de despliegue
```

> **Nota:** El archivo `index.html` debe estar ubicado en la **raíz** del repositorio para permitir que GitHub Pages lo sirva directamente de forma transparente sin requerir rutas adicionales en la URL.

---

## 🚀 Características Clave

- 📄 **Formato A4 Estándar (210mm x 297mm):** Vista previa idéntica a la hoja impresa.
- 🎨 **Controles en Tiempo Real:**
  - Ajuste de tamaño del logo (50% a 200%).
  - Opacidad del logo (10% a 100%).
  - Opacidad de la marca de agua central (0% a 30%).
  - Selección de tipografía (`Segoe UI`, `Arial`, `Times New Roman`, `Courier New`, `Georgia`, `Verdana`, `Inter`).
  - Tamaño de fuente (10px a 24px) y color de texto personalizable.
- ✏️ **Edición Bidireccional:** Puedes editar los datos desde el panel lateral o directamente haciendo clic sobre el área deseada de la vista previa (`contenteditable`).
- 📦 **Líneas Dinámicas:** Agrega o elimina ítems de trabajo con cálculo automático de Subtotal, IVA (16%) y Total.
- 📥 **Exportación a PDF:** Descarga inmediata en un solo clic utilizando la librería de alto rendimiento `html2pdf.js` desde CDN.
- 🖨️ **Impresión Directa:** Soporte para `@media print` que limpia la interfaz para impresión limpia en impresoras físicas.

---

## 🛠️ Prueba Local

### Opción 1: Apertura directa
1. Descarga o clona la carpeta del proyecto.
2. Abre directamente el archivo `index.html` en tu navegador preferido (Chrome, Firefox, Edge, Safari).

### Opción 2: Servidor HTTP Local (Recomendado)
Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
python3 -m http.server 8000
```

Luego abre tu navegador en `http://localhost:8000`.

---

## 🌐 Subir a GitHub y Activar GitHub Pages

Sigue estos pasos para subir tu proyecto a GitHub y publicarlo en la web:

### 1. Inicializar Git y subir al repositorio

```bash
git init
git add .
git commit -m "Initial commit: PDF generator"
git branch -M main
git remote add origin https://github.com/tuusuario/todo-cristal-pdf.git
git push -u origin main
```

*(Reemplaza `tuusuario` con tu nombre de usuario exacto de GitHub)*.

### 2. Configurar GitHub Pages

1. Ingresa a tu repositorio en GitHub: `https://github.com/tuusuario/todo-cristal-pdf`
2. Ve a **Settings** (Configuración) > **Pages** (Páginas) en el menú lateral izquierdo.
3. En la sección **Build and deployment** > **Source**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Haz clic en **Save** (Guardar).
5. Espera entre 1 y 2 minutos mientras GitHub compila tu sitio.

 Tu aplicación estará disponible públicamente en:  
`https://tuusuario.github.io/todo-cristal-pdf/`

---

## 📋 Checklist de Verificación

- [x] `index.html` en la raíz del repositorio.
- [x] Archivos CSS y JS en sus carpetas correspondientes (`css/` y `js/`).
- [x] Assets organizados (`assets/logo.svg`).
- [x] Todas las rutas son relativas (sin `file://` ni rutas absolutas).
- [x] Dependencia `html2pdf.js` cargada desde CDN de Cloudflare.
- [x] Marca de agua, logo y pie de página totalmente configurables.
- [x] Compatible con navegadores modernos y responsive.
