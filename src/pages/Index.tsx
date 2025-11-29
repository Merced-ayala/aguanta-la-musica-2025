import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticulosRecientes } from "@/services/articulosService";
import { getServicios } from "@/services/serviciosService";

const Index = () => {
  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();

  useEffect(() => {
    document.title = "Aguanta la Música - Musicoterapia y Bienestar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Descubre el poder transformador de la musicoterapia. Creamos experiencias musicales significativas para personas, entidades y empresas."
      );
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container text-center">
          <img 
            src="/images/logo-aguanta.png" 
            alt="Aguanta la Música" 
            className="mb-4"
            style={{ maxWidth: '200px', height: 'auto' }}
          />
          <h1>
            Aquí descubrirás <br />
            qué es la <br />
            <span className="text-primary-custom">Musicoterapia</span>
          </h1>
          <p className="mt-4">
            Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-container">
        <div className="container">
          <h2 className="text-center mb-4">
            Usar la música <br />
            como terapia <br />
            cambiará tu vida
          </h2>
          <p className="text-center mb-5">
            Creamos experiencias musicales significativas para personas, entidades y empresas.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ratio ratio-16x9 mb-4">
                <iframe 
                  src="https://www.youtube.com/embed/2Yc3eJru998"
                  title="Terapia por David Caycedo Galvis"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacer">
        <div className="container">
          <h2 className="text-center mb-5">
            Nuestros <span className="text-primary-custom">Servicios</span>
          </h2>
          <div className="row g-4">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="col-md-4">
                <div className="custom-card">
                  <img src={servicio.imagen} alt={servicio.titulo} />
                  <div className="card-body">
                    <h3 className="card-title">{servicio.titulo}</h3>
                    <p className="card-text text-muted">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/servicios" className="btn btn-principal btn-lg">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-spacer bg-beige">
        <div className="container">
          <h2 className="text-center mb-5">
            Artículos <span className="text-primary-custom">Recientes</span>
          </h2>
          <div className="row g-4">
            {articulosRecientes.map((articulo) => (
              <div key={articulo.id} className="col-md-4">
                <div className="blog-card">
                  <img src={articulo.imagen} alt={articulo.titulo} />
                  <div className="card-body">
                    <h3>{articulo.titulo}</h3>
                    <p className="card-text">{articulo.extracto}</p>
                    <Link to={`/blog/${articulo.slug}`} className="btn btn-principal">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/blog" className="btn btn-secondary-custom btn-lg">
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
