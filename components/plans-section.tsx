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
    color: "from-[#E65100] to-[#1A1A1B]",
  },
  {
    name: "Ultra Speed",
    speed: "800",
    price: "$44.890",
    features: ["130 Canales de TV", "Wifi 6 Extreme", "Soporte VIP Personalizado", "IP Fija Opcional"],
    popular: false,
    color: "from-[#F39200] to-[#1A1A1B]",
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
    <section id="planes" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* AI Generated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plans-bg.png"
          alt="Fiber Optic Mountain Background"
          fill
          className="object-cover opacity-30 mix-blend-screen"
        />
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-[#0a0a0a]/40 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-lg">
            Planes Diseñados Para Ti
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto drop-shadow-md">
            Velocidad simétrica real. Sin contratos de permanencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible bg-background group ${plan.popular ? "ring-2 ring-[#F39200] ring-offset-2 ring-offset-background z-10 scale-105 md:scale-110" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-[#F39200] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Más Vendido
                  </div>
                </div>
              )}

              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${plan.color}`} />

              <CardHeader className="text-center pt-8 pb-4">
                <h3 className="text-lg font-semibold text-muted-foreground tracking-wide uppercase text-[11px]">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline justify-center text-foreground">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.speed}</span>
                  <span className="ml-1 text-xl font-medium text-muted-foreground">Megas</span>
                </div>
              </CardHeader>

              <CardContent className="text-center flex-1">
                <div className="relative p-6 bg-muted/30 rounded-2xl mb-6">
                  <p className="flex items-start justify-center text-foreground">
                    <span className="text-xl font-medium mt-1 mr-1">$</span>
                    <span className="text-4xl font-bold tracking-tight">{plan.price.replace('$', '')}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">mensual fijo</p>
                </div>

                <ul className="space-y-4 text-left px-2">
                  {plan.features.map((feature, featureIndex) => {
                    const Icon = featureIcons[feature] || Check
                    return (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="mt-0.5 p-1 rounded-full bg-[#F39200]/10 text-[#F39200]">
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
                    className={`w-full h-12 rounded-xl text-base font-medium shadow-none hover:shadow-lg transition-all animate-shimmer hover-glow ${plan.popular
                      ? "bg-[#F39200] hover:bg-[#E65100] text-white"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200"
                      }`}
                  >
                    Contratar
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 max-w-4xl mx-auto group hover:border-[#F39200]/50 transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-xl font-bold mb-2 text-white">¿Necesitas Internet para tu Empresa?</h4>
              <p className="text-neutral-400">Planes dedicados, SLA garantizado y soporte VIP.</p>
            </div>
            <Link
              href="https://wa.me/56985885432?text=Hola! Necesito información sobre los Planes para Empresas."
              target="_blank"
            >
              <Button variant="outline" className="border-[#F39200] text-[#F39200] hover:bg-[#F39200] hover:text-white px-8 rounded-full h-12 shadow-[0_0_15px_rgba(243,146,0,0.2)]">
                Cotizar Empresas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
