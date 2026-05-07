import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">Download the mobile app today</h2>
        <p className="text-base sm:text-lg text-slate-600 mb-10 text-balance">
          Get the app on iOS and Android. Start tracking expenses in WhatsApp within seconds. First month completely free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Link href="#pricing">
            <LiquidCtaButton>Download App Free</LiquidCtaButton>
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-green-700 hover:text-green-900 transition-colors"
          >
            <span>Available on App Store</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
