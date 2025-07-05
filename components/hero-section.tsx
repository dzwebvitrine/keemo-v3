"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Animated Particles Background */}
      <ParticlesBackground />

      {/* Floating Geometric Shapes with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-20 h-20 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl rotate-12 animate-pulse" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-40 right-20 w-16 h-16 opacity-15">
        <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-600 rounded-full animate-bounce" />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute bottom-40 left-20 w-12 h-12 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl -rotate-12" />
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute top-60 right-10 w-8 h-8 opacity-25">
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-600 rounded-full" />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div style={{ opacity, scale }} className="container mx-auto text-center max-w-5xl z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Animated Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm border border-indigo-200/50 rounded-full text-indigo-700 text-sm font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Philadelphia's Premier Social Media Agency
            </motion.div>
          </motion.div>

          {/* Main Title with Staggered Animation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-slate-800 via-slate-700 to-indigo-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Philly Businesses:
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Dominate Your Social Scene
              </motion.span>
              <motion.span
                className="block text-slate-700"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                with Keemo
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with Typewriter Effect */}
          <motion.div variants={itemVariants}>
            <TypewriterText
              text="Tired of blending in? We help local businesses like yours cut through the noise, connect with your audience, and truly grow online."
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            />
          </motion.div>

          {/* CTA Button with Advanced Hover Effects */}
          <motion.div variants={itemVariants} className="pt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl group overflow-hidden"
                asChild
              >
                <a href="#contact">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Ready to Stand Out? Let's Talk Social!</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
    </section>
  )
}

// Particles Background Component
function ParticlesBackground() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      duration: number
      delay: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.1,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-indigo-300/30 to-purple-300/30 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large Floating Orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            background: `radial-gradient(circle, ${
              [
                "rgba(99, 102, 241, 0.1)",
                "rgba(139, 92, 246, 0.1)",
                "rgba(59, 130, 246, 0.1)",
                "rgba(16, 185, 129, 0.1)",
              ][i % 4]
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Typewriter Effect Component
function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <p className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block w-0.5 h-6 bg-indigo-600 ml-1"
      />
    </p>
  )
}
