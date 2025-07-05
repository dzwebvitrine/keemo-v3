"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, TrendingUp, Zap } from "lucide-react"

export function WhyKeemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: MapPin,
      title: "Local Focus",
      description: "We know Philly inside and out. Your audience, your competition, your opportunities.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Real Results",
      description: "Measurable growth that impacts your bottom line. No vanity metrics, just real business.",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Creative Edge",
      description: "Content that stops the scroll and starts conversations. Stand out in the crowded feed.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="why-keemo" className="py-20 lg:py-32 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
            >
              Why Keemo?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-slate-700">
              We Get Philly. You Get Results.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Born and raised in Philadelphia, we understand what makes this city tick. That local expertise translates
              into social media strategies that actually work.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants} className="group">
                <div className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 rounded-3xl transition-all duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
