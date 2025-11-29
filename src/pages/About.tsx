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
    <div className="min-vh-100 py-5" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '56rem' }}>
        <h1 className="font-heading fw-bold display-4 mb-4 text-center">
          Acerca de <span className="text-primary">Nosotros</span>
        </h1>

        <div className="prose mx-auto">
          <p className="fs-5 text-muted mb-5 text-center">
            En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica.
          </p>

          <div className="row g-4 my-5">
            <div className="col-md-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: 'rgba(232, 37, 55, 0.1)' }}>
                  <Music2 size={32} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="font-heading fw-semibold h5 mb-3">Nuestra Misión</h3>
                <p className="text-muted small">
                  Acompañar procesos de bienestar integral a través de experiencias musicales significativas y transformadoras.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: 'rgba(251, 172, 24, 0.1)' }}>
                  <Target size={32} style={{ color: 'var(--color-secondary)' }} />
                </div>
                <h3 className="font-heading fw-semibold h5 mb-3">Nuestra Visión</h3>
                <p className="text-muted small">
                  Ser referentes en musicoterapia, promoviendo el bienestar emocional y el crecimiento personal a través de la música.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center p-4 bg-muted rounded">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: 'rgba(192, 216, 76, 0.1)' }}>
                  <Heart size={32} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="font-heading fw-semibold h5 mb-3">Nuestros Valores</h3>
                <p className="text-muted small">
                  Empatía, profesionalismo, creatividad y compromiso con el bienestar de cada persona que acompañamos.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded my-5" style={{ background: 'linear-gradient(to bottom right, rgba(232, 37, 55, 0.05), rgba(251, 172, 24, 0.05))' }}>
            <h2 className="font-heading fw-bold h3 mb-3">¿Qué es la Musicoterapia?</h2>
            <p className="mb-3">
              La musicoterapia es el uso profesional de la música y sus elementos como intervención en ambientes médicos, educativos y cotidianos con individuos, grupos, familias o comunidades, buscando optimizar su calidad de vida y mejorar su salud física, social, comunicativa, emocional, intelectual y espiritual.
            </p>
            <p className="mb-0">
              A través de la creación musical, la escucha, el movimiento y otras experiencias musicales, la musicoterapia facilita procesos de autoconocimiento, expresión emocional y transformación personal.
            </p>
          </div>

          <div className="my-5">
            <h2 className="font-heading fw-bold h3 mb-3">Nuestro Enfoque Terapéutico</h2>
            <p className="mb-3">
              En Aguanta la Música trabajamos desde un enfoque humanista e integrativo, combinando principios de la Terapia Gestalt con las técnicas propias de la musicoterapia. Esto significa que:
            </p>
            <ul className="mb-3">
              <li className="mb-2">Partimos del aquí y ahora, de lo que está presente en cada sesión</li>
              <li className="mb-2">Respetamos tu proceso único y tus tiempos</li>
              <li className="mb-2">Fomentamos la conciencia y la responsabilidad personal</li>
              <li className="mb-2">Usamos la música como lenguaje de expresión y exploración</li>
              <li className="mb-2">Creamos un espacio seguro y libre de juicios</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded my-5">
            <h2 className="font-heading fw-bold h3 mb-3">¿Para quién es la Musicoterapia?</h2>
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
  );
};

export default About;
