import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticulos, getCategorias } from "@/services/articulosService";

const Blog = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const categorias = getCategorias();
  const todosArticulos = getArticulos();

  const articulosFiltrados =
    categoriaSeleccionada === "Todos"
      ? todosArticulos
      : todosArticulos.filter((a) => a.categoria === categoriaSeleccionada);

  useEffect(() => {
    document.title = "Blog - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Lee nuestros artículos sobre musicoterapia, salud mental, bienestar emocional y terapia Gestalt."
      );
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Artículos sobre musicoterapia, bienestar y salud mental
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={categoriaSeleccionada === categoria ? "default" : "outline"}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </Button>
          ))}
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articulosFiltrados.map((articulo) => (
            <Card key={articulo.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <img
                src={articulo.imagen}
                alt={articulo.titulo}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <div className="text-xs font-semibold text-primary mb-2">
                  {articulo.categoria}
                </div>
                <CardTitle className="text-xl">{articulo.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-4">
                  {articulo.extracto}
                </p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={`/blog/${articulo.slug}`}>Leer más</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {articulosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No hay artículos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
