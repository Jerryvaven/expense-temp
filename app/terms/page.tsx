import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Expense",
  description: "Our terms of service.",
}

export default function TermsPage() {
  const sections = [
    {
      title: "Agreement to Terms",
      content:
        "These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Expense. By accessing this website, you agree that you have read, understood, and agree to be bound by all of these Terms and Conditions.",
    },
    {
      title: "Intellectual Property Rights",
      content:
        "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by Expense, protected by copyright laws.",
    },
    {
      title: "User Representations",
      content:
        "By using this Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; and (3) you have the legal capacity and agree to comply with these Terms and Conditions.",
    },
    {
      title: "User Prohibited Behavior",
      content:
        "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us. Prohibited behavior includes: Harassing or causing distress or inconvenience to any person; Disrupting the normal flow of dialogue or interactions.",
    },
    {
      title: "Fee and Payment",
      content:
        "We accept the following forms of payment: Visa, Mastercard, American Express, and other payment methods as listed on the Site. You agree to pay all charges that you incur. We reserve the right to change our fees at any time.",
    },
    {
      title: "Limitation of Liability",
      content:
        "In no event shall Expense be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special, or consequential loss, or for any business losses, loss of revenue, income, profits or anticipated savings.",
    },
    {
      title: "Modifications",
      content:
        "We may revise these Terms and Conditions for our Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these Terms and Conditions.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms and Conditions and any separate agreements we provide to you as a part of these Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Expense is located.",
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-sm text-slate-600 mb-12">Last updated: May 2026</p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="pb-8 border-b border-green-200/50 last:border-0">
                <h2 className="font-display text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl border border-green-200/50 bg-green-50/30">
            <p className="text-sm text-slate-600">
              If you have any questions about these Terms and Conditions, please contact us at: support@expense.com or call
              us at +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
