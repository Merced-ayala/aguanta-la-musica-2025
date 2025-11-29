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
    <div className="min-vh-100 py-5" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="font-heading fw-bold display-4 mb-3">
            Blog
          </h1>
          <p className="fs-5 text-muted">
            Artículos sobre musicoterapia, bienestar y salud mental
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`btn ${categoriaSeleccionada === categoria ? 'btn-primary' : 'btn-outline-dark'}`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de artículos */}
        <div className="row g-4">
          {articulosFiltrados.map((articulo) => (
            <div key={articulo.id} className="col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="card-img-top"
                  style={{ height: '12rem', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="text-primary fw-semibold small mb-2">
                    {articulo.categoria}
                  </div>
                  <h3 className="card-title h5">{articulo.titulo}</h3>
                  <p className="card-text text-muted small line-clamp-4 flex-grow-1">
                    {articulo.extracto}
                  </p>
                  <div className="text-muted small mt-3">
                    {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Link to={`/blog/${articulo.slug}`} className="btn btn-link text-decoration-none w-100 mt-2">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {articulosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <p className="fs-5 text-muted">
              No hay artículos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
