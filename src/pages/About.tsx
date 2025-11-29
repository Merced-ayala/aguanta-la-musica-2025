import { useEffect } from "react";

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

  const teamMembers = [
    {
      name: "David Leonardo Caycedo",
      role: "Fundador y CEO",
      image: "/images/team/david-caycedo.jpg",
      description: "Líder del equipo con una visión estratégica. Magíster en Musicoterapia de la Universidad Nacional de Colombia, CEO y Fundador de Aguanta la Música, y terapeuta Gestalt. Con experiencia atendiendo jóvenes y adultos, enfocados en potencializar su propósito y encontrar más bienestar en su vida."
    },
    {
      name: "Ana María Rodríguez",
      role: "Musicoterapeuta",
      image: "/images/team/ana-maria-rodriguez.jpeg",
      description: "Magíster en Musicoterapia y Psicóloga de la Universidad Nacional de Colombia, con formación complementaria en Terapia Gestalt, y terapias psicocorporales. Tiene experiencia en atención individual y grupal con madres adolescentes, jóvenes en conflicto con la ley, pacientes en unidades de cuidados intensivos, y terapia particular individual y grupal."
    },
    {
      name: "Camilo Roa",
      role: "Musicoterapeuta",
      image: "/images/team/camilo-roa.jpeg",
      description: "Trabajador Social y Magíster en Musicoterapia de la Universidad Nacional de Colombia, con experiencia en acompañamiento individual y grupal a personas víctimas del conflicto armado, mujeres, comunidad LGBTI, niños, adolescentes y adultos. Ha trabajado con personas que enfrentan condiciones médicas como fibromialgia, depresión y ansiedad, así como con quienes buscan su desarrollo personal."
    },
    {
      name: "Yenifer Ángel",
      role: "Musicoterapeuta",
      image: "/images/team/yenifer-angel.jpeg",
      description: "Magíster en Musicoterapia de la Universidad Nacional de Colombia. Pianista, compositora, instructora de yoga y técnica vocal. Crea espacios de crecimiento y bienestar para todas las edades a través de la expresión corporal, la exploración sonora y el desarrollo del potencial creativo."
    },
    {
      name: "Merced Ayala",
      role: "Desarrollo Web y Multimedia",
      image: "/images/team/merced-ayala.jpeg",
      description: "Músico e Ingeniera en Multimedia con formación en Desarrollo Web Full Stack por el Ministerio TIC 2024. Ha participado en el Space Apps Challenge de la NASA, donde combinó sus conocimientos en tecnología y creatividad para desarrollar soluciones innovadoras. Su experiencia abarca diseño de interfaces, animación 2D y desarrollo de proyectos interactivos, con un enfoque en la educación."
    },
    {
      name: "Juan Venegas",
      role: "Actor y Cantante",
      image: "/images/team/juan-venegas.jpg",
      description: "Actor y cantante profesional. Ha trabajado en numerosos proyectos artísticos audiovisuales, musicales, teatrales y operísticos. Se destaca por un fuerte interés en los procesos pedagógicos artísticos contemporáneos y las motivaciones qué nos llevan como sociedad a hacer arte."
    },
    {
      name: "Andrés Mejía - PianÓpera",
      role: "Barítono y Maestro",
      image: "/images/team/andres-mejia.jpeg",
      description: "Barítono integrante del Coro Nacional de Colombia, y solista en Zarzuela Colombia y La Ópera de Colombia, fundador de PianÓpera y Maestro en Interpretación Musical del Conservatorio del Liceu de Barcelona, con amplia experiencia en la gestión de proyectos y producciones musicales."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Sección David Caycedo */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-lg">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              ¡Hola! Soy <span className="text-primary">David Caycedo Galvis</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Fundador de Aguanta la Música, Magíster en Musicoterapia de la Universidad Nacional de Colombia y Terapeuta Gestalt
            </p>
            <a
              href="LINKEDIN_DAVID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
            >
              ¡Sígueme en LinkedIn!
            </a>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Misión</h2>
            <p className="text-muted-foreground">
              Existimos porque queremos utilizar la música como una herramienta para fomentar el crecimiento de individuos y comunidades, brindando experiencias transformadoras por medio de nuestros servicios.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Visión</h2>
            <p className="text-muted-foreground">
              Aspiramos a ser líderes en el uso de Musicoterapia y la creación de espacios de encuentro y conexión mediante la música en Colombia, Latinoamerica y el mundo.
            </p>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-16 -mx-4 px-4 py-16 bg-[#EA2336]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-black">
              Nuestro Equipo
            </h2>
            <p className="text-center text-black mb-12 max-w-3xl mx-auto">
              Conoce a quienes estamos aquí para desarrollar y ofrecerte experiencias y servicios de alta calidad
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="font-heading font-bold text-xl mb-2 text-black">{member.name}</h3>
                    <p className="text-sm text-[#EA2336] font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-black/80 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
