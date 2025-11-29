import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
      <div className="container text-center">
        <h1 className="font-heading fw-bold display-1 text-primary mb-4">404</h1>
        <h2 className="font-heading fw-bold h3 mb-4">Página no encontrada</h2>
        <p className="text-muted mb-5">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/" className="btn btn-primary btn-lg px-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
