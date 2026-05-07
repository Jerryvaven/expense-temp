"use client"

import { motion } from "motion/react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "ExpenseAI changed how I track spending. Just snap a photo on WhatsApp and it's categorized instantly. Finally saving money without effort!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "Freelancer",
  },
  {
    text: "The AI accuracy is incredible. It catches every expense and auto-categorizes them. My budget planning is so much easier now.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "Small Business Owner",
  },
  {
    text: "WhatsApp integration is genius. I don't need another app—just send receipts to the bot and I'm done. Life-changing!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "Accountant",
  },
  {
    text: "For the first time, I understand my spending patterns. The insights are eye-opening and actually motivate me to spend smarter.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "David Park",
    role: "Financial Analyst",
  },
  {
    text: "Our team uses it for project expenses. It's so accurate and saves hours of manual entry. Best decision for our finance team.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Aisha Patel",
    role: "Finance Manager",
  },
  {
    text: "No more lost receipts. The WhatsApp bot captures everything automatically. My accountant loves how organized everything is now.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "Entrepreneur",
  },
  {
    text: "The real-time dashboard shows exactly where my money goes. I cut my expenses by 30% in just two months!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Consultant",
  },
  {
    text: "Setup was instant. Started tracking expenses immediately through WhatsApp. No complicated setup, just pure convenience.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Brown",
    role: "Student",
  },
  {
    text: "The AI understands context perfectly. Even a blurry receipt photo gets categorized correctly. Highly impressed with the tech.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Kim",
    role: "Marketing Director",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["TechCorp", "Innovate", "NextGen", "Quantum", "Velocity", "Apex"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-green-50/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-green-300 py-1.5 px-4 rounded-full text-sm text-green-700">Testimonials</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mt-6 text-center tracking-tight">
            Users love ExpenseAI
          </h2>
          <p className="text-center mt-4 text-slate-600 text-lg text-balance">
            See how our community is transforming their spending habits with smart expense tracking.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-green-200/50">
          <p className="text-center text-sm text-slate-600 mb-8">Trusted by industry leaders</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-green-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
