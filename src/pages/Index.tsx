import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getArticulosRecientes } from "@/services/articulosService";
import { getServicios } from "@/services/serviciosService";

const Index = () => {
  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Aguanta la Música - Musicoterapia y Bienestar</title>
        <meta 
          name="description" 
          content="Descubre el poder de la musicoterapia. Creamos experiencias musicales significativas para personas, entidades y empresas." 
        />
      </Helmet>

      {/* Hero Section 1 */}
      <section className="fondo1 d-flex align-items-center">
        <Container>
          <Row className="align-items-center" style={{ minHeight: '100vh', padding: '4rem 0' }}>
            <Col md={6} className="d-flex justify-content-center align-items-center mb-5 mb-md-0">
              <img 
                src="/images/logo-blanco.png" 
                alt="Logo Aguanta la Música" 
                className="img-fluid fade-in-up" 
                style={{ maxWidth: "450px" }}
              />
            </Col>
            <Col md={6} className="text-center text-md-start">
              <h1 className="letras mb-4 fade-in-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
                Aquí descubrirás<br />
                qué es la<br />
                <span className="highlight">Musicoterapia</span>
              </h1>
              <p className="lead mb-0">
                Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hero Section 2 - Video */}
      <section className="fondo2 d-flex align-items-center">
        <Container>
          <Row className="align-items-center" style={{ minHeight: '100vh', padding: '4rem 0' }}>
            <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
              <h2 className="letras mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
                Usar la música<br />
                como terapia<br />
                <span className="highlight">cambiará tu vida</span>
              </h2>
              <p className="lead text-gray-600">
                Creamos experiencias musicales significativas para personas, entidades y empresas.
              </p>
            </Col>
            <Col md={6}>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/2Yc3eJru998"
                  title="Terapia por David Caycedo Galvis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Servicios Section */}
      <section className="section-padding-lg bg-gray-50">
        <Container>
          <div className="text-center mb-5">
            <h2 className="letras display-4 mb-3">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
          </div>
          <Row className="g-4 g-lg-5">
            {servicios.map((servicio) => (
              <Col key={servicio.id} md={6} lg={4}>
                <Card className="service-card">
                  <Card.Img 
                    variant="top" 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="letras h3 mb-3">{servicio.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1 text-gray-600">
                      {servicio.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/servicios">
              <Button variant="primary" size="lg" className="px-5">
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="section-padding-lg">
        <Container>
          <div className="text-center mb-5">
            <h2 className="letras display-4 mb-3">
              Artículos <span className="text-primary">Recientes</span>
            </h2>
          </div>
          <Row className="g-4 g-lg-5">
            {articulosRecientes.map((articulo) => (
              <Col key={articulo.id} md={6} lg={4}>
                <Card className="blog-card">
                  <Card.Img 
                    variant="top" 
                    src={articulo.imagen} 
                    alt={articulo.titulo}
                  />
                  <Card.Body className="d-flex flex-column">
                    <span className="badge bg-primary mb-3 align-self-start">
                      {articulo.categoria}
                    </span>
                    <Card.Title className="letras h5 mb-3">{articulo.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1 text-gray-600">
                      {articulo.extracto}
                    </Card.Text>
                    <Link to={`/blog/${articulo.slug}`} className="mt-3">
                      <Button variant="outline-primary" className="w-100">
                        Leer más
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/blog">
              <Button variant="primary" size="lg" className="px-5">
                Ver todos los artículos
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
