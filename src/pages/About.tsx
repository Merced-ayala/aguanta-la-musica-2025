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
    <div className="min-vh-100" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '60rem' }}>
        <div className="text-center mb-5 pt-4">
          <h1 className="font-heading fw-bold display-3 mb-4">
            Acerca de <span className="text-aguanta-red">Nosotros</span>
          </h1>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '48rem', lineHeight: '1.6' }}>
            En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica.
          </p>
        </div>

        <div className="row g-4 my-5">
          <div className="col-md-4">
            <div className="card-aguanta text-center">
              <div className="mb-4">
                <Music2 className="text-aguanta-red" size={48} />
              </div>
              <h2 className="font-heading fw-bold h3 mb-3">Nuestra Misión</h2>
              <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Acompañar procesos de bienestar integral a través de experiencias musicales significativas y transformadoras.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-aguanta text-center">
              <div className="mb-4">
                <Target className="text-aguanta-yellow" size={48} />
              </div>
              <h2 className="font-heading fw-bold h3 mb-3">Nuestra Visión</h2>
              <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Ser referentes en musicoterapia, promoviendo el bienestar emocional y el crecimiento personal a través de la música.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-aguanta text-center">
              <div className="mb-4">
                <Heart className="text-aguanta-accent" size={48} />
              </div>
              <h2 className="font-heading fw-bold h3 mb-3">Nuestros Valores</h2>
              <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                Empatía, profesionalismo, creatividad y compromiso con el bienestar de cada persona que acompañamos.
              </p>
            </div>
          </div>
        </div>

        <div className="prose mx-auto">
          <div className="p-5 rounded-4 my-5" style={{ background: 'linear-gradient(to bottom right, rgba(234, 35, 54, 0.08), rgba(255, 172, 3, 0.08))' }}>
            <h2 className="font-heading fw-bold h3 mb-4">¿Qué es la Musicoterapia?</h2>
            <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              La musicoterapia es el uso profesional de la música y sus elementos como intervención en ambientes médicos, educativos y cotidianos con individuos, grupos, familias o comunidades, buscando optimizar su calidad de vida y mejorar su salud física, social, comunicativa, emocional, intelectual y espiritual.
            </p>
            <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              A través de la creación musical, la escucha, el movimiento y otras experiencias musicales, la musicoterapia facilita procesos de autoconocimiento, expresión emocional y transformación personal.
            </p>
          </div>

          <div className="my-5 px-3">
            <h2 className="font-heading fw-bold h3 mb-4">Nuestro Enfoque Terapéutico</h2>
            <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              En Aguanta la Música trabajamos desde un enfoque humanista e integrativo, combinando principios de la Terapia Gestalt con las técnicas propias de la musicoterapia. Esto significa que:
            </p>
            <ul className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              <li className="mb-2">Partimos del aquí y ahora, de lo que está presente en cada sesión</li>
              <li className="mb-2">Respetamos tu proceso único y tus tiempos</li>
              <li className="mb-2">Fomentamos la conciencia y la responsabilidad personal</li>
              <li className="mb-2">Usamos la música como lenguaje de expresión y exploración</li>
              <li className="mb-2">Creamos un espacio seguro y libre de juicios</li>
            </ul>
          </div>

          <div className="p-5 rounded-4 my-5" style={{ backgroundColor: 'var(--color-muted)' }}>
            <h2 className="font-heading fw-bold h3 mb-4">¿Para quién es la Musicoterapia?</h2>
            <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              La musicoterapia es para todas las personas que deseen explorar nuevas formas de expresión, gestionar sus emociones y mejorar su bienestar. No se requieren conocimientos musicales previos.
            </p>
            <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Trabajamos con adultos en procesos personales, con empresas que buscan mejorar el bienestar de sus equipos, y con instituciones educativas que quieren promover el desarrollo socioemocional de sus estudiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
