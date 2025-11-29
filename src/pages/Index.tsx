import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticulosRecientes } from "@/services/articulosService";
import { getServicios } from "@/services/serviciosService";

const Index = () => {
  useEffect(() => {
    document.title = "Aguanta la Música - Musicoterapia en Bogotá";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial."
      );
    }
  }, []);

  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/images/logo-blanco.png" 
                alt="Aguanta la Música Logo" 
                className="w-full max-w-md"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 text-foreground leading-tight">
                Aquí descubrirás<br />
                qué es la<br />
                <span className="text-primary">Musicoterapia</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8">
                Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video and Mission Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 leading-tight">
                Usar la música<br />
                como terapia<br />
                <span className="text-primary">cambiará tu vida</span>
              </h2>
              <p className="text-lg text-foreground">
                Creamos experiencias musicales significativas para personas, entidades y empresas.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2Yc3eJru998"
                  title="Musicoterapia - Aguanta la Música"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio) => (
              <Card key={servicio.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading font-bold">{servicio.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    {servicio.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Blog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articulosRecientes.map((articulo) => (
              <Card key={articulo.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-bold">{articulo.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {articulo.extracto}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to={`/blog/${articulo.slug}`}>Leer más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
