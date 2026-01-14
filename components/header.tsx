"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-[#0a0a0a]/70 backdrop-blur-lg shadow-sm py-2 border-b border-white/5"
        : "bg-[#0a0a0a]/40 backdrop-blur-md py-4"
        }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
          <div className="relative h-12 w-auto">
            <Image
              src="/logo.png"
              alt="Wiplus Logo"
              width={180}
              height={60}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link href="#inicio" className="text-sm font-medium text-white/90 hover:text-[#F39200] transition-colors">
            Inicio
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#F39200] transition-colors focus:outline-none">
              Nuestros Servicios
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#0f0f0f] border-white/10 text-white shadow-2xl backdrop-blur-xl">
              <DropdownMenuItem className="focus:bg-[#F39200]/20 focus:text-[#F39200] cursor-pointer">
                <Link href="#planes" className="w-full font-medium">Planes de Internet</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-[#F39200]/20 focus:text-[#F39200] cursor-pointer">
                <Link href="#servicios" className="w-full font-medium">Servicios Empresariales</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#mision" className="text-sm font-medium text-white/90 hover:text-[#F39200] transition-colors">
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-white/90 hover:text-[#F39200] transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://acceso.wipluschile.cl/cliente/webpay" target="_blank">
            <Button variant="outline" className="border-[#F39200] text-[#F39200] hover:bg-[#F39200] hover:text-white rounded-full px-6 transition-all">
              Paga tu cuenta
            </Button>
          </Link>
          <Link href="https://acceso.wipluschile.cl/cliente/login" target="_blank">
            <Button className="bg-[#F39200] hover:bg-[#E65100] text-white rounded-full px-6 shadow-[0_0_15px_rgba(243,146,0,0.2)] hover:shadow-[0_0_25px_rgba(243,146,0,0.4)] transition-all animate-shimmer hover-glow">
              Área de Clientes
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 md:hidden bg-[#0a0a0a] shadow-2xl absolute w-full top-20 left-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container mx-auto flex flex-col gap-6 p-6">
            <Link href="#inicio" className="text-lg font-medium text-white/90" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link href="#planes" className="text-lg font-medium text-white/90" onClick={() => setIsOpen(false)}>
              Planes
            </Link>
            <Link href="#servicios" className="text-lg font-medium text-white/90" onClick={() => setIsOpen(false)}>
              Servicios
            </Link>
            <Link href="#mision" className="text-lg font-medium text-white/90" onClick={() => setIsOpen(false)}>
              Nosotros
            </Link>
            <Link href="#contacto" className="text-lg font-medium text-[#F39200]" onClick={() => setIsOpen(false)}>
              Contáctanos
            </Link>
            <Link href="https://acceso.wipluschile.cl/cliente/webpay" target="_blank" className="w-full">
              <Button variant="outline" className="border-[#F39200] text-[#F39200] hover:bg-[#F39200] hover:text-white rounded-full w-full py-6">
                Paga tu cuenta
              </Button>
            </Link>
            <Link href="https://acceso.wipluschile.cl/cliente/login" target="_blank" className="w-full">
              <Button className="bg-[#F39200] hover:bg-[#E65100] text-white rounded-full w-full py-6 animate-shimmer hover-glow">
                Área de Clientes
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
