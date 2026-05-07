"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MobileAppSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  // Phone stays normal until 50% viewport, then grows large, then shrinks as it leaves
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [1, 2, 2, 0.4])
  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150])
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="px-4 sm:px-6 py-32 sm:py-48 bg-gradient-to-b from-green-50/50 to-white min-h-[150vh]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs sm:text-sm font-medium text-green-700 uppercase tracking-wider mb-3 sm:mb-4">The Mobile App</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Expense tracking, reimagined for mobile
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto text-balance">
              No desktop required. Everything happens on your phone, where you need it most.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12 sm:mb-16">
          {/* Card 1 - WhatsApp Native (wider - 3 cols) */}
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
                  <p className="font-heading font-semibold text-slate-900">WhatsApp Native</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">
                  Chat with AI agent directly in WhatsApp. No extra app needed. Send photos, messages, or receipts and we handle the rest.
                </p>
                <div className="rounded-xl border border-green-200 bg-white/50 p-4">
                  <div className="text-center space-y-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <MessageCircle className="w-12 h-12 text-green-600 mx-auto" />
                    </motion.div>
                    <h4 className="font-display text-base font-bold text-slate-900">Snap & Track</h4>
                    <p className="text-xs text-slate-600">Send receipt photo to our bot</p>
                    <motion.div 
                      className="pt-3 border-t border-green-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs text-slate-500">Recognized as: Grocery Store</p>
                      <p className="text-sm font-semibold text-slate-900">$45.32</p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Instant Recognition (narrower - 2 cols) */}
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
                    <Zap className="w-5 h-5 text-green-700 group-hover:text-green-900 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-slate-900">Instant Recognition</p>
                </div>
                <p className="text-slate-600 text-sm mb-5">AI categorizes expenses in seconds automatically. Lightning-fast performance.</p>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-3">
                    <motion.span
                      className="text-4xl font-display font-bold text-slate-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      &lt;1s
                    </motion.span>
                    <span className="text-slate-600 text-sm">response time</span>
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
        </div>

        {/* Mobile Phone Mockup Section */}
        <div className="mt-16 sm:mt-24 flex justify-center px-2 py-24 sm:py-32">
          <motion.div 
            className="relative w-full max-w-xs sm:max-w-sm"
            style={{ 
              y: phoneY,
              scale: phoneScale,
              opacity: phoneOpacity
            }}
          >
            {/* Phone Frame */}
            <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border-[6px] border-slate-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-2xl z-10" />
              
              {/* Screen */}
              <div className="bg-white rounded-[2rem] aspect-[9/19.5] overflow-hidden relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-20 flex items-center justify-between px-6 pt-2">
                  <span className="text-xs font-semibold text-slate-900">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-slate-900 rounded-sm relative">
                      <div className="absolute inset-0.5 bg-slate-900 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 pt-12">
                  {/* WhatsApp Header */}
                  <div className="bg-green-600 px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">ExpenseBot</p>
                      <p className="text-green-100 text-xs">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="bg-gradient-to-b from-green-50 to-white p-4 space-y-3">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-green-100 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-xs text-slate-900">Coffee $5.50</p>
                        <span className="text-[10px] text-slate-500">10:23 AM</span>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] shadow-sm border border-green-100">
                        <p className="text-xs text-slate-900 mb-1">✅ Tracked!</p>
                        <div className="bg-green-50 rounded-lg p-2 text-[10px]">
                          <p className="text-slate-600">Food & Dining: <span className="font-semibold text-green-700">$5.50</span></p>
                        </div>
                      </div>
                    </div>

                    {/* Receipt */}
                    <div className="flex justify-end">
                      <div className="bg-green-100 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <div className="bg-white rounded-lg p-2 mb-1">
                          <div className="w-full h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded flex items-center justify-center">
                            <p className="text-[10px] text-slate-500">📄 Receipt</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%] shadow-sm border border-green-100">
                        <p className="text-xs text-slate-900 mb-1">✅ Processed!</p>
                        <div className="bg-green-50 rounded-lg p-2 text-[10px]">
                          <p className="font-semibold text-slate-900">Whole Foods</p>
                          <p className="text-slate-600">🥗 $45.32</p>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-3 text-white">
                      <p className="text-xs font-semibold mb-2">📊 Today</p>
                      <div className="text-[10px] space-y-1">
                        <div className="flex justify-between">
                          <span>Total:</span>
                          <span className="font-bold">$50.82</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
