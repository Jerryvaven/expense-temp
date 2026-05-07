import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Security - Expense",
  description: "Learn about our security practices and commitments.",
}

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "We implement multi-layer security with firewalls, intrusion detection, and 24/7 monitoring.",
    },
    {
      icon: Eye,
      title: "Data Privacy",
      description: "Your data is never shared with third parties. We maintain strict privacy controls and access policies.",
    },
    {
      icon: AlertCircle,
      title: "Regular Audits",
      description: "We conduct regular security audits and penetration testing to identify and fix vulnerabilities.",
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Service Organization Control" },
    { name: "GDPR Compliant", description: "General Data Protection Regulation" },
    { name: "CCPA Compliant", description: "California Consumer Privacy Act" },
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
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Security at Expense</h1>
          <p className="text-lg text-slate-600 mb-12">
            Your security is our top priority. We implement industry-leading security practices to protect your data.
          </p>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Our Security Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-6 rounded-2xl border border-green-200/50 bg-green-50/30">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Certifications & Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 rounded-2xl border border-green-200/50 bg-white text-center">
                  <p className="font-display text-lg font-bold text-slate-900 mb-2">{cert.name}</p>
                  <p className="text-xs text-slate-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl border border-green-200/50 bg-green-50/30">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Data Storage</h3>
              <p className="text-slate-600 mb-4">
                Your data is stored in secure, geographically distributed data centers with automatic backups and
                disaster recovery protocols in place. We use the latest encryption standards to protect your information.
              </p>
              <p className="text-sm text-slate-600">
                All backups are encrypted and stored separately from production systems.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-green-200/50 bg-green-50/30">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Access Control</h3>
              <p className="text-slate-600 mb-4">
                We implement strict access controls with role-based permissions. Only authorized personnel have access
                to your data, and all access is logged and monitored.
              </p>
              <p className="text-sm text-slate-600">
                Multi-factor authentication is required for all administrative access.
              </p>
            </div>
          </div>

          {/* Incident Response */}
          <div className="p-8 rounded-2xl border border-green-200/50 bg-white mb-16">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Incident Response</h3>
            <p className="text-slate-600 mb-6">
              We have a comprehensive incident response plan in place. In the unlikely event of a security incident, we
              will:
            </p>
            <ul className="space-y-3">
              {[
                "Immediately investigate and contain the incident",
                "Assess the scope and impact of the breach",
                "Notify affected users within 24 hours",
                "Provide guidance on protective measures",
                "Conduct a full post-incident review",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Have a Security Question?</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
