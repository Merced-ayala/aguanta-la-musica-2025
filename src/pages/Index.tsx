import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticulosRecientes } from "@/services/articulosService";
import { getServicios } from "@/services/serviciosService";

const Index = () => {
  useEffect(() => {
    document.title = "Aguanta la Música - Musicoterapia en Bogotá";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial."
      );
    }
  }, []);

  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="section-hero" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-center">
              <img 
                src="/images/logo-blanco.png" 
                alt="Aguanta la Música Logo" 
                className="img-fluid"
                style={{ maxWidth: '26rem' }}
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h1 className="font-heading fw-bold display-3 mb-4 lh-sm">
                Aquí descubrirás<br />
                qué es la<br />
                <span className="text-aguanta-red">Musicoterapia</span>
              </h1>
              <p className="fs-5 mb-0" style={{ lineHeight: '1.6' }}>
                Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video and Mission Section */}
      <section className="section-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 className="font-heading fw-bold display-4 mb-4 lh-sm">
                Usar la música<br />
                como terapia<br />
                <span className="text-aguanta-red">cambiará tu vida</span>
              </h2>
              <p className="fs-5 mb-0" style={{ lineHeight: '1.6' }}>
                Creamos experiencias musicales significativas para personas, entidades y empresas.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="ratio ratio-16x9 rounded-4 shadow overflow-hidden" style={{ maxWidth: '42rem', margin: '0 auto' }}>
                <iframe
                  src="https://www.youtube.com/embed/2Yc3eJru998"
                  title="Musicoterapia - Aguanta la Música"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-default">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="font-heading fw-bold display-4 mb-4">
              Nuestros <span className="text-aguanta-red">Servicios</span>
            </h2>
            <p className="fs-5 mx-auto" style={{ maxWidth: '48rem', lineHeight: '1.6' }}>
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          <div className="row g-4" style={{ maxWidth: '75rem', margin: '0 auto' }}>
            {servicios.map((servicio) => (
              <div key={servicio.id} className="col-md-4">
                <div className="card h-100">
                  <div className="aspect-video w-100 overflow-hidden">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: 'transform 0.3s ease' }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h3 className="card-title font-heading fw-bold h5 mb-3">{servicio.titulo}</h3>
                    <p className="card-text mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/servicios" className="btn btn-aguanta-primary btn-lg px-5">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="font-heading fw-bold display-4 mb-3">Blog</h2>
          </div>

          <div className="row g-4">
            {articulosRecientes.map((articulo) => (
              <div key={articulo.id} className="col-md-4">
                <div className="card h-100">
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="card-img-top"
                    style={{ height: '14rem', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h3 className="card-title font-heading fw-bold h5 mb-3">{articulo.titulo}</h3>
                    <p className="card-text text-muted line-clamp-3 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {articulo.extracto}
                    </p>
                    <Link to={`/blog/${articulo.slug}`} className="btn btn-link text-decoration-none p-0 mt-3 fw-semibold text-aguanta-red">
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/blog" className="btn btn-aguanta-outline btn-lg px-5">
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
