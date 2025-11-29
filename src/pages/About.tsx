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
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero: Acerca de Nosotros */}
      <section className="w-full bg-[#FFAC03] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Acerca de <span className="text-white">Nosotros</span>
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto mb-12" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
            En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Misión */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FADFCC] flex items-center justify-center mb-4">
                <span className="text-[#EA2336] text-4xl">♪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Nuestra Misión</h3>
              <p className="text-gray-900">
                Existimos porque queremos utilizar la música como una herramienta para fomentar el crecimiento de individuos y comunidades, brindando experiencias transformadoras por medio de nuestros servicios.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FADFCC] flex items-center justify-center mb-4">
                <span className="text-[#FFAC03] text-4xl">◎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Nuestra Visión</h3>
              <p className="text-gray-900">
                Aspiramos a ser líderes en el uso de Musicoterapia y la creación de espacios de encuentro y conexión mediante la música en Colombia, Latinoamerica y el mundo.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FADFCC] flex items-center justify-center mb-4">
                <span className="text-gray-900 text-4xl">♡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Nuestros Valores</h3>
              <p className="text-gray-900">
                Compromiso con la excelencia, respeto por la diversidad, innovación constante y dedicación al bienestar de quienes confían en nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Sección "Hola, soy David Caycedo" */}
      <section className="relative w-full min-h-[70vh] text-white">
        {/* Imagen de fondo */}
        <img
          src="/images/team/david-caycedo.jpg"
          alt="David Caycedo Galvis"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />

        {/* Capa oscura para contrastar el texto */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 flex items-center min-h-[70vh]">
          <div className="ml-auto w-full md:w-1/2 text-center md:text-right">
            <p className="text-2xl md:text-3xl mb-2 font-light" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>¡Hola! Soy</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
              David Caycedo Galvis
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}>
              Fundador de Aguanta la Música, Magíster en Musicoterapia de la Universidad Nacional de Colombia y Terapeuta Gestalt
            </p>
            <a
              href="https://www.linkedin.com/in/david-caycedo-galvis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3 rounded-full bg-black text-white font-semibold text-sm md:text-base hover:bg-white hover:text-black transition"
            >
              ¡Sígueme en linkedin!
            </a>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="w-full bg-[#EA2336] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
            Nuestro Equipo
          </h2>
          <p className="text-white mb-12 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)' }}>
            Conoce a quienes estamos aquí para desarrollar y ofrecerte experiencias y servicios de alta calidad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-[#EA2336] mb-3">{member.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
