import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Changelog - Expense",
  description: "See what's new and improved in Expense.",
}

export default function ChangelogPage() {
  const updates = [
    {
      version: "v2.0.0",
      date: "May 2026",
      changes: [
        "Launched AI-powered analytics dashboard",
        "Added real-time collaboration features",
        "Improved performance by 40%",
        "New keyboard shortcuts for power users",
      ],
    },
    {
      version: "v1.9.0",
      date: "April 2026",
      changes: [
        "Integrated 50+ new apps",
        "Enhanced mobile experience",
        "Fixed critical security issues",
        "Updated documentation",
      ],
    },
    {
      version: "v1.8.0",
      date: "March 2026",
      changes: [
        "Custom integration support",
        "Advanced filtering options",
        "Better error messages",
        "API improvements",
      ],
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
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Changelog</h1>
          <p className="text-lg text-slate-600 mb-12">Stay updated with the latest features and improvements.</p>

          <div className="space-y-12">
            {updates.map((update, index) => (
              <div key={index} className="pb-12 border-b border-green-200/50 last:border-0">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900">{update.version}</h2>
                    <p className="text-sm text-green-700 font-medium mt-1">{update.date}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {update.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
