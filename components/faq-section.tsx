"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const faqs = [
    {
      question: "Why should a Philadelphia business choose Keemo?",
      answer:
        "We're not just experts in social media; we're experts in Philadelphia. Our local insights mean your strategy will genuinely resonate with your target audience right here in the city.",
    },
    {
      question: "My business is new/small. Can you help me?",
      answer:
        "Absolutely! We love helping businesses grow from the ground up. Our services are scalable and designed to make a big impact, no matter your size.",
    },
    {
      question: "How long until I see results?",
      answer:
        "While some engagement boosts happen quickly, significant growth takes consistent effort. We focus on building sustainable, long-term success for your brand online, and we'll keep you updated every step of the way.",
    },
    {
      question: "Do you handle everything, or do I need to provide content?",
      answer:
        "We handle the full spectrum of content creation – photography, filmmaking, graphic design, and writing. Your input on your brand vision is invaluable, but we'll do the heavy lifting!",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent"
            >
              Quick Answers for Philly Businesses
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600"
            >
              Everything you need to know about working with Keemo
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
