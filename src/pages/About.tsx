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
      {/* Sección David Caycedo */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#EA2336]/5 to-[#FFAC03]/5 p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              ¡Hola! Soy <span className="text-[#EA2336]">David Caycedo Galvis</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Fundador de Aguanta la Música, Magíster en Musicoterapia de la Universidad Nacional de Colombia y Terapeuta Gestalt
            </p>
            <a
              href="https://www.linkedin.com/in/david-leonardo-caycedo-galvis-4b1b3b1b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#FFAC03] text-black font-semibold hover:bg-[#EA2336] hover:text-white transition"
            >
              ¡Sígueme en LinkedIn!
            </a>
          </div>
        </div>
      </section>

      {/* Acerca de Nosotros - Misión, Visión y Valores */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Acerca de <span className="text-[#EA2336]">Nosotros</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            En Aguanta la Música creemos en el poder transformador de la música como herramienta terapéutica que fomenta el crecimiento de individuos y comunidades.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-[#FCEEDD] rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#EA2336] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Existimos porque queremos utilizar la música como una herramienta para fomentar el crecimiento de individuos y comunidades, brindando experiencias transformadoras por medio de nuestros servicios.
              </p>
            </div>

            <div className="bg-[#FCEEDD] rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#FFAC03] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Aspiramos a ser líderes en el uso de Musicoterapia y la creación de espacios de encuentro y conexión mediante la música en Colombia, Latinoamérica y el mundo.
              </p>
            </div>

            <div className="bg-[#FCEEDD] rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#EA2336] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-heading font-bold text-2xl mb-4">Nuestros Valores</h2>
              <p className="text-gray-700">
                Compromiso con la excelencia, respeto por la diversidad, innovación constante y dedicación al bienestar de quienes confían en nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="w-full bg-[#EA2336] py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-black">
            Nuestro Equipo
          </h2>
          <p className="text-black mb-12 max-w-3xl mx-auto">
            Conoce a quienes estamos aquí para desarrollar y ofrecerte experiencias y servicios de alta calidad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-black hover:shadow-2xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-[#EA2336] mb-3">{member.role}</p>
                <p className="text-sm leading-relaxed">
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
