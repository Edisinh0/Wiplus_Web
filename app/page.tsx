import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PlansSection } from "@/components/plans-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutSection } from "@/components/about-section"
import { CoverageSection } from "@/components/coverage-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Header />
      <HeroSection />
      <div data-reveal><PlansSection /></div>
      <div data-reveal><ServicesSection /></div>
      <div data-reveal><BenefitsSection /></div>
      <div data-reveal><AboutSection /></div>
      <div data-reveal><CoverageSection /></div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
