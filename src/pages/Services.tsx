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
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section y Tarjetas de Servicios */}
      <section className="w-full bg-[#C4AF00] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Título y subtítulo */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              <span className="text-black">Nuestros </span>
              <span className="text-white">Servicios</span>
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          {/* Tarjetas de servicios */}
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Talleres */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/servicios/sesiones.jpeg" 
                alt="Talleres - Aguanta la Música"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-2 text-black">Talleres</h3>
                <p className="text-sm text-gray-600 mb-4">Empresas y organizaciones</p>
                <p className="text-gray-700 mb-6">
                  Experiencias diseñadas a la medida de tus necesidades en áreas como yoga, relajación, liderazgo, gestión emocional, creatividad, manejo del estrés, trabajo en equipo.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Duración:</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Modalidad:</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#c93040] transition">
                  Solicitar información
                </button>
              </div>
            </div>

            {/* Sesiones individuales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/servicios/sesiones-originales.jpeg" 
                alt="Sesiones Individuales - Aguanta la Música"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-2 text-black">Sesiones individuales</h3>
                <p className="text-sm text-gray-600 mb-4">Personas que buscan crecimiento personal</p>
                <p className="text-gray-700 mb-6">
                  Musicoterapia, canto y técnica vocal, percusión, y metales. Nuestros expertos te guiarán en tu proceso de crecimiento con la música.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Duración:</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Modalidad:</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#c93040] transition">
                  Solicitar información
                </button>
              </div>
            </div>

            {/* Procesos grupales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg lg:col-span-2 lg:max-w-xl lg:mx-auto lg:w-full">
              <img 
                src="/images/servicios/sesiones.jpeg" 
                alt="Procesos Grupales - Aguanta la Música"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-2 text-black">Procesos grupales de musicoterapia</h3>
                <p className="text-sm text-gray-600 mb-4">Grupos y comunidades</p>
                <p className="text-gray-700 mb-6">
                  Proceso continuo para grupos en los que la terapia busca incidir en cómo los participantes se relacionan con su entorno, sus valores comunes y posibilidades. Ideal para empresas y otras comunidades.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Duración:</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#EA2336]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Modalidad:</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#c93040] transition">
                  Solicitar información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conoce más + Talleres - Detalle */}
      <section className="w-full bg-[#C4AF00] py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-10">
          Conoce más
        </h1>
      </section>

      <section className="w-full bg-[#FFAC03] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Talleres
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                En estas experiencias, nuestros terapeutas adaptan las actividades a los objetivos que estés buscando alcanzar.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                La duración recomendada es de 2 horas y el aforo máximo por grupo es de 30 personas.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                Temas: relajación, manejo del estrés, trabajo en equipo, gestión emocional, liderazgo, creatividad, entre otros.
              </p>
                <button className="w-full text-center font-semibold rounded-full bg-[#EA2336] text-white py-3 px-6 transition-all duration-300 hover:bg-[#FFAC03] hover:text-black">
                  ¡Cuéntanos sobre tu equipo!
                </button>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/JwoAlxcIY9k"
                title="Talleres de Musicoterapia"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sesiones - Detalle */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="w-full mt-8 lg:mt-0 order-2 lg:order-1">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/R6zgvR4pY-A"
                title="Sesiones de Musicoterapia"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Sesiones
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Espacio de encuentro 1 a 1 enfocado en ayudarte a desarrollar tus habilidades y fomentar tu crecimiento de forma personalizada.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Musicoterapia para tu bienestar a cargo de terapeutas altamente capacitados, o aprendizaje musical en áreas como canto, percusión y trombón.
              </p>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center font-semibold rounded-full bg-[#EA2336] text-white py-3 px-6 transition-all duration-300 hover:bg-[#FFAC03] hover:text-black inline-flex items-center justify-center"
              >
                ¡Agenda tu primera sesión con el 50% de descuento!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Procesos - Detalle */}
      <section className="w-full bg-[#EA2336] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Procesos
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Aquí es donde la Musicoterapia transforma tu entorno. En estos procesos los grupos tienen un espacio para fortalecerse, empoderarse y transformar su realidad de la mano de profesionales con amplia experiencia.
              </p>
              <p className="text-lg text-gray-800 mb-2">
                <strong>Duración mínima:</strong> un mes / 4 sesiones
              </p>
              <p className="text-lg text-gray-800 mb-6">
                <strong>Cantidad máxima de integrantes:</strong> 30 personas
              </p>
              <button className="w-full text-center font-semibold rounded-full bg-[#EA2336] text-white py-3 px-6 transition-all duration-300 hover:bg-[#FFAC03] hover:text-black">
                ¡Conversemos!
              </button>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/UG57hC_T5ZA"
                title="Procesos Grupales de Musicoterapia"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action con botones */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#EA2336]/10 to-[#FFAC03]/10 p-8 md:p-12 rounded-lg max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              ¿Listo para comenzar tu proceso?
            </h2>
            <p className="text-gray-700 mb-6">
              Contáctanos y conversemos sobre cómo la musicoterapia puede ayudarte a ti o a tu equipo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#FFAC03] hover:text-black transition inline-flex items-center gap-2"
              >
                Escríbenos por WhatsApp
              </a>

              <a
                href="mailto:contacto@aguantalamusica.com"
                className="px-6 py-3 rounded-full border-2 border-[#EA2336] text-[#EA2336] font-semibold hover:bg-[#FCEEDD] transition inline-flex items-center gap-2"
              >
                Escríbenos por correo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
