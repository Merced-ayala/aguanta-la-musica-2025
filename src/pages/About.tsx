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
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-display font-bold text-4xl md:text-5xl mb-8 text-center">
          Acerca de <span className="text-primary">Nosotros</span>
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8 text-center">
            En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Music2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Acompañar procesos de bienestar integral a través de experiencias musicales significativas y transformadoras.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser referentes en musicoterapia, promoviendo el bienestar emocional y el crecimiento personal a través de la música.
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Nuestros Valores</h3>
              <p className="text-muted-foreground">
                Empatía, profesionalismo, creatividad y compromiso con el bienestar de cada persona que acompañamos.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg my-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">¿Qué es la Musicoterapia?</h2>
            <p className="mb-4">
              La musicoterapia es el uso profesional de la música y sus elementos como intervención en ambientes médicos, educativos y cotidianos con individuos, grupos, familias o comunidades, buscando optimizar su calidad de vida y mejorar su salud física, social, comunicativa, emocional, intelectual y espiritual.
            </p>
            <p className="mb-4">
              A través de la creación musical, la escucha, el movimiento y otras experiencias musicales, la musicoterapia facilita procesos de autoconocimiento, expresión emocional y transformación personal.
            </p>
          </div>

          <div className="my-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Nuestro Enfoque Terapéutico</h2>
            <p className="mb-4">
              En Aguanta la Música trabajamos desde un enfoque humanista e integrativo, combinando principios de la Terapia Gestalt con las técnicas propias de la musicoterapia. Esto significa que:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Partimos del aquí y ahora, de lo que está presente en cada sesión</li>
              <li>Respetamos tu proceso único y tus tiempos</li>
              <li>Fomentamos la conciencia y la responsabilidad personal</li>
              <li>Usamos la música como lenguaje de expresión y exploración</li>
              <li>Creamos un espacio seguro y libre de juicios</li>
            </ul>
          </div>

          <div className="bg-muted p-8 rounded-lg my-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">¿Para quién es la Musicoterapia?</h2>
            <p className="mb-4">
              La musicoterapia es para todas las personas que deseen explorar nuevas formas de expresión, gestionar sus emociones y mejorar su bienestar. No se requieren conocimientos musicales previos.
            </p>
            <p>
              Trabajamos con adultos en procesos personales, con empresas que buscan mejorar el bienestar de sus equipos, y con instituciones educativas que quieren promover el desarrollo socioemocional de sus estudiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
