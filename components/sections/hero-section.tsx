"use client"

import Link from "next/link"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge - customize your announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8">
          <Sparkles className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700">Mobile-First AI Expense Tracking</span>
        </div>

        {/* Headline - customize your value proposition */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-slate-900 block">Your AI expense</span>
          <span className="text-slate-900 block">tracker on WhatsApp</span>
          <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
            Always in your pocket.
          </span>
        </h1>

        {/* Subheadline - describe your product */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          The mobile app meets WhatsApp. Snap photos, send messages, or share receipts. Our AI agent instantly categorizes and tracks every expense. No separate app switching needed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Link href="#pricing">
            <LiquidCtaButton>Download App Now</LiquidCtaButton>
          </Link>
          <Link
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-700 hover:text-green-900 transition-colors"
          >
            <span>Watch demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[4]"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-white hover:-translate-y-1 transition object-cover z-[5]"
              />
            </div>
            <div className="h-8 w-px bg-green-200" />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#16a34a"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
                <span className="text-slate-600 font-medium ml-1 text-sm">5.0</span>
              </div>
              <p className="text-sm text-slate-600">
                Used by <span className="text-slate-800 font-medium">50,000+</span> users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
