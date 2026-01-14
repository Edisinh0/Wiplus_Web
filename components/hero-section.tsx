"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const slides = [
  {
    image: "/hero-speed.png",
    badge: "Nueva Zona de Fibra Óptica 10G Ready",
    titlePrimary: "El Internet que",
    titleGradient: "tu vida digital merece",
    description: "Conecta tu hogar y empresa con la fibra óptica más estable de San José de Maipo. Sin letra chica, sin cortes.",
    cta: "Ver Factibilidad",
  },
  {
    image: "/hero-entertainment.png",
    badge: "Streaming & Gaming Pro",
    titlePrimary: "Vive el mejor",
    titleGradient: "entretenimiento en 4K",
    description: "Disfruta de tus series, películas y juegos favoritos con la menor latencia y máxima estabilidad.",
    cta: "Ver Planes TV",
  },
  {
    image: "/hero-bg.png",
    badge: "Soluciones para Empresas",
    titlePrimary: "Potencia tu",
    titleGradient: "negocio al siguiente nivel",
    description: "Internet dedicado y simétrico con soporte técnico VIP 24/7 para garantizar la continuidad de tu empresa.",
    cta: "Cotizar Ahora",
  },
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [emblaApi, onSelect])

  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Embla Viewport */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full min-w-0">
              {/* Slide Background */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.titleGradient}
                  fill
                  className="object-cover opacity-60 mix-blend-screen transition-transform duration-1000"
                  priority={index === 0}
                />
              </div>
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(243,146,0,0.15),rgba(255,255,255,0))] z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Static Overlays across all slides */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-10 pointer-events-none" />

      {/* Content Container (Animated relative to selectedIndex) */}
      <div className="container mx-auto px-4 text-center relative z-20 pt-10">
        <div className="transition-all duration-700 transform">
          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full border border-[#F39200]/30 bg-[#F39200]/10 px-4 py-1.5 text-sm font-medium text-[#F39200] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-[#F39200] mr-2 animate-pulse" />
            {slides[selectedIndex].badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-balance leading-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            {slides[selectedIndex].titlePrimary} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39200] via-[#E65100] to-[#F39200] drop-shadow-lg">
              {slides[selectedIndex].titleGradient}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            {slides[selectedIndex].description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            {/* Search Input Mockup */}
            <div className="max-w-lg w-full bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col md:flex-row gap-2 shadow-2xl relative group hover:border-[#F39200]/50 transition-all duration-300">
              <div className="flex-1 flex items-center px-3 h-12">
                <MapPin className="h-5 w-5 text-neutral-400 mr-3 group-hover:text-[#F39200] transition-colors" />
                <input
                  type="text"
                  placeholder="Ingresa tu dirección..."
                  className="bg-transparent border-none text-white w-full h-full focus:ring-0 focus:outline-none placeholder:text-neutral-400 text-sm md:text-base outline-none"
                />
              </div>
              <Link
                href={`https://wa.me/56985885432?text=Hola! Estoy interesado en: ${slides[selectedIndex].cta} - ${slides[selectedIndex].titleGradient}`}
                target="_blank"
                className="w-full md:w-auto"
              >
                <Button className="rounded-xl h-12 w-full md:w-auto px-8 bg-[#F39200] hover:bg-[#E65100] text-white shadow-[0_4px_14px_0_rgba(243,146,0,0.3)] transition-all animate-shimmer hover-glow active:scale-95">
                  {slides[selectedIndex].cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-neutral-400 text-sm font-medium animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#F39200]" />
            Instalación en 24hrs
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#F39200]" />
            Soporte Local Real
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#F39200]" />
            Router Wi-Fi 6 Incluido
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-[#F39200] w-8" : "bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hidden md:flex transition-all hover:scale-110 active:scale-90"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hidden md:flex transition-all hover:scale-110 active:scale-90"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
