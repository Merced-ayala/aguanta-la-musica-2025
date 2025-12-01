# Aguanta la Música

Sitio web oficial de Aguanta la Música - Servicios de musicoterapia para empresas en Bogotá, Colombia.

## Stack Tecnológico

Este proyecto está construido con tecnologías modernas de desarrollo web:

- **React 18.3** - Librería para construir interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI con Radix UI
- **React Router DOM** - Enrutamiento client-side
- **React Query** - Gestión de estado del servidor
- **React Hook Form + Zod** - Formularios con validación

## Requisitos

- Node.js 18+ y npm

## Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la build de producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de código

## Estructura del Proyecto

```
src/
├── components/      # Componentes React reutilizables
│   ├── layout/     # Navbar, Footer, Layout
│   └── ui/         # Componentes UI de shadcn
├── pages/          # Páginas de la aplicación
├── services/       # Servicios de datos
├── data/           # Archivos JSON con contenido
├── hooks/          # Custom React hooks
└── lib/            # Utilidades y helpers
```

## Deployment

Para crear una build de producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/` y pueden ser desplegados en cualquier servicio de hosting estático (Netlify, Vercel, Hostinger, etc.)

## Licencia

© 2024 Aguanta la Música. Todos los derechos reservados.
