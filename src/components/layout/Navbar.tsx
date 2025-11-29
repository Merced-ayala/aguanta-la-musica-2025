import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar-custom fixed-top py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/images/logo-blanco.png" 
            alt="Aguanta la Música" 
            height="55"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`mx-lg-2 ${isActive("/") ? "fw-bold text-primary" : ""}`}
              onClick={() => setExpanded(false)}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/acerca-de-nosotros" 
              className={`mx-lg-2 ${isActive("/acerca-de-nosotros") ? "fw-bold text-primary" : ""}`}
              onClick={() => setExpanded(false)}
            >
              Acerca de
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/servicios" 
              className={`mx-lg-2 ${isActive("/servicios") ? "fw-bold text-primary" : ""}`}
              onClick={() => setExpanded(false)}
            >
              Servicios
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/blog" 
              className={`mx-lg-2 ${isActive("/blog") ? "fw-bold text-primary" : ""}`}
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacto" 
              className={`mx-lg-2 ${isActive("/contacto") ? "fw-bold text-primary" : ""}`}
              onClick={() => setExpanded(false)}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
