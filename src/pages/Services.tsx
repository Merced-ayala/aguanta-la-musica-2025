import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { getServicios } from "@/services/serviciosService";

const Services = () => {
  const servicios = getServicios();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nuestros Servicios - Aguanta la Música</title>
        <meta 
          name="description" 
          content="Descubre nuestros servicios: talleres, sesiones individuales y procesos grupales de musicoterapia." 
        />
      </Helmet>

      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <h1 className="letras display-4 mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="fs-5 text-muted">
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          <Row className="g-4">
            {servicios.map((servicio) => (
              <Col key={servicio.id} md={6} lg={4}>
                <Card className="service-card h-100 border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="letras h3">{servicio.titulo}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {servicio.descripcion}
                    </Card.Text>
                    <Link to="/contacto">
                      <Button variant="primary" className="mt-3 w-100">
                        Solicitar información
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-5 p-5 bg-light-custom rounded text-center">
            <h2 className="letras h3 mb-3">
              ¿Tienes dudas sobre cuál servicio es para ti?
            </h2>
            <p className="text-muted mb-4">
              Agenda una sesión de orientación gratuita y conversemos sobre cómo la musicoterapia puede ayudarte.
            </p>
            <Link to="/contacto">
              <Button variant="primary" size="lg">
                Agendar consulta gratuita
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
