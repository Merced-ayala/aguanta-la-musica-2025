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
    <div className="min-vh-100 py-5" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="font-heading fw-bold display-4 mb-3">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '32rem' }}>
            Experiencias musicales diseñadas para acompañarte en tu proceso de bienestar y crecimiento personal
          </p>
        </div>

        <div className="row g-4" style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {servicios.map((servicio) => (
            <div key={servicio.id} className="col-md-6">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title font-heading h4">{servicio.titulo}</h2>
                  <p className="text-muted mb-4">{servicio.publicoObjetivo}</p>
                  
                  <p className="text-muted mb-4 flex-grow-1">{servicio.descripcion}</p>
                  
                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-center text-muted small">
                      <Clock size={16} className="me-2 text-primary" />
                      <span>Duración: {servicio.duracion}</span>
                    </div>
                    <div className="d-flex align-items-center text-muted small">
                      <MapPin size={16} className="me-2 text-primary" />
                      <span>Modalidad: {servicio.modalidad}</span>
                    </div>
                  </div>
                  
                  <Link to="/contacto" className="btn btn-primary w-100">
                    Solicitar información
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center p-5 rounded mx-auto" 
             style={{ background: 'linear-gradient(to bottom right, rgba(232, 37, 55, 0.1), rgba(251, 172, 24, 0.1))', maxWidth: '48rem' }}>
          <h2 className="font-heading fw-bold h3 mb-3">
            ¿Tienes dudas sobre cuál servicio es para ti?
          </h2>
          <p className="text-muted mb-4">
            Agenda una sesión de orientación gratuita y conversemos sobre cómo la musicoterapia puede ayudarte.
          </p>
          <Link to="/contacto" className="btn btn-primary btn-lg px-4">
            Agendar consulta gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
