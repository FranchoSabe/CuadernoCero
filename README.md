# Cuaderno Cero

Sistemas a medida para pequeños y medianos negocios. Dejá atrás el cuaderno y las planillas eternas.

**Por Francisco "Francho" Jorens**

## 🚀 Stack Tecnológico

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos encapsulados
- **Framer Motion** - Animaciones fluidas y profesionales

## 🎨 Sistema de Diseño Profesional

### Paleta de Colores B2B

El diseño utiliza una paleta profesional y cálida:

- **Fondos**
  - `--color-page`: `#f5f5f4` - Off-white cálido
  - `--color-surface`: `#ffffff` - Blanco puro para cards

- **Textos**
  - `--color-text-main`: `#020617` - Negro profundo legible
  - `--color-text-muted`: `#475569` - Gris medio

- **Color Primario** (Verde sobrio)
  - `--color-primary`: `#166534` - Verde oscuro profesional
  - `--color-primary-light`: `#22c55e` - Verde medio
  - `--color-primary-soft`: `#dcfce7` - Verde muy suave

- **Color Secundario** (Naranja cálido)
  - `--color-secondary`: `#ea580c` - Naranja tostado
  - `--color-secondary-soft`: `#ffedd5` - Durazno suave

### Tipografía

- **Familia**: Inter (Google Fonts)
- **Jerarquía**:
  - Títulos hero: 3rem / 2.5rem (desktop/mobile), font-weight 700
  - Títulos de sección: 2.5rem / 2rem, font-weight 700
  - Subtítulos: 1.5rem, font-weight 600
  - Body: 1.0625rem, line-height 1.7
  - Pequeño: 0.9rem - 0.95rem

### Sombras Suaves

- `--shadow-soft` - Sombra suave para elementos en reposo
- `--shadow-soft-md` - Sombra media para cards importantes
- `--shadow-soft-lg` - Sombra grande para estados hover

## 📋 Características

- ✅ Diseño profesional B2B con estética cálida
- ✅ Single-page application con scroll suave
- ✅ Diseño responsive mobile-first
- ✅ Animaciones sutiles con Framer Motion
- ✅ Sistema de diseño coherente con CSS Modules
- ✅ Navegación sticky con menú hamburguesa
- ✅ Formulario integrado con WhatsApp
- ✅ Optimizado para SEO y accesibilidad

## 📁 Estructura del Proyecto

```
portafolio-francho-jorens/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── Services/
│   │   ├── Projects/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.tsx
│   ├── App.module.css
│   ├── main.tsx
│   └── index.css (Sistema de variables CSS)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Instalación

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Instalar las dependencias:**

```bash
npm install
```

O si usás yarn:

```bash
yarn
```

## 🚀 Cómo Ejecutar el Proyecto

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

O con yarn:

```bash
yarn dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`.

La aplicación se recargará automáticamente cuando hagas cambios en el código.

### Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

O con yarn:

```bash
yarn build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Preview del Build de Producción

Para previsualizar el build de producción localmente:

```bash
npm run preview
```

## 🎨 Personalización

### Colores

Los colores están definidos en `src/index.css` como variables CSS en `:root`. 

Para cambiar la paleta, edita las variables allí y se actualizarán en toda la aplicación.

### Tipografía

La fuente está configurada en:
- `index.html` (importación de Google Fonts)
- `src/index.css` (variable `--font-family`)

### Contenido

El contenido de cada sección está en los componentes respectivos:

- **Navbar**: `src/components/Navbar/Navbar.tsx`
- **Hero**: `src/components/Hero/Hero.tsx`
- **Servicios**: `src/components/Services/Services.tsx`
- **Proyectos**: `src/components/Projects/Projects.tsx`
- **Sobre mí**: `src/components/About/About.tsx`
- **Habilidades**: `src/components/Skills/Skills.tsx`
- **Contacto**: `src/components/Contact/Contact.tsx`
- **Footer**: `src/components/Footer/Footer.tsx`

## 📱 Responsive Design

El diseño es completamente responsive:

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## 🌟 Funcionalidades Destacadas

### Navegación Suave
El navbar incluye navegación por anclas con scroll suave a cada sección.

### Animaciones
Las animaciones están implementadas con Framer Motion:
- Fade-in al aparecer secciones en viewport (useInView)
- Animaciones en hover sobre cards
- Transiciones suaves entre estados
- Elementos visuales con animaciones sutiles

### Formulario de Contacto
El formulario abre WhatsApp con un mensaje prellenado basado en los datos ingresados.

### CSS Modules
Cada componente tiene sus estilos encapsulados, evitando conflictos de nombres.

## 🚀 Deployment

Podés deployar este proyecto gratis en:

- **Vercel** (Recomendado): `cuadernocero.vercel.app`
- **Netlify**: `cuadernocero.netlify.app`
- **GitHub Pages**: `usuario.github.io/cuaderno-cero`

Ver guía completa en [DEPLOYMENT.md](./DEPLOYMENT.md)

### Deploy rápido con Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 Licencia

© 2025 Cuaderno Cero - Francisco "Francho" Jorens. Todos los derechos reservados.

## 📞 Contacto

- **Email**: jorensjfrancisco@gmail.com
- **WhatsApp**: +54 9 221 592-2264
- **Ubicación**: La Plata, Argentina

---

**Cuaderno Cero** - Desarrollado con ❤️ usando React + TypeScript + Vite + CSS Modules
