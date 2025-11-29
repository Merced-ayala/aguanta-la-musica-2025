import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    document.title = "Servicios - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce nuestros servicios de musicoterapia: talleres, sesiones individuales y procesos grupales."
      );
    }
  }, []);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="mb-4">Nuestros Servicios</h1>
          <p className="lead text-muted">
            Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
          </p>
        </div>

        {/* Talleres */}
        <div className="service-card">
          <div className="row g-0">
            <div className="col-md-6">
              <img src="/images/servicios/sesiones.jpeg" alt="Talleres-Aguanta la Música" />
            </div>
            <div className="col-md-6">
              <div className="service-content">
                <h3>Talleres</h3>
                <p>Experiencias diseñadas a la medida de tus necesidades en áreas como yoga, relajación, liderazgo, gestión emocional, creatividad, manejo del estrés, trabajo en equipo.</p>
                
                <p className="mb-2"><strong>Duración recomendada:</strong> 2 horas</p>
                <p className="mb-2"><strong>Aforo máximo:</strong> 30 personas</p>
                <p className="mb-4"><strong>Temas:</strong> relajación, manejo del estrés, trabajo en equipo, gestión emocional, liderazgo, creatividad, entre otros.</p>
                
                <div className="ratio ratio-16x9 mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/JwoAlxcIY9k"
                    title="Talleres de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <Link to="/contacto" className="btn btn-principal">
                  ¡Cuéntanos sobre tu equipo!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sesiones Individuales */}
        <div className="service-card">
          <div className="row g-0">
            <div className="col-md-6 order-md-2">
              <img src="/images/servicios/sesiones.jpeg" alt="Sesiones Individuales-Aguanta la Música" />
            </div>
            <div className="col-md-6 order-md-1">
              <div className="service-content">
                <h3>Sesiones individuales</h3>
                <p>Musicoterapia, canto y técnica vocal, percusión, y metales. Nuestros expertos te guiarán en tu proceso de crecimiento con la música.</p>
                
                <p className="mb-4">Espacio de encuentro 1 a 1 enfocado en ayudarte a desarrollar tus habilidades y fomentar tu crecimiento de forma personalizada.</p>
                
                <p className="mb-4">Musicoterapia para tu bienestar a cargo de terapeutas altamente capacitados, o aprendizaje musical en áreas como canto, percusión y trombón.</p>
                
                <div className="ratio ratio-16x9 mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/R6zgvR4pY-A"
                    title="Sesiones de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <Link to="/contacto" className="btn btn-principal">
                  ¡Agenda tu primera sesión con el 50% de descuento!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Procesos Grupales */}
        <div className="service-card">
          <div className="row g-0">
            <div className="col-md-6">
              <img src="/images/servicios/sesiones.jpeg" alt="Procesos Grupales-Aguanta la Música" />
            </div>
            <div className="col-md-6">
              <div className="service-content">
                <h3>Procesos grupales de musicoterapia</h3>
                <p>Proceso continuo para grupos en los que la terapia busca incidir en cómo los participantes se relacionan con su entorno, sus valores comunes y posibilidades. Ideal para empresas y otra comunidades.</p>
                
                <p className="mb-4">Aquí es donde la Musicoterapia transforma tu entorno. En estos procesos los grupos tienen un espacio para fortalecerse, empoderarse y transformar su realidad de la mano de profesionales con amplia experiencia.</p>
                
                <p className="mb-2"><strong>Duración mínima:</strong> un mes / 4 sesiones</p>
                <p className="mb-4"><strong>Cantidad máxima de integrantes:</strong> 30 personas</p>
                
                <div className="ratio ratio-16x9 mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/UG57hC_T5ZA"
                    title="Procesos Grupales de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <Link to="/contacto" className="btn btn-principal">
                  ¡Conversemos!
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section mt-5">
          <h2>¿Tienes dudas sobre cuál servicio es para ti?</h2>
          <p className="mb-4">
            Agenda una sesión de orientación gratuita y conversemos sobre cómo la musicoterapia puede ayudarte.
          </p>
          <Link to="/contacto" className="btn btn-principal btn-lg">
            Agendar consulta gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
