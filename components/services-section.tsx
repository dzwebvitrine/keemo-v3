"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { KeyIcon as Strategy, Camera, Target, Users } from "lucide-react"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      icon: Strategy,
      title: "Strategic Social Media Planning",
      description:
        "Custom roadmap with market research and clear strategy to attract your ideal clients and outshine the competition.",
      features: ["Market Analysis", "Competitor Research", "Content Calendar", "Growth Strategy"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: Camera,
      title: "Engaging Content Creation",
      description:
        "Professional photos, viral-ready videos, stunning graphics, and compelling storytelling that captivates and builds brand love.",
      features: ["Photography & Filmmaking", "Viral-Ready Reels", "Graphic Design", "Brand Storytelling"],
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50",
    },
    {
      icon: Target,
      title: "Targeted Social Media Ads",
      description:
        "Geo-targeted ad campaigns specifically designed for Philadelphia businesses with maximum reach and measurable ROI.",
      features: ["Local Targeting", "A/B Testing", "ROI Optimization", "Performance Analytics"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Users,
      title: "Community Building & Engagement",
      description:
        "Build a thriving online community, foster loyalty, and transform followers into dedicated customers and brand advocates.",
      features: ["Community Management", "Engagement Strategy", "Customer Relations", "Brand Advocacy"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
  ]

  return (
    <section id="services" className="py-14 md:py-20 lg:py-32 px-2 sm:px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 md:space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 md:space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
            >
              Your Social Media Growth Kit
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to dominate social media in Philadelphia. From strategy to execution, we've got your
              complete growth covered.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants} className="group">
                <div
                  className={`relative p-5 sm:p-8 lg:p-10 bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/80 h-full`}
                >
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-slate-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-xs sm:text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 rounded-3xl transition-all duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
