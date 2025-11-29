import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5>Aguanta la Música</h5>
            <p className="mb-0">
              Creamos experiencias musicales significativas para personas, entidades y empresas.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Inicio</Link>
              </li>
              <li className="mb-2">
                <Link to="/servicios">Servicios</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Síguenos</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/in/merced-ayala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/soyelcaysi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mb-0">© 2025 Aguanta la Música. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
