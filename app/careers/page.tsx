import Link from "next/link"
import { ArrowLeft, MapPin, Briefcase } from "lucide-react"

export const metadata = {
  title: "Careers - ExpenseAI",
  description: "Join the ExpenseAI team and revolutionize personal finance management.",
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      title: "WhatsApp Integration Specialist",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager - Finance AI",
      department: "Product",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Senior Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Financial Wellness Content Writer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "QA Engineer",
      department: "Quality Assurance",
      location: "San Francisco, CA",
      type: "Full-time",
    },
  ]

  const benefits = [
    { title: "Competitive Salary", description: "Top-tier compensation in the industry" },
    { title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { title: "Remote Friendly", description: "Work from anywhere with flexible schedules" },
    { title: "Growth Opportunities", description: "Continuous learning and professional development" },
    { title: "Equity", description: "Own a piece of what you build" },
    { title: "Unlimited PTO", description: "Take time off when you need it" },
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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-slate-600 mb-12">
            We&apos;re looking for talented people to help us build the future of development tools.
          </p>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Why Join Expense?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl border border-green-200/50 bg-green-50/30">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((job, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-green-200/50 bg-white hover:border-green-300/50 hover:bg-green-50/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 mb-3">
                        {job.type}
                      </span>
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                        {job.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="text-green-600 font-medium group-hover:text-green-700 transition-colors">
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-green-200/50 bg-green-50/30 text-center">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Don&apos;t see your role?</h3>
            <p className="text-slate-600 mb-6">Send us your resume and tell us how you&apos;d like to contribute.</p>
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
