import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Wifi } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-end">
              <span className="text-3xl font-bold text-white">Wi</span>
              <span className="text-3xl font-bold text-[#F39200]">plus</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Conectando a San José de Maipo con el mundo a través de la mejor infraestructura de Fibra Óptica. Velocidad, estabilidad y compromiso local.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-[#F39200] hover:text-white transition-colors text-neutral-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-[#F39200] hover:text-white transition-colors text-neutral-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-[#F39200] hover:text-white transition-colors text-neutral-400">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-[#F39200] w-max pb-2">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400 hover:text-[#F39200] transition-colors group">
                <Phone className="h-5 w-5 text-[#F39200] mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+569 85885432</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 hover:text-[#F39200] transition-colors group">
                <Mail className="h-5 w-5 text-[#F39200] mt-0.5 group-hover:scale-110 transition-transform" />
                <Link href="mailto:ventas@wiplus.cl" className="text-sm">
                  ventas@wiplus.cl
                </Link>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 hover:text-[#F39200] transition-colors group">
                <MapPin className="h-5 w-5 text-[#F39200] mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Santuario Poniente 19237, San José de Maipo</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-[#F39200] w-max pb-2">Horario</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="h-5 w-5 text-[#F39200] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Lunes a Viernes</p>
                  <p className="text-sm">9:00 - 18:00 hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Wifi className="h-5 w-5 text-[#F39200] mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-white">Soporte Técnico</p>
                  <p className="text-sm">24/7 Monitoreo Activo</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-[#F39200] w-max pb-2">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://acceso.wipluschile.cl/cliente/login" target="_blank" className="flex items-center gap-2 text-neutral-400 hover:text-[#F39200] transition-all hover:translate-x-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F39200]"></span>
                  Sucursal Virtual
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-neutral-400 hover:text-[#F39200] transition-all hover:translate-x-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F39200]"></span>
                  Test de Velocidad
                </Link>
              </li>
              <li>
                <Link href="#planes" className="flex items-center gap-2 text-neutral-400 hover:text-[#F39200] transition-all hover:translate-x-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F39200]"></span>
                  Ver Planes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Wiplus SpA. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
