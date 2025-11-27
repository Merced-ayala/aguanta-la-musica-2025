import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { getServicios } from "@/services/serviciosService";

const Services = () => {
  const servicios = getServicios();

  useEffect(() => {
    document.title = "Servicios - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conoce nuestros servicios de musicoterapia: sesiones individuales, programas para empresas, talleres educativos y grupos terapéuticos."
      );
    }
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias musicales diseñadas para acompañarte en tu proceso de bienestar y crecimiento personal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicios.map((servicio) => (
            <Card key={servicio.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{servicio.titulo}</CardTitle>
                <CardDescription className="text-base">{servicio.publicoObjetivo}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6">{servicio.descripcion}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Duración: {servicio.duracion}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>Modalidad: {servicio.modalidad}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/contacto">Solicitar información</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 rounded-lg max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
            ¿Tienes dudas sobre cuál servicio es para ti?
          </h2>
          <p className="text-muted-foreground mb-6">
            Agenda una sesión de orientación gratuita y conversemos sobre cómo la musicoterapia puede ayudarte.
          </p>
          <Button asChild size="lg">
            <Link to="/contacto">Agendar consulta gratuita</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
