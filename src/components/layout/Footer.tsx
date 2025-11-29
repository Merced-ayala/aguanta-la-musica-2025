import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-4">
            <h3 className="font-heading h4 mb-3">Aguanta la Música</h3>
            <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Creamos experiencias musicales significativas para personas, entidades y empresas.
            </p>
          </div>

          <div className="col-md-4">
            <h4 className="font-heading h5 fw-semibold mb-3">Enlaces</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-dark text-decoration-none" style={{ fontSize: '0.95rem' }}>
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios" className="text-dark text-decoration-none" style={{ fontSize: '0.95rem' }}>
                  Servicios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-dark text-decoration-none" style={{ fontSize: '0.95rem' }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4 className="font-heading h5 fw-semibold mb-3">Síguenos</h4>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/merced-ayala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top">
          <div className="col text-center">
            <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
              © 2025 Aguanta la Música. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
