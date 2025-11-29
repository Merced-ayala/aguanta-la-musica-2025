import { useEffect } from "react";
import { Music2, Target, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "Acerca de Nosotros - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce la historia y filosofía de Aguanta la Música. Descubre cómo la musicoterapia puede transformar vidas."
      );
    }
  }, []);

  return (
    <div className="about-section">
      <div className="container">
        <h1 className="text-center mb-4">
          Acerca de <span className="text-primary-custom">Nosotros</span>
        </h1>

        <p className="lead text-center text-muted mb-5">
          En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica.
        </p>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="about-card text-center">
              <div className="icon-wrapper mx-auto">
                <Music2 />
              </div>
              <h3>Nuestra Misión</h3>
              <p className="text-muted">
                Acompañar procesos de bienestar integral a través de experiencias musicales significativas y transformadoras.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card text-center">
              <div className="icon-wrapper mx-auto">
                <Target />
              </div>
              <h3>Nuestra Visión</h3>
              <p className="text-muted">
                Ser referentes en musicoterapia, promoviendo el bienestar emocional y el crecimiento personal a través de la música.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card text-center">
              <div className="icon-wrapper mx-auto">
                <Heart />
              </div>
              <h3>Nuestros Valores</h3>
              <p className="text-muted">
                Empatía, profesionalismo, creatividad y compromiso con el bienestar de cada persona que acompañamos.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="about-card mb-4">
              <h2 className="mb-4">¿Qué es la Musicoterapia?</h2>
              <p className="mb-3">
                La musicoterapia es el uso profesional de la música y sus elementos como intervención en ambientes médicos, educativos y cotidianos con individuos, grupos, familias o comunidades, buscando optimizar su calidad de vida y mejorar su salud física, social, comunicativa, emocional, intelectual y espiritual.
              </p>
              <p className="mb-0">
                A través de la creación musical, la escucha, el movimiento y otras experiencias musicales, la musicoterapia facilita procesos de autoconocimiento, expresión emocional y transformación personal.
              </p>
            </div>

            <div className="about-card mb-4">
              <h2 className="mb-4">Nuestro Enfoque Terapéutico</h2>
              <p className="mb-3">
                En Aguanta la Música trabajamos desde un enfoque humanista e integrativo, combinando principios de la Terapia Gestalt con las técnicas propias de la musicoterapia. Esto significa que:
              </p>
              <ul className="mb-0">
                <li>Partimos del aquí y ahora, de lo que está presente en cada sesión</li>
                <li>Respetamos tu proceso único y tus tiempos</li>
                <li>Fomentamos la conciencia y la responsabilidad personal</li>
                <li>Usamos la música como lenguaje de expresión y exploración</li>
                <li>Creamos un espacio seguro y libre de juicios</li>
              </ul>
            </div>

            <div className="about-card">
              <h2 className="mb-4">¿Para quién es la Musicoterapia?</h2>
              <p className="mb-3">
                La musicoterapia es para todas las personas que deseen explorar nuevas formas de expresión, gestionar sus emociones y mejorar su bienestar. No se requieren conocimientos musicales previos.
              </p>
              <p className="mb-0">
                Trabajamos con adultos en procesos personales, con empresas que buscan mejorar el bienestar de sus equipos, y con instituciones educativas que quieren promover el desarrollo socioemocional de sus estudiantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
