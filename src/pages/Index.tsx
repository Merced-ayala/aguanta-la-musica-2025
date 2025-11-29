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
      <section className="py-5" style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(to bottom right, #ffffff 0%, #fceede33 50%, #ffffff 100%)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-center">
              <img 
                src="/images/logo-blanco.png" 
                alt="Aguanta la Música Logo" 
                className="img-fluid"
                style={{ maxWidth: '28rem' }}
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h1 className="font-heading fw-bold display-4 mb-4 lh-sm">
                Aquí descubrirás<br />
                qué es la<br />
                <span className="text-primary">Musicoterapia</span>
              </h1>
              <p className="fs-5 mb-4">
                Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video and Mission Section */}
      <section className="py-5 bg-muted">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 className="font-heading fw-bold display-5 mb-4 lh-sm">
                Usar la música<br />
                como terapia<br />
                <span className="text-primary">cambiará tu vida</span>
              </h2>
              <p className="fs-5">
                Creamos experiencias musicales significativas para personas, entidades y empresas.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <div className="ratio ratio-16x9 rounded shadow-lg overflow-hidden" style={{ maxWidth: '42rem', margin: '0 auto' }}>
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
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="font-heading fw-bold display-5 mb-3">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="fs-5 mx-auto" style={{ maxWidth: '48rem' }}>
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          <div className="row g-4" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {servicios.map((servicio) => (
              <div key={servicio.id} className="col-md-4">
                <div className="card h-100">
                  <div className="aspect-video w-100 overflow-hidden">
                    <img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title font-heading fw-bold h5">{servicio.titulo}</h3>
                    <p className="card-text small">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/servicios" className="btn btn-primary btn-lg fw-semibold px-4">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-5 bg-muted">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="font-heading fw-bold display-5 mb-3">Blog</h2>
          </div>

          <div className="row g-4">
            {articulosRecientes.map((articulo) => (
              <div key={articulo.id} className="col-md-4">
                <div className="card h-100">
                  <img
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    className="card-img-top"
                    style={{ height: '12rem', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title font-heading fw-bold h5">{articulo.titulo}</h3>
                    <p className="card-text text-muted small line-clamp-3 flex-grow-1">
                      {articulo.extracto}
                    </p>
                    <Link to={`/blog/${articulo.slug}`} className="btn btn-link text-decoration-none w-100 mt-2">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/blog" className="btn btn-outline-dark btn-lg px-4">
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
