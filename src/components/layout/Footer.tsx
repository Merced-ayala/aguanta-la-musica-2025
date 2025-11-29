import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-custom py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="font-heading h5 mb-3">Aguanta la Música</h3>
            <p className="text-muted small">
              Creamos experiencias musicales significativas para personas, entidades y empresas.
            </p>
          </div>

          <div className="col-md-4">
            <h4 className="h6 fw-semibold mb-3">Enlaces</h4>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/" className="text-muted text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios" className="text-muted text-decoration-none">
                  Servicios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-muted text-decoration-none">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4 className="h6 fw-semibold mb-3">Síguenos</h4>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/merced-ayala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-4 border-top">
          <div className="col text-center">
            <p className="text-muted small mb-0">
              © 2025 Aguanta la Música. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
