import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  {
    number: "1",
    title: "Fibra Óptica de Calidad",
    description:
      "Diseño e instalación de redes de fibra óptica robustas con los más altos estándares de calidad y profesionalismo.",
  },
  {
    number: "2",
    title: "Operación Garantizada",
    description:
      "Soporte técnico especializado y preventivo para usuarios y sistemas, asegurando la fluidez de tu conexión.",
  },
  {
    number: "3",
    title: "Alta Disponibilidad",
    description:
      "Infraestructura de red diseñada para garantizar máxima estabilidad y continuidad del servicio constante.",
  },
  {
    number: "4",
    title: "Cobertura Local",
    description:
      "Llegamos a donde nadie más llega, conectando familias en zonas de difícil acceso del Cajón del Maipo.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">¿Por qué elegir Wiplus?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border hover:border-[#F39200]/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-foreground">Beneficio {benefit.number}</CardTitle>
                <div className="w-12 h-1 bg-[#F39200] mx-auto mt-2" />
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
