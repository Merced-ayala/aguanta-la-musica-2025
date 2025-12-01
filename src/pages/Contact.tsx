import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  asunto: z.string().min(3, "El asunto debe tener al menos 3 caracteres").max(200),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000)
});
type FormValues = z.infer<typeof formSchema>;
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    }
  });
  useEffect(() => {
    document.title = "Contáctanos - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Ponte en contacto con nosotros. Agenda tu sesión de musicoterapia o solicita más información sobre nuestros servicios.");
    }
  }, []);
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Formulario enviado:", data);
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto."
    });
    form.reset();
    setIsSubmitting(false);
  };
  return <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para acompañarte. Escríbenos y conversemos sobre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">david.caycedo@aguantalamusica.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/573142244057" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    +57 314 224 4057
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground bg-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Bogotá, Colombia</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    También ofrecemos sesiones virtuales
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <h3 className="font-semibold mb-2">Horario de Atención</h3>
              <p className="text-sm text-muted-foreground">
                Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="font-display font-bold text-2xl mb-6">Envíanos un Mensaje</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="nombre" render={({
                field
              }) => <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="asunto" render={({
                field
              }) => <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="¿En qué podemos ayudarte?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="mensaje" render={({
                field
              }) => <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos más sobre lo que necesitas..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;