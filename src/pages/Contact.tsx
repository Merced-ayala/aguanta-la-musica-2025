import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  asunto: z.string().min(3, "El asunto debe tener al menos 3 caracteres").max(200),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    document.title = "Contáctanos - Aguanta la Música";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Ponte en contacto con nosotros. Agenda tu sesión de musicoterapia o solicita más información sobre nuestros servicios."
      );
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Formulario enviado:", data);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="mb-3">Contáctanos</h1>
          <p className="lead text-muted">
            Estamos aquí para acompañarte. Escríbenos y conversemos sobre cómo podemos ayudarte.
          </p>
        </div>

        <div className="row g-5">
          {/* Información de contacto */}
          <div className="col-lg-5">
            <h2 className="mb-4">Información de Contacto</h2>
            
            <div className="contact-info mb-4">
              <div className="d-flex align-items-start mb-4">
                <div className="d-flex align-items-center justify-content-center bg-primary-custom text-white rounded me-3" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p className="mb-0 text-muted">contacto@aguantalamusica.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="d-flex align-items-center justify-content-center bg-secondary-custom text-dark rounded me-3" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h5>Teléfono</h5>
                  <p className="mb-0 text-muted">+57 300 123 4567</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="d-flex align-items-center justify-content-center rounded me-3" style={{ width: '48px', height: '48px', flexShrink: 0, backgroundColor: 'var(--color-lime)', color: 'white' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h5>Ubicación</h5>
                  <p className="mb-0 text-muted">Bogotá, Colombia</p>
                  <p className="small text-muted mt-1">
                    También ofrecemos sesiones virtuales
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h5>Horario de Atención</h5>
              <p className="small text-muted mb-0">
                Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="col-lg-7">
            <h2 className="mb-4">Envíanos un Mensaje</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  id="nombre"
                  placeholder="Tu nombre"
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <div className="invalid-feedback">{errors.nombre.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="tu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input
                  type="text"
                  className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                  id="asunto"
                  placeholder="¿En qué podemos ayudarte?"
                  {...register("asunto")}
                />
                {errors.asunto && (
                  <div className="invalid-feedback">{errors.asunto.message}</div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  id="mensaje"
                  rows={6}
                  placeholder="Cuéntanos más sobre lo que necesitas..."
                  {...register("mensaje")}
                ></textarea>
                {errors.mensaje && (
                  <div className="invalid-feedback">{errors.mensaje.message}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-principal w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
