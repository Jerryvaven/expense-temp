"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    description: "Perfect for personal expense tracking",
    price: "Free",
    period: "forever",
    features: ["WhatsApp integration", "100 expense entries/month", "Basic categorization", "Monthly reports", "Email support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Premium",
    description: "For serious budget managers and small businesses",
    price: "$9.99",
    period: "/month",
    features: [
      "Unlimited expense entries",
      "AI-powered categorization (99.8% accuracy)",
      "Advanced spending insights",
      "Receipt scanning & OCR",
      "Budget alerts & notifications",
      "Priority WhatsApp support",
      "Export to CSV/PDF",
      "Multi-currency support",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    description: "For teams and business accounting",
    price: "$29.99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Team collaboration (5 members)",
      "Shared expense tracking",
      "Advanced reporting & analytics",
      "Tax category suggestions",
      "Bank account sync",
      "Audit logs & permissions",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-medium text-green-700 uppercase tracking-wider mb-3 sm:mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4"
          >
            Affordable expense tracking for everyone
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto text-balance"
          >
            Start free and upgrade when you need more. No credit card required.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col h-full ${
                plan.highlighted ? "bg-green-50 border-green-300" : "bg-white border-green-200/50"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`font-heading text-xl font-semibold mb-2 ${
                    plan.highlighted ? "text-slate-900" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-slate-600" : "text-slate-600"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`font-display text-4xl font-bold ${plan.highlighted ? "text-slate-900" : "text-slate-900"}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-slate-600" : "text-slate-600"}`}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-green-700" : "text-green-600"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-slate-700" : "text-slate-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#"
                className={`block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-green-700 text-white hover:bg-green-800"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
