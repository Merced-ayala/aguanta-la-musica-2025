import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-custom py-5">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="mb-3">Aguanta la Música</h5>
            <p>
              Utilizamos la música como herramienta para fomentar el crecimiento de individuos y comunidades.
            </p>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios" className="text-white text-decoration-none">
                  Servicios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-3">Síguenos</h5>
            <div className="d-flex gap-3">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                Instagram
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 bg-white" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Aguanta la Música. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
