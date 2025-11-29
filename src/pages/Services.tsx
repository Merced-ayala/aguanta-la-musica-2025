import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
          </p>
        </div>

        {/* Talleres */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8">
            <img 
              src="/images/servicios/sesiones.jpeg" 
              alt="Talleres-Aguanta la Música"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="font-heading font-bold text-3xl mb-4">Talleres</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experiencias diseñadas a la medida de tus necesidades en áreas como yoga, relajación, liderazgo, gestión emocional, creatividad, manejo del estrés, trabajo en equipo.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-4">En estas experiencias, nuestros terapeutas adaptan las actividades a los objetivos que estés buscando alcanzar.</h3>
              <p className="mb-2">La duración recomendada es de 2 horas y el aforo máximo por grupo es de 30 personas.</p>
              <p className="mb-4">Temas: relajación, manejo del estrés, trabajo en equipo, gestión emocional, liderazgo, creatividad, entre otros.</p>
            </div>
          </div>
        </section>

        {/* Sesiones Individuales */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8">
            <img 
              src="/images/servicios/sesiones.jpeg" 
              alt="Sesiones Individuales-Aguanta la Música"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="font-heading font-bold text-3xl mb-4">Sesiones individuales</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Musicoterapia, canto y técnica vocal, percusión, y metales. Nuestros expertos te guiarán en tu proceso de crecimiento con la música.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-4">Sesiones</h3>
              <p className="mb-2">Espacio de encuentro 1 a 1 enfocado en ayudarte a desarrollar tus habilidades y fomentar tu crecimiento de forma personalizada.</p>
              <p className="mb-4">Musicoterapia para tu bienestar a cargo de terapeutas altamente capacitados, o aprendizaje musical en áreas como canto, percusión y trombón.</p>
              <p className="font-semibold">¡Agenda tu primera sesión con el 50% de descuento!</p>
            </div>
          </div>
        </section>

        {/* Procesos Grupales */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8">
            <img 
              src="/images/servicios/sesiones.jpeg" 
              alt="Procesos Grupales-Aguanta la Música"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="font-heading font-bold text-3xl mb-4">Procesos grupales de musicoterapia</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Proceso continuo para grupos en los que la terapia busca incidir en cómo los participantes se relacionan con su entorno, sus valores comunes y posibilidades. Ideal para empresas y otra comunidades.
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-4">Procesos</h3>
              <p className="mb-4">Aquí es donde la Musicoterapia transforma tu entorno. En estos procesos los grupos tienen un espacio para fortalecerse, empoderarse y transformar su realidad de la mano de profesionales con amplia experiencia.</p>
              <p className="mb-2"><strong>Duración mínima:</strong> un mes / 4 sesiones</p>
              <p className="mb-4"><strong>Cantidad máxima de integrantes:</strong> 30 personas</p>
            </div>
          </div>
        </section>

        {/* Conoce más - Sección de Videos */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Conoce <span className="text-primary">más</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Video Talleres */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/JwoAlxcIY9k"
                    title="Talleres de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-semibold text-lg text-center">Talleres</h3>
              </div>

              {/* Video Sesiones */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/R6zgvR4pY-A"
                    title="Sesiones de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-semibold text-lg text-center">Sesiones individuales</h3>
              </div>

              {/* Video Procesos Grupales */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full aspect-video mb-4">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/UG57hC_T5ZA"
                    title="Procesos Grupales de Musicoterapia"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-semibold text-lg text-center">Procesos grupales</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action con botones */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            ¿Listo para comenzar tu proceso?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contáctanos y conversemos sobre cómo la musicoterapia puede ayudarte a ti o a tu equipo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/NUMERO_WHATSAPP"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition inline-flex items-center gap-2"
            >
              Escríbenos por WhatsApp
            </a>

            <a
              href="mailto:CORREO_AGUANTA"
              className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition inline-flex items-center gap-2"
            >
              Escríbenos por correo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
