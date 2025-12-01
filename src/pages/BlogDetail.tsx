import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getArticuloBySlug } from "@/services/articulosService";
const BlogDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
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
    return <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-8">
            Lo sentimos, el artículo que buscas no existe.
          </p>
          <Button asChild>
            <Link to="/blog">Volver al blog</Link>
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen pt-24 pb-20 px-4">
      <article className="container mx-auto max-w-3xl">
        <Button variant="ghost" onClick={() => navigate("/blog")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Button>

        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            {articulo.categoria}
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
            {articulo.titulo}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {new Date(articulo.fechaPublicacion).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
              </span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{articulo.autor}</span>
            </div>
          </div>
        </div>

        <img src={articulo.imagen} alt={articulo.titulo} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8" />

        

        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild>
            <Link to="/blog">Volver al blog</Link>
          </Button>
        </div>
      </article>
    </div>;
};
export default BlogDetail;