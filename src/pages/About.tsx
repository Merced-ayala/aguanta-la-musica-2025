import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "David Leonardo Caycedo",
      role: "Líder del equipo con una visión estratégica.",
      bio: "Magíster en Musicoterapia de la Universidad Nacional de Colombia, CEO y Fundador de Aguanta la Música, y terapeuta Gesltalt. Con experiencia atendiendo jóvenes y adultos, enfocados en potencializar su propósito y encontrar más bienestar en su vida.",
      image: "/images/team/david-caycedo.jpg"
    },
    {
      name: "Ana María Rodríguez",
      role: "",
      bio: "Magíster en Musicoterapia y Psicóloga de la Universidad Nacional de Colombia, con formación complementaria en Terapia Gestalt, y terapias psicocorporales. Tiene experiencia en atención individual y grupal con madres adolescentes, jóvenes en conflicto con la ley, pacientes en unidades de cuidados intensivos, y terapia particular individual y grupal.",
      image: "/images/team/ana-maria-rodriguez.jpeg"
    },
    {
      name: "Camilo Roa",
      role: "",
      bio: "Trabajador Social y Magíster en Musicoterapia de la Universidad Nacional de Colombia, con experiencia en acompañamiento individual y grupal a personas víctimas del conflicto armado, mujeres, comunidad LGBTI, niños, adolescentes y adultos. Ha trabajado con personas que enfrentan condiciones médicas como fibromialgia, depresión y ansiedad, así como con quienes buscan su desarrollo personal.",
      image: "/images/team/camilo-roa.jpeg"
    },
    {
      name: "Yenifer Ángel",
      role: "",
      bio: "Magíster en Musicoterapia de la Universidad Nacional de Colombia. Pianista, compositora, instructora de yoga y técnica vocal. Crea espacios de crecimiento y bienestar para todas las edades a través de la expresión corporal, la exploración sonora y el desarrollo del potencial creativo.",
      image: "/images/team/yenifer-angel.jpeg"
    },
    {
      name: "Merced Ayala",
      role: "",
      bio: "Músico e Ingeniera en Multimedia con formación en Desarrollo Web Full Stack por el Ministerio TIC 2024. Ha participado en el Space Apps Challenge de la NASA, donde combinó sus conocimientos en tecnología y creatividad para desarrollar soluciones innovadoras. Su experiencia abarca diseño de interfaces, animación 2D y desarrollo de proyectos interactivos, con un enfoque en la educación.",
      image: "/images/team/merced-ayala.jpeg"
    },
    {
      name: "Juan Venegas",
      role: "",
      bio: "Actor y cantante profesional. Ha trabajado en numerosos proyectos artísticos audiovisuales, musicales, teatrales y operísticos. Se destaca por un fuerte interés en los procesos pedagógicos artísticos contemporáneos y las motivaciones qué nos llevan como sociedad a hacer arte.",
      image: "/images/team/juan-venegas.jpg"
    },
    {
      name: "Andrés Mejía - PianÓpera",
      role: "",
      bio: "Barítono integrante del Coro Nacional de Colombia, y solista en Zarzuela Colombia y La Ópera de Colombia, fundador de PianÓpera y Maestro en Interpretación Musical del Conservatorio del Liceu de Barcelona, con amplia experiencia en la gestión de proyectos y producciones musicales.",
      image: "/images/team/andres-mejia.jpeg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Acerca de Nosotros - Aguanta la Música</title>
        <meta 
          name="description" 
          content="Conoce al equipo de Aguanta la Música. Magísteres en Musicoterapia dedicados a crear experiencias transformadoras." 
        />
      </Helmet>

      {/* Intro Section */}
      <section className="section-padding bg-gradient-light">
        <Container>
          <Row className="align-items-center">
            <Col md={8} lg={6} className="mx-auto text-center">
              <p className="text-muted-custom mb-2 text-uppercase fw-semibold" style={{ letterSpacing: '0.1em' }}>¡Hola! Soy</p>
              <h1 className="letras display-3 mb-4">David Caycedo Galvis</h1>
              <p className="lead mb-4">
                Fundador de Aguanta la Música, Magíster en Musicoterapia de la Universidad Nacional de Colombia y Terapeuta Gestalt
              </p>
              <Button variant="dark" size="lg" className="shadow-custom">
                ¡Sígueme en LinkedIn!
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Misión Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="mb-4 mb-md-0">
              <h2 className="letras display-4 text-primary">Misión</h2>
            </Col>
            <Col md={8}>
              <p className="fs-5 text-gray-600 mb-0">
                Existimos porque queremos utilizar la música como una herramienta para fomentar el crecimiento de individuos y comunidades, brindando experiencias transformadoras por medio de nuestros servicios.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Visión Section */}
      <section className="section-padding bg-gray-50">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="mb-4 mb-md-0">
              <p className="fs-5 text-gray-600 mb-0">
                Aspiramos a ser líderes en el uso de Musicoterapia y la creación de espacios de encuentro y conexión mediante la música en Colombia, Latinoamerica y el mundo.
              </p>
            </Col>
            <Col md={4} className="text-md-end">
              <h2 className="letras display-4 text-primary">Visión</h2>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding-lg">
        <Container>
          <div className="text-center mb-5">
            <h2 className="letras display-4 mb-3">
              Nuestro <span className="text-primary">Equipo</span>
            </h2>
            <p className="lead text-muted-custom mx-auto" style={{ maxWidth: '700px' }}>
              Conoce a quienes estamos aquí para desarrollar y ofrecerte experiencias y servicios de alta calidad
            </p>
          </div>

          <Row className="g-5">
            {teamMembers.map((member, index) => (
              <Col key={index} md={6} lg={4}>
                <div className="team-member">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="img-fluid rounded-lg-custom shadow-custom"
                  />
                  <h3 className="letras h4 mb-2">{member.name}</h3>
                  {member.role && <p className="text-primary fw-semibold mb-2">{member.role}</p>}
                  <p className="text-muted-custom">{member.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
