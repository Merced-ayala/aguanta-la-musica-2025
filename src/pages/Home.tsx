import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Heart, Users, Sparkles } from "lucide-react";
import { getArticulosRecientes } from "@/services/articulosService";
import { getServicios } from "@/services/serviciosService";

const Home = () => {
  useEffect(() => {
    document.title = "Aguanta la Música - Musicoterapia en Bogotá";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Creamos experiencias musicales significativas para personas, entidades y empresas. Descubre el poder de la musicoterapia."
      );
    }
  }, []);

  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 text-foreground">
            Aquí descubrirás qué es la <span className="text-primary">Musicoterapia</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/servicios">Conoce nuestros servicios</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/contacto">Agenda tu sesión</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              Usar la música como terapia <span className="text-primary">cambiará tu vida</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Creamos experiencias musicales significativas para personas, entidades y empresas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Experiencias Musicales</h3>
                <p className="text-muted-foreground text-sm">
                  Sesiones personalizadas que se adaptan a tus necesidades y objetivos
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Bienestar Emocional</h3>
                <p className="text-muted-foreground text-sm">
                  Acompañamos procesos de crecimiento personal y sanación
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Para Todos</h3>
                <p className="text-muted-foreground text-sm">
                  Trabajamos con personas, empresas e instituciones educativas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo podemos acompañarte en tu proceso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicios.slice(0, 4).map((servicio) => (
              <Card key={servicio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{servicio.titulo}</CardTitle>
                  <CardDescription>{servicio.publicoObjetivo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {servicio.descripcion}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/servicios">Ver más</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Artículos Recientes</h2>
            <p className="text-lg text-muted-foreground">
              Descubre más sobre musicoterapia, bienestar y salud mental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulosRecientes.map((articulo) => (
              <Card key={articulo.id} className="hover:shadow-lg transition-shadow">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2">
                    {articulo.categoria}
                  </div>
                  <CardTitle className="text-xl">{articulo.titulo}</CardTitle>
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

export default Home;
