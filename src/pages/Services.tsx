import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { getServicios } from "@/services/serviciosService";

const Services = () => {
  const servicios = getServicios();

  useEffect(() => {
    document.title = "Servicios - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce nuestros servicios de musicoterapia: sesiones individuales, programas para empresas, talleres educativos y grupos terapéuticos."
      );
    }
  }, []);

  return (
    <div className="min-vh-100" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5 pt-4">
          <h1 className="font-heading fw-bold display-3 mb-4">
            Nuestros <span className="text-aguanta-red">Servicios</span>
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '40rem', lineHeight: '1.6' }}>
            Experiencias musicales diseñadas para acompañarte en tu proceso de bienestar y crecimiento personal
          </p>
        </div>

        <div className="row g-4" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {servicios.map((servicio) => (
            <div key={servicio.id} className="col-md-6">
              <div className="card h-100">
                <div className="card-body d-flex flex-column p-4">
                  <h2 className="card-title font-heading fw-bold h3 mb-3">{servicio.titulo}</h2>
                  <p className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>{servicio.publicoObjetivo}</p>
                  
                  <p className="mb-4 flex-grow-1" style={{ fontSize: '1rem', lineHeight: '1.7' }}>{servicio.descripcion}</p>
                  
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center text-muted">
                      <Clock size={18} className="me-3 text-aguanta-red" />
                      <span><strong>Duración:</strong> {servicio.duracion}</span>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <MapPin size={18} className="me-3 text-aguanta-red" />
                      <span><strong>Modalidad:</strong> {servicio.modalidad}</span>
                    </div>
                  </div>
                  
                  <Link to="/contacto" className="btn btn-aguanta-primary w-100">
                    Solicitar información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 cta-section text-center">
          <h2 className="font-heading fw-bold h3 mb-3">
            ¿Tienes dudas sobre cuál servicio es para ti?
          </h2>
          <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            Agenda una sesión de orientación gratuita y conversemos sobre cómo la musicoterapia puede ayudarte.
          </p>
          <Link to="/contacto" className="btn btn-aguanta-primary btn-lg px-5">
            Agendar consulta gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
