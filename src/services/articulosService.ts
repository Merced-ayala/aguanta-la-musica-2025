import articulosData from "@/data/articulos.json";

export interface Articulo {
  id: number;
  slug: string;
  titulo: string;
  categoria: string;
  fechaPublicacion: string;
  autor: string;
  extracto: string;
  imagen: string;
  contenidoHtml: string;
  metaTitle: string;
  metaDescription: string;
}

export const getArticulos = (): Articulo[] => {
  return articulosData;
};

export const getArticuloBySlug = (slug: string): Articulo | undefined => {
  return articulosData.find((articulo) => articulo.slug === slug);
};

export const getArticulosByCategoria = (categoria: string): Articulo[] => {
  if (categoria === "Todos") {
    return articulosData;
  }
  return articulosData.filter((articulo) => articulo.categoria === categoria);
};

export const getCategorias = (): string[] => {
  const categorias = articulosData.map((articulo) => articulo.categoria);
  return ["Todos", ...Array.from(new Set(categorias))];
};

export const getArticulosRecientes = (limit: number = 3): Articulo[] => {
  return articulosData
    .sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime())
    .slice(0, limit);
};
