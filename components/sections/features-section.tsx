"use client"

import { motion } from "framer-motion"
import { BarChart3, ArrowRight, MessageCircle, TrendingDown, Lock, Smartphone, Shield, Key, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const securityFeatures = [
  { name: "256-bit Encryption", icon: Lock },
  { name: "No Third Parties", icon: Eye },
  { name: "GDPR Compliant", icon: Shield },
  { name: "2FA Support", icon: Key },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-medium text-green-700 uppercase tracking-wider mb-3 sm:mb-4">Mobile App Features</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Everything on your phone
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto text-balance">
            Powerful AI features right in your pocket. No desktop needed, no extra apps to install.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Card 1 - Analytics (wider - 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageCircle className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">WhatsApp Native Integration</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">
                  No app to install. Chat with our AI agent directly in WhatsApp. Send photos, messages, or receipts and we handle the rest.
                </p>
                <div className="rounded-xl border border-green-200 bg-white/50 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-green-600" />
                        <span className="text-xs text-slate-600">Users</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-teal-500" />
                        <span className="text-xs text-slate-600">Revenue</span>
                      </motion.div>
                    </div>
                  </div>
                  {/* Animated metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Total Users", value: "12.4K", change: "+12%" },
                      { label: "Revenue", value: "$48.2K", change: "+8%" },
                      { label: "Conversion", value: "3.2%", change: "+2%" },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        className="bg-green-50 rounded-lg p-2.5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <p className="text-slate-600 text-xs mb-1">{metric.label}</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-slate-900 font-semibold text-sm">{metric.value}</span>
                          <motion.span
                            className="text-green-700 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {metric.change}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Animated bar chart */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 75, 50, 85, 60, 70, 45, 90, 65, 80].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-green-400 to-green-300 rounded-sm origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: h / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                        whileHover={{ scaleY: 1, transition: { duration: 0.2 } }}
                      />
                    ))}
                  </div>
                  {/* Animated line underneath */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mt-3"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Performance (narrower - 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Smartphone className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Mobile-First Design</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">Built from the ground up for mobile. Lightning-fast performance, even on 3G. Optimized battery and data usage.</p>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-3">
                    <motion.span
                      className="text-4xl font-display font-bold text-slate-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      &lt;2s
                    </motion.span>
                    <span className="text-slate-600 text-sm">load time</span>
                  </div>
                  <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-600 to-teal-500 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 - Smart Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <TrendingDown className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Spending Analytics</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">Real-time dashboards, charts, and insights into your spending patterns. Accessible offline too.</p>
                <div className="flex justify-center gap-2 mt-auto">
                  {[BarChart3, TrendingDown].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-green-200 shadow-lg"
                      initial={{ y: 0 }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.15,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 2,
                      }}
                      whileHover={{ scale: 1.1, y: -4 }}
                    >
                      <Icon className="w-5 h-5 text-green-600" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 - Security (wider - 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-green-200/50 bg-green-50/30 hover:border-green-300/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Lock className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Bank-Level Security</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">End-to-end encryption, two-factor authentication, and zero-knowledge architecture.</p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {securityFeatures.map((feature, i) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={feature.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="h-24 rounded-lg border border-green-200 bg-white hover:bg-green-50 flex flex-col items-center justify-center cursor-pointer group"
                        title={feature.name}
                      >
                        <Icon className="w-6 h-6 text-green-700 group-hover:text-green-900 transition-colors mb-2" />
                        <p className="text-xs text-center text-slate-600 group-hover:text-slate-900 transition-colors line-clamp-2 px-2">
                          {feature.name}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
                <motion.button
                  whileHover={{ x: 6 }}
                  className="mt-4 flex items-center gap-1.5 text-sm text-slate-600 hover:text-green-700 transition-colors"
                >
                  Learn about security <ArrowRight className="w-4 h-4" />
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
