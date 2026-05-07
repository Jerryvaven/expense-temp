"use client"

import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "support@expenseai.com",
      action: "Send us an email",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Support",
      description: "Chat directly on WhatsApp",
      action: "Message us",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (555) 123-4567",
      action: "Call us",
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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-12">We&apos;d love to hear from you. Send us a message!</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors text-sm">
                    {method.action} →
                  </button>
                </div>
              )
            })}
          </div>

          <div className="p-8 rounded-2xl border border-green-200/50 bg-white">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-300">
                <p className="text-green-700 font-medium">Thank you for your message! We&apos;ll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-200/50 bg-green-50/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-green-200/50 bg-green-50/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-green-200/50 bg-green-50/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
