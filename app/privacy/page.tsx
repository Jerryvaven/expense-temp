import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Expense",
  description: "Our privacy policy.",
}

export default function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "At Expense, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
    },
    {
      title: "Information We Collect",
      content:
        "We may collect information about you in a variety of ways. The information we may collect on the Site includes: Personal Data, such as name, shipping address, email address, and telephone number; and Financial Data, such as financial account and payment card information.",
    },
    {
      title: "Use of Your Information",
      content:
        "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: Email you regarding updates to our platform, new features, or other relevant product information.",
    },
    {
      title: "Disclosure of Your Information",
      content:
        "We may share your information in the following situations: By Law or to Protect Rights. If we believe that the release of information is necessary to comply with the law, enforce our Site policies, or protect ours or others' rights, property, and safety.",
    },
    {
      title: "Security of Your Information",
      content:
        "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.",
    },
    {
      title: "Contact Us",
      content:
        "If you have questions or comments about this Privacy Policy, please contact us at: privacy@expense.com or call us at +1 (555) 123-4567.",
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
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
              This Privacy Policy was last updated on May 2026. We may update this Privacy Policy from time to time in
              order to reflect, for example, changes to our practices or for other operational, legal, or regulatory
              reasons. We will notify you of any changes by updating the "Last updated" date of this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
