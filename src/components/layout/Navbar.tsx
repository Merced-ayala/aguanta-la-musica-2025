import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/images/logo-blanco.png" 
            alt="Aguanta la Música" 
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive("/") ? "fw-bold text-primary" : ""}
              onClick={() => setExpanded(false)}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/acerca-de-nosotros" 
              className={isActive("/acerca-de-nosotros") ? "fw-bold text-primary" : ""}
              onClick={() => setExpanded(false)}
            >
              Acerca de
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/servicios" 
              className={isActive("/servicios") ? "fw-bold text-primary" : ""}
              onClick={() => setExpanded(false)}
            >
              Servicios
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/blog" 
              className={isActive("/blog") ? "fw-bold text-primary" : ""}
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacto" 
              className={isActive("/contacto") ? "fw-bold text-primary" : ""}
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
