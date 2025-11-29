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
      metaDescription.setAttribute("content", "Nos gusta compartir y crear juntos. Creemos que la música es poderosa y estamos aquí para acompañarte a descubrir tu potencial.");
    }
  }, []);
  const articulosRecientes = getArticulosRecientes(3);
  const servicios = getServicios();
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] px-4 bg-cover bg-center flex items-center" style={{
      backgroundImage: 'url(/images/hero-background.jpg)'
    }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Logo and Text */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <img src="/images/logo-blanco.png" alt="Aguanta la Música" className="w-full max-w-md" />
              <div className="text-center text-white space-y-1">
                <p className="text-xl md:text-2xl font-semibold tracking-wide">
                  AGUANTA LA MÚSICA
                </p>
                <p className="text-lg md:text-xl tracking-wide">
                  VIVIMOS LA MÚSICA
                </p>
              </div>
            </div>

            {/* Right Column - Heading and Description */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
                <span className="text-white block">Aquí descubrirás</span>
                <span className="text-white block">qué es la</span>
                <span className="block" style={{
                color: '#E62C3A'
              }}>Musicoterapia</span>
              </h1>
              <p className="text-lg md:text-xl text-white leading-relaxed">
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
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2Yc3eJru998" title="Musicoterapia - Aguanta la Música" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-12 py-4 rounded-lg mb-4 bg-[#eb2337]/0">
              <h2 className="font-heading font-bold text-3xl text-white md:text-5xl">
                Nuestros Servicios
              </h2>
            </div>
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground">
              Aquí descubrirás a la música como terapia, como formación y como alternativa para que tú o tu equipo puedan crecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicios.map(servicio => <Card key={servicio.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img src={servicio.imagen} alt={servicio.titulo} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading font-bold">{servicio.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    {servicio.descripcion}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicios" className="inline-block px-8 py-3 rounded-lg font-semibold text-white bg-black hover:bg-[#C4AF00] hover:text-black active:bg-[#C4AF00] active:text-black transition-all duration-300">
              Ver todos los servicios
            </Link>
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
            {articulosRecientes.map(articulo => <Card key={articulo.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <img src={articulo.imagen} alt={articulo.titulo} className="w-full h-48 object-cover" />
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
              </Card>)}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;