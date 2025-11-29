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
          <Row className="align-items-center min-vh-100">
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img 
                src="/images/logo-blanco.png" 
                alt="Logo Aguanta la Música" 
                className="img-fluid" 
                style={{ maxWidth: "400px" }}
              />
            </Col>
            <Col md={6} className="text-center">
              <h1 className="letras display-3 mb-4">
                Aquí descubrirás<br />
                qué es la<br />
                <span className="highlight">Musicoterapia</span>
              </h1>
              <p className="fs-4">
                Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hero Section 2 - Video */}
      <section className="fondo2 d-flex align-items-center">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <h2 className="letras display-4 mb-4">
                Usar la música<br />
                como terapia<br />
                <span className="highlight">cambiará tu vida</span>
              </h2>
              <p className="fs-4">
                Creamos experiencias musicales significativas para personas, entidades y empresas.
              </p>
            </Col>
            <Col md={6}>
              <div className="video-wrapper rounded shadow">
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
      <section className="py-5 bg-light-custom">
        <Container>
          <h2 className="letras text-center display-5 mb-5">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <Row className="g-4">
            {servicios.map((servicio) => (
              <Col key={servicio.id} md={4}>
                <Card className="service-card h-100 border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="letras h4">{servicio.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {servicio.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/servicios">
              <Button variant="primary" size="lg">
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="py-5">
        <Container>
          <h2 className="letras text-center display-5 mb-5">
            Artículos <span className="text-primary">Recientes</span>
          </h2>
          <Row className="g-4">
            {articulosRecientes.map((articulo) => (
              <Col key={articulo.id} md={4}>
                <Card className="blog-card h-100 border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={articulo.imagen} 
                    alt={articulo.titulo}
                  />
                  <Card.Body className="d-flex flex-column">
                    <span className="badge bg-primary mb-2 align-self-start">
                      {articulo.categoria}
                    </span>
                    <Card.Title className="letras h5">{articulo.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {articulo.extracto}
                    </Card.Text>
                    <Link to={`/blog/${articulo.slug}`}>
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
              <Button variant="primary" size="lg">
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
