"use client"

import { useState } from "react"
import { MapPin, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CoverageSection() {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,146,0,0.05),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Cobertura en el <span className="text-[#F39200]">Cajón del Maipo</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Expandimos constantemente nuestra red de Fibra Óptica para llegar a cada rincón de la comuna.
          </p>
        </div>

        {/* Map Interface Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F172A] max-w-5xl mx-auto h-[500px] md:h-[600px] group">

          {/* Google Maps Iframe with Dark Mode Filter */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106146.9696345678!2d-70.40795495869446!3d-33.64273298075774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7c046049239%3A0x6b4fb24c25f4fb0!2sSan%20Jos%C3%A9%20de%20Maipo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1705600000000!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) grayscale(20%)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />

          {/* Grid Overlay for "Digital Map" feel - kept for aesthetics */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

          {/* Map UI Elements */}
          <div className="absolute top-6 left-6 flex flex-col gap-3 pointer-events-none">
            <Button size="sm" variant="secondary" className="bg-black/80 backdrop-blur text-white border border-white/10 shadow-lg pointer-events-auto">
              <MapPin className="mr-2 h-4 w-4 text-[#F39200]" /> San José de Maipo
            </Button>
          </div>

          <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur rounded-xl p-4 border border-white/10 text-xs text-neutral-400 max-w-[250px] pointer-events-none">
            <p className="mb-2 font-medium text-white">Estado de la Red</p>
            <div className="flex bg-neutral-800 h-1.5 w-full rounded-full overflow-hidden mb-2">
              <div className="bg-[#F39200] w-full h-full animate-pulse" />
            </div>
            <p>Conexión estable en todo el valle.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="https://wa.me/56985885432?text=Hola! Mi sector no aparece en el mapa, me gustaría consultar factibilidad." target="_blank">
            <Button variant="link" className="text-[#F39200] hover:text-white text-lg">
              ¿No ves tu sector? Contáctanos para estudio de factibilidad &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
