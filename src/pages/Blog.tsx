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
    <div className="min-vh-100" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5 pt-4">
          <h1 className="font-heading fw-bold display-3 mb-4">
            Blog
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '40rem', lineHeight: '1.6' }}>
            Artículos sobre musicoterapia, bienestar y desarrollo personal
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`btn ${categoriaSeleccionada === categoria ? 'btn-aguanta-primary' : 'btn-aguanta-outline'}`}
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
                  style={{ height: '14rem', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-3">
                    <span className="badge text-white" style={{ backgroundColor: 'var(--color-primary)', fontSize: '0.75rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem' }}>
                      {articulo.categoria}
                    </span>
                  </div>
                  <h2 className="card-title font-heading fw-bold h5 mb-3">{articulo.titulo}</h2>
                  <p className="card-text text-muted line-clamp-3 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {articulo.extracto}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                    <small className="text-muted">
                      {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </small>
                    <Link to={`/blog/${articulo.slug}`} className="btn btn-link text-decoration-none p-0 fw-semibold text-aguanta-red">
                      Leer más →
                    </Link>
                  </div>
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
