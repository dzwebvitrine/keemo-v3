"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react"

export function ProcessSection() {
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

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description:
        "We dive deep into your business, audience, and goals to understand what makes you unique in the Philly market.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategize",
      description:
        "Create a personalized social media plan that aligns with your business objectives and resonates with your local audience.",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Create & Launch",
      description:
        "Produce compelling content and launch targeted campaigns that capture attention and drive engagement.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Grow",
      description:
        "Monitor performance, optimize strategies, and scale your success with data-driven insights and continuous improvement.",
      gradient: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="process" className="py-20 lg:py-32 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
            >
              Simple Steps to Social Success
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven 4-step process takes you from social media confusion to Philadelphia market domination.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <span
                        className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-r ${step.gradient} p-8 lg:p-10 shadow-2xl`}
                    >
                      <step.icon className="w-full h-full text-white" />
                    </div>

                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 lg:h-16 bg-gradient-to-b from-slate-300 to-transparent mt-6 lg:mt-8" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
