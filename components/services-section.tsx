import { Settings, Monitor, Tv, Wrench } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Soporte Técnico Integral",
    description:
      "Atención especializada para usuarios finales, resolución de incidencias y mantenimiento preventivo, asegurando la continuidad de tu conexión.",
    gradient: "from-[#F39200]/20 to-transparent",
  },
  {
    icon: Monitor,
    title: "Administración Y Monitoreo De Red",
    description:
      "Gestión profesional de tu red local, garantizando estabilidad, seguridad y alto rendimiento en todo momento.",
    gradient: "from-[#E65100]/20 to-transparent",
  },
  {
    icon: Tv,
    title: "TV Digital con 130 Canales",
    description:
      "Disfruta de entretenimiento de calidad con nuestra señal de TV digital incluida en todos nuestros planes de internet.",
    gradient: "from-[#F39200]/20 to-transparent",
  },
  {
    icon: Wrench,
    title: "Instalación Profesional",
    description:
      "Equipo técnico certificado para la instalación y configuración de tu servicio de Fibra Óptica en tu hogar o empresa.",
    gradient: "from-[#E65100]/20 to-transparent",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Gradient de transición desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-0" />

      {/* Decoración de fondo sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#F39200]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#F39200] text-sm font-semibold uppercase tracking-widest mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Conoce en profundidad nuestros servicios profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F39200]/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(243,146,0,0.1)] overflow-hidden"
            >
              {/* Gradiente superior de la tarjeta */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F39200]/30 to-transparent" />

              {/* Ícono */}
              <div className="mb-6 p-5 rounded-2xl bg-[#F39200]/10 group-hover:bg-[#F39200]/20 transition-colors duration-300">
                <service.icon className="h-10 w-10 text-[#F39200] stroke-[1.5]" />
              </div>

              <h3 className="text-base font-bold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
