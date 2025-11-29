import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Aguanta la Música</h3>
            <p className="text-sm text-white/80">
              Creamos experiencias musicales significativas para personas, entidades y empresas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white/80 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/aguantalamusica/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/aguantalamusica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/80">© {new Date().getFullYear()} Aguanta la Música. Todos los derechos reservados.</p>
          <a
            href="https://www.linkedin.com/in/merced-ayala-6005b122b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-gray-300 transition-colors"
          >
            Desarrollado por Merced Ayala
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
