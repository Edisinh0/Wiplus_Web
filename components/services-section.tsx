import { Settings, Monitor, Code, Cpu } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Soporte Técnico Integral",
    description:
      "Atención especializada para usuarios finales, resolución de incidencias y mantenimiento preventivo, asegurando la continuidad de tu conexión.",
  },
  {
    icon: Monitor,
    title: "Administración Y Monitoreo De Red",
    description:
      "Gestión profesional de tu red local, garantizando estabilidad, seguridad y alto rendimiento en todo momento.",
  },
  {
    icon: Code,
    title: "TV Digital con 130 Canales",
    description:
      "Disfruta de entretenimiento de calidad con nuestra señal de TV digital incluida en todos nuestros planes de internet.",
  },
  {
    icon: Cpu,
    title: "Instalación Profesional",
    description:
      "Equipo técnico certificado para la instalación y configuración de tu servicio de Fibra Óptica en tu hogar o empresa.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 italic">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground">Conoce en profundidad nuestros servicios profesionales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4">
                <service.icon className="h-32 w-32 text-[#F39200] stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
