import Link from "next/link"
import { ArrowLeft, Zap, Target, Shield } from "lucide-react"

export const metadata = {
  title: "About ExpenseAI - AI Expense Tracking",
  description: "Learn about ExpenseAI mission to revolutionize expense tracking through AI and WhatsApp.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Simplicity",
      description: "Financial control shouldn't require complicated apps or tedious data entry.",
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "99.8% AI accuracy ensures every expense is properly categorized and tracked.",
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Your financial data is encrypted end-to-end and never shared with third parties.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-40 p-4 bg-white/80 border-b border-green-200/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6">
          <Link href="/" className="font-display text-lg font-semibold text-slate-900">
            ExpenseAI
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">About ExpenseAI</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We&apos;re revolutionizing how people track expenses through AI-powered automation via WhatsApp. Our mission is to make financial awareness accessible, effortless, and actionable for everyone.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="p-6 rounded-2xl border border-green-200/50 bg-green-50/30">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16 p-8 rounded-2xl border border-green-200/50 bg-green-50/30">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              ExpenseAI was born from a simple observation: billions of people use WhatsApp daily, yet no app had truly integrated intelligent expense tracking with it. Our team of fintech and AI experts decided to change that.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we help over 50,000 users take control of their finances with a simple snap, message, or receipt share. We&apos;re committed to building the most intuitive, accurate, and privacy-first expense tracking experience available.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[
              { label: "Active Users", value: "50K+" },
              { label: "Expenses Tracked", value: "2.5M" },
              { label: "AI Accuracy", value: "99.8%" },
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl border border-green-200/50 bg-white text-center">
                <p className="font-display text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
