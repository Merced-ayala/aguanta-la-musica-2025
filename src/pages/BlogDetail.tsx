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
      <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="container text-center">
          <h1 className="mb-4">Artículo no encontrado</h1>
          <p className="text-muted mb-4">
            Lo sentimos, el artículo que buscas no existe.
          </p>
          <Link to="/blog" className="btn btn-principal">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <article className="container" style={{ maxWidth: '800px' }}>
        <button
          className="btn btn-link text-decoration-none mb-4 p-0"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft size={16} className="me-2" />
          Volver al blog
        </button>

        <div className="mb-4">
          <span className="badge bg-primary-custom mb-3">
            {articulo.categoria}
          </span>
          <h1 className="mb-4">
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
          className="w-100 rounded mb-4"
          style={{ height: '400px', objectFit: 'cover' }}
        />

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: articulo.contenidoHtml }}
          style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
        />

        <div className="border-top mt-5 pt-4">
          <Link to="/blog" className="btn btn-principal">
            Volver al blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
