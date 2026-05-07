import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Documentation", href: "/documentation" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-4 sm:px-6 py-12 sm:py-16 border-t border-green-200/50 bg-green-50/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="font-display text-lg sm:text-xl font-semibold text-slate-900">
              ExpenseAI
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xs">
              AI-powered expense tracking via WhatsApp.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-green-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-green-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-green-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-green-200/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-600">© {new Date().getFullYear()} ExpenseAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-600 hover:text-green-700 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-slate-600 hover:text-green-700 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link href="#" className="text-slate-600 hover:text-green-700 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
