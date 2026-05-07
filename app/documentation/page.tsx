import Link from "next/link"
import { ArrowLeft, Code2, BookOpen, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Documentation - Expense",
  description: "Complete guide to using Expense.",
}

export default function DocumentationPage() {
  const sections = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn how to set up your account and create your first project.",
      items: ["Installation", "Configuration", "First Steps", "Account Setup"],
    },
    {
      icon: Code2,
      title: "API Reference",
      description: "Comprehensive API documentation for developers.",
      items: ["Authentication", "Endpoints", "Rate Limiting", "Error Handling"],
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Frequently asked questions and common solutions.",
      items: ["Billing", "Security", "Features", "Troubleshooting"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-40 p-4 bg-white/80 border-b border-green-200/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6">
          <Link href="/" className="font-display text-lg font-semibold text-slate-900">
            Expense
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
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Documentation</h1>
          <p className="text-lg text-slate-600 mb-12">Everything you need to know about Expense.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <p className="text-slate-600 text-sm mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        <span className="text-sm text-slate-700 hover:text-green-700 cursor-pointer transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl border border-green-200/50 bg-white">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Need Help?</h3>
            <p className="text-slate-600 mb-6">
              Can&apos;t find what you&apos;re looking for? Check out our FAQ or contact our support team.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-full border border-green-200 text-green-700 font-medium hover:bg-green-50 transition-colors"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
