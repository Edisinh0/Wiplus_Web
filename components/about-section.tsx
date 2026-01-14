import { Target, Eye, Heart, Map, Wifi, Users } from "lucide-react"

const missionItems = [
  {
    title: "Nuestra Misión",
    description: "Llevar conectividad de clase mundial a zonas donde nadie más llega, rompiendo la brecha digital en San José de Maipo.",
    icon: Target,
    bgColor: "bg-brand-orange/20",
    iconColor: "text-brand-orange",
  },
  {
    title: "Visión",
    description: "Ser el referente tecnológico del Cajón del Maipo, impulsando el desarrollo digital de nuestra comunidad.",
    icon: Eye,
    bgColor: "bg-brand-darkOrange/20",
    iconColor: "text-brand-darkOrange",
  },
  {
    title: "Nuestros Valores",
    description: "Transparencia, velocidad real sin letra chica y un compromiso inquebrantable con el soporte local.",
    icon: Heart,
    bgColor: "bg-brand-orange/20",
    iconColor: "text-brand-orange",
  },
  {
    title: "Comunidad",
    description: "Más que un servicio, somos vecinos conectando vecinos. Apoyamos el comercio y la educación local.",
    icon: Users,
    bgColor: "bg-brand-darkOrange/20",
    iconColor: "text-brand-darkOrange",
  },
  {
    title: "Tecnología",
    description: "Infraestructura 100% Fibra Óptica (FTTH) de última generación, preparada para el futuro.",
    icon: Wifi,
    bgColor: "bg-brand-orange/20",
    iconColor: "text-brand-orange",
  },
  {
    title: "Cobertura",
    description: "Expandiendo nuestra red constantemente para llegar a cada rincón del valle con la misma calidad.",
    icon: Map,
    bgColor: "bg-brand-darkOrange/20",
    iconColor: "text-brand-darkOrange",
  },
]

export function AboutSection() {
  return (
    <section id="mision" className="py-24 bg-neutral-950 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Nuestro ADN <span className="text-[#F39200]">Wiplus</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Conocemos la importancia de estar conectados. Por eso trabajamos día a día con un solo propósito.
        </p>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden pause-on-hover py-10">
        {/* Gradient Masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent" />

        {/* Scroll Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6">
          {/* Double the items to create seamless loop */}
          {[...missionItems, ...missionItems].map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] h-[300px] bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center group hover:bg-neutral-800 transition-all duration-300 hover:scale-105 hover:border-[#F39200]/30 shadow-2xl"
            >
              <div className={`p-4 rounded-2xl ${item.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
