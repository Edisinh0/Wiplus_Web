import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Wifi, Tv, Headphones, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const plans = [
  {
    name: "Gamer / Home",
    speed: "200",
    price: "$31.890",
    features: ["130 Canales de TV", "Wifi Dual Band", "Soporte Prioritario", "IP Dinámica Pública"],
    popular: false,
    color: "from-[#F39200] to-[#E65100]",
  },
  {
    name: "Streaming Pro",
    speed: "400",
    price: "$38.890",
    features: ["130 Canales de TV", "Wifi 6 (Mayor Alcance)", "Soporte Prioritario", "Ideal 5+ Dispositivos"],
    popular: true,
    color: "from-[#F39200] via-[#E65100] to-[#F39200]",
  },
  {
    name: "Power User",
    speed: "600",
    price: "$40.890",
    features: ["130 Canales de TV", "Wifi 6 Mesh Ready", "Soporte 24/7", "Baja Latencia Gaming"],
    popular: false,
    color: "from-[#E65100] to-[#F39200]",
  },
  {
    name: "Ultra Speed",
    speed: "800",
    price: "$44.890",
    features: ["130 Canales de TV", "Wifi 6 Extreme", "Soporte VIP Personalizado", "IP Fija Opcional"],
    popular: false,
    color: "from-[#F39200] to-[#E65100]",
  },
]

const featureIcons: Record<string, React.ElementType> = {
  "130 Canales de TV": Tv,
  "Wifi Dual Band": Wifi,
  "Wifi 6 (Mayor Alcance)": Zap,
  "Wifi 6 Mesh Ready": Shield,
  "Soporte Prioritario": Headphones,
}

export function PlansSection() {
  return (
    <section id="planes" className="py-32 bg-[#1C2333] relative overflow-hidden">
      {/* Background image con blend mode ajustado al nuevo fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plans-bg.png"
          alt="Fiber Optic Mountain Background"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2333] via-transparent to-[#1C2333] z-10" />
        <div className="absolute inset-0 bg-[#1C2333]/30 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-20">
          <p className="text-[#F39200] text-sm font-semibold uppercase tracking-widest mb-3" data-reveal>
            Elige tu velocidad
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-lg"
            data-reveal
            data-reveal-delay="1"
          >
            Planes Diseñados Para Ti
          </h2>
          <p
            className="text-xl text-neutral-300 max-w-2xl mx-auto drop-shadow-md"
            data-reveal
            data-reveal-delay="2"
          >
            Velocidad simétrica real. Sin contratos de permanencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} data-reveal data-reveal-delay={String(index + 1)}>
            <Card
              className={`relative flex flex-col border-0 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 overflow-visible bg-[#0d0f1a] h-full group ${
                plan.popular
                  ? "ring-2 ring-[#F39200] ring-offset-2 ring-offset-[#1C2333] z-10 scale-105 md:scale-110"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-[#F39200] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Más Vendido
                  </div>
                </div>
              )}

              {/* Borde superior con gradiente de color */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${plan.color}`} />

              <CardHeader className="text-center pt-8 pb-4">
                <h3 className="text-[11px] font-semibold text-neutral-400 tracking-widest uppercase">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-white">{plan.speed}</span>
                  <span className="ml-1 text-xl font-medium text-neutral-500">Megas</span>
                </div>
              </CardHeader>

              <CardContent className="text-center flex-1">
                {/* Caja de precio */}
                <div className="relative p-6 bg-white/5 rounded-2xl mb-6 border border-white/8">
                  <p className="flex items-start justify-center text-white">
                    <span className="text-xl font-medium mt-1 mr-1 text-neutral-400">$</span>
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price.replace("$", "")}
                    </span>
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">mensual fijo</p>
                </div>

                {/* Lista de características */}
                <ul className="space-y-4 text-left px-2">
                  {plan.features.map((feature, featureIndex) => {
                    const Icon = featureIcons[feature] || Check
                    return (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300"
                      >
                        <div className="mt-0.5 p-1 rounded-full bg-[#F39200]/15 text-[#F39200] shrink-0">
                          <Icon className="h-3 w-3" />
                        </div>
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </CardContent>

              <CardFooter className="pt-0 pb-8 px-6">
                <Link
                  href={`https://wa.me/56985885432?text=Hola! Me gustaría contratar el plan ${plan.name} de ${plan.speed} Megas.`}
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    className={`w-full h-12 rounded-xl text-base font-medium transition-all animate-shimmer hover-glow ${
                      plan.popular
                        ? "bg-[#F39200] hover:bg-[#E65100] text-white shadow-[0_0_20px_rgba(243,146,0,0.3)]"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15 shadow-none"
                    }`}
                  >
                    Contratar
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            </div>
          ))}
        </div>

        {/* Sección Empresas */}
        <div
          data-reveal
          className="mt-20 text-center bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 max-w-4xl mx-auto group hover:border-[#F39200]/50 transition-all"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-bold mb-2 text-white">¿Necesitas Internet para tu Empresa?</h4>
              <p className="text-neutral-400">Planes dedicados, SLA garantizado y soporte VIP.</p>
            </div>
            <Link
              href="https://wa.me/56985885432?text=Hola! Necesito información sobre los Planes para Empresas."
              target="_blank"
            >
              <Button
                variant="outline"
                className="border-[#F39200] text-[#F39200] hover:bg-[#F39200] hover:text-white px-8 rounded-full h-12 shadow-[0_0_15px_rgba(243,146,0,0.2)]"
              >
                Cotizar Empresas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
