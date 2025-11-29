import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="mb-3">Blog</h1>
          <p className="lead text-muted">
            Artículos sobre musicoterapia, bienestar y salud mental
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`btn ${
                categoriaSeleccionada === categoria
                  ? "btn-principal"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de artículos */}
        <div className="row g-4">
          {articulosFiltrados.map((articulo) => (
            <div key={articulo.id} className="col-md-4">
              <div className="blog-card">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                />
                <div className="card-body">
                  <div className="badge bg-primary-custom mb-2">
                    {articulo.categoria}
                  </div>
                  <h3>{articulo.titulo}</h3>
                  <p className="card-text text-muted">
                    {articulo.extracto}
                  </p>
                  <div className="text-muted small mb-3">
                    {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Link to={`/blog/${articulo.slug}`} className="btn btn-principal w-100">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {articulosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <p className="lead text-muted">
              No hay artículos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
