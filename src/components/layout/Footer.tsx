import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col md={4}>
            <h5 className="mb-4">Aguanta la Música</h5>
            <p className="mb-0" style={{ opacity: 0.9 }}>
              Utilizamos la música como herramienta para fomentar el crecimiento de individuos y comunidades.
            </p>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-4">Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/" className="d-inline-block">
                  Inicio
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/servicios" className="d-inline-block">
                  Servicios
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/blog" className="d-inline-block">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-4">Síguenos</h5>
            <div className="d-flex gap-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-inline-block"
                style={{ fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-inline-block"
                style={{ fontSize: '1.5rem', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Instagram
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0" style={{ opacity: 0.8 }}>
              &copy; {new Date().getFullYear()} Aguanta la Música. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
