import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getArticuloBySlug } from "@/services/articulosService";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const articulo = slug ? getArticuloBySlug(slug) : undefined;

  useEffect(() => {
    if (articulo) {
      document.title = articulo.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", articulo.metaDescription);
      }
    } else {
      document.title = "Artículo no encontrado - Aguanta la Música";
    }
  }, [articulo]);

  if (!articulo) {
    return (
      <div className="min-vh-100 py-5" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div className="container text-center" style={{ maxWidth: '48rem' }}>
          <h1 className="font-heading fw-bold h3 mb-4">Artículo no encontrado</h1>
          <p className="text-muted mb-4">
            Lo sentimos, el artículo que buscas no existe.
          </p>
          <Link to="/blog" className="btn btn-primary">Volver al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 py-5" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <article className="container" style={{ maxWidth: '48rem' }}>
        <button
          className="btn btn-link text-decoration-none mb-4"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft size={16} className="me-2" />
          Volver al blog
        </button>

        <div className="mb-4">
          <span className="badge rounded-pill text-primary mb-3" 
                style={{ backgroundColor: 'rgba(232, 37, 55, 0.1)', fontSize: '0.75rem' }}>
            {articulo.categoria}
          </span>
          <h1 className="font-heading fw-bold display-5 mb-4">
            {articulo.titulo}
          </h1>
          
          <div className="d-flex flex-wrap gap-4 text-muted small mb-4">
            <div className="d-flex align-items-center">
              <Calendar size={16} className="me-2" />
              <span>
                {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <User size={16} className="me-2" />
              <span>{articulo.autor}</span>
            </div>
          </div>
        </div>

        <img
          src={articulo.imagen}
          alt={articulo.titulo}
          className="w-100 rounded mb-5"
          style={{ height: '20rem', objectFit: 'cover' }}
        />

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: articulo.contenidoHtml }}
        />

        <div className="mt-5 pt-4 border-top">
          <Link to="/blog" className="btn btn-primary">Volver al blog</Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
