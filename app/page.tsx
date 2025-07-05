"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyKeemoSection } from "@/components/why-keemo-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <WhyKeemoSection />
        <ServicesSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  )
}
