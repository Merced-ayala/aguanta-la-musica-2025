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
      {/* Hero Section */}
      <section className="w-full bg-[#CA4F00] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-black">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Cards */}
      <section className="w-full bg-[#CA4F00] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Talleres */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/images/servicios/sesiones.jpeg" 
                alt="Talleres - Aguanta la Música"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl mb-3">Talleres</h3>
                <p className="text-gray-700 mb-4">
                  Experiencias diseñadas a la medida de tus necesidades en áreas como yoga, relajación, liderazgo, gestión emocional, creatividad, manejo del estrés, trabajo en equipo.
                </p>
                <div className="mb-4 text-sm text-gray-700">
                  <p className="mb-2">En estas experiencias, nuestros terapeutas adaptan las actividades a los objetivos que estés buscando alcanzar.</p>
                  <p className="mb-2">La duración recomendada es de 2 horas y el aforo máximo por grupo es de 30 personas.</p>
                  <p className="mb-2">Temas: relajación, manejo del estrés, trabajo en equipo, gestión emocional, liderazgo, creatividad, entre otros.</p>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#FFAC03] hover:text-black transition">
                  Solicitar información
                </button>
              </div>
            </div>

            {/* Sesiones individuales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/images/servicios/sesiones-individuales.jpeg" 
                alt="Sesiones Individuales - Aguanta la Música"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl mb-3">Sesiones individuales</h3>
                <p className="text-gray-700 mb-4">
                  Musicoterapia, canto y técnica vocal, percusión, y metales. Nuestros expertos te guiarán en tu proceso de crecimiento con la música.
                </p>
                <div className="mb-4 text-sm text-gray-700">
                  <h4 className="font-semibold mb-2">Sesiones</h4>
                  <p className="mb-2">Espacio de encuentro 1 a 1 enfocado en ayudarte a desarrollar tus habilidades y fomentar tu crecimiento de forma personalizada.</p>
                  <p className="mb-2">Musicoterapia para tu bienestar a cargo de terapeutas altamente capacitados, o aprendizaje musical en áreas como canto, percusión y trombón.</p>
                  <p className="font-semibold">¡Agenda tu primera sesión con el 50% de descuento!</p>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#FFAC03] hover:text-black transition">
                  Solicitar información
                </button>
              </div>
            </div>

            {/* Procesos grupales */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/images/servicios/sesiones.jpeg" 
                alt="Procesos Grupales - Aguanta la Música"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl mb-3">Procesos grupales de musicoterapia</h3>
                <p className="text-gray-700 mb-4">
                  Proceso continuo para grupos en los que la terapia busca incidir en cómo los participantes se relacionan con su entorno, sus valores comunes y posibilidades. Ideal para empresas y otra comunidades.
                </p>
                <div className="mb-4 text-sm text-gray-700">
                  <h4 className="font-semibold mb-2">Procesos</h4>
                  <p className="mb-2">Aquí es donde la Musicoterapia transforma tu entorno. En estos procesos los grupos tienen un espacio para fortalecerse, empoderarse y transformar su realidad de la mano de profesionales con amplia experiencia.</p>
                  <p className="mb-2"><strong>Duración mínima:</strong> un mes / 4 sesiones</p>
                  <p className="mb-2"><strong>Cantidad máxima de integrantes:</strong> 30 personas</p>
                </div>
                <button className="w-full px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#FFAC03] hover:text-black transition">
                  Solicitar información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conoce más - Secciones Detalladas */}
      <section className="w-full bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Conoce más
          </h2>
        </div>
      </section>

      {/* Talleres - Detalle */}
      <section className="w-full bg-[#FFAC03] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="text-black">
            <h2 className="font-heading font-bold text-4xl mb-6">Talleres</h2>
            <p className="text-lg mb-4">
              En estas experiencias, nuestros terapeutas adaptan las actividades a los objetivos que estés buscando alcanzar.
            </p>
            <p className="text-lg mb-4">
              La duración recomendada es de 2 horas y el aforo máximo por grupo es de 30 personas.
            </p>
            <p className="text-lg mb-6">
              Temas: relajación, manejo del estrés, trabajo en equipo, gestión emocional, liderazgo, creatividad, entre otros.
            </p>
            <button className="mt-4 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              ¡Cuéntanos sobre tu equipo!
            </button>
          </div>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/JwoAlxcIY9k"
              title="Talleres de Musicoterapia"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sesiones - Detalle */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="w-full aspect-video order-2 md:order-1">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/R6zgvR4pY-A"
              title="Sesiones de Musicoterapia"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-gray-700 order-1 md:order-2">
            <h2 className="font-heading font-bold text-4xl mb-6 text-black">Sesiones</h2>
            <p className="text-lg mb-4">
              Espacio de encuentro 1 a 1 enfocado en ayudarte a desarrollar tus habilidades y fomentar tu crecimiento de forma personalizada.
            </p>
            <p className="text-lg mb-4">
              Musicoterapia para tu bienestar a cargo de terapeutas altamente capacitados, o aprendizaje musical en áreas como canto, percusión y trombón.
            </p>
            <p className="text-lg font-semibold text-[#EA2336] mb-6">
              ¡Agenda tu primera sesión con el 50% de descuento!
            </p>
          </div>
        </div>
      </section>

      {/* Procesos - Detalle */}
      <section className="w-full bg-[#EA2336] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="text-white">
            <h2 className="font-heading font-bold text-4xl mb-6">Procesos</h2>
            <p className="text-lg mb-4">
              Aquí es donde la Musicoterapia transforma tu entorno. En estos procesos los grupos tienen un espacio para fortalecerse, empoderarse y transformar su realidad de la mano de profesionales con amplia experiencia.
            </p>
            <p className="text-lg mb-2">
              <strong>Duración mínima:</strong> un mes / 4 sesiones
            </p>
            <p className="text-lg mb-6">
              <strong>Cantidad máxima de integrantes:</strong> 30 personas
            </p>
            <button className="mt-4 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              ¡Conversemos!
            </button>
          </div>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/UG57hC_T5ZA"
              title="Procesos Grupales de Musicoterapia"
              allowFullScreen
            ></iframe>
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
                href="https://wa.me/NUMERO_WHATSAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#EA2336] text-white font-semibold hover:bg-[#FFAC03] hover:text-black transition inline-flex items-center gap-2"
              >
                Escríbenos por WhatsApp
              </a>

              <a
                href="mailto:CORREO_AGUANTA"
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
