import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Blog - ExpenseAI",
  description: "Read articles about smart expense tracking, financial wellness, and money management tips.",
}

export default function BlogPage() {
  const posts = [
    {
      title: "5 Ways WhatsApp Expense Tracking Saves You Time",
      excerpt: "Discover how integrating expense tracking into WhatsApp eliminates manual data entry.",
      date: "May 15, 2026",
      author: "Sarah Chen",
      category: "Tutorial",
      slug: "whatsapp-expense-tracking",
    },
    {
      title: "The Psychology of Spending: Understanding Your Money Habits",
      excerpt: "Learn how AI insights can reveal patterns in your spending behavior.",
      date: "May 10, 2026",
      author: "Alex Rodriguez",
      category: "Finance",
      slug: "psychology-of-spending",
    },
    {
      title: "ExpenseAI Premium Launch: New Features for Smart Budgeting",
      excerpt: "We're excited to announce advanced analytics and team collaboration features.",
      date: "May 5, 2026",
      author: "Emma Johnson",
      category: "Announcement",
      slug: "premium-launch",
    },
    {
      title: "How AI Accuracy Improved Our Expense Categorization to 99.8%",
      excerpt: "Behind the scenes: the technology powering our intelligent receipt recognition.",
      date: "April 28, 2026",
      author: "Michael Park",
      category: "Technology",
      slug: "ai-accuracy-improvement",
    },
    {
      title: "Case Study: How Sarah Reduced Spending by 30% in 2 Months",
      excerpt: "Real user story: one freelancer's journey to financial control with ExpenseAI.",
      date: "April 20, 2026",
      author: "Lisa Watson",
      category: "Case Study",
      slug: "spending-reduction-case-study",
    },
    {
      title: "Tax Deduction Guide for Freelancers and Small Businesses",
      excerpt: "Smart expense tracking makes tax season easier. Here's how ExpenseAI helps.",
      date: "April 15, 2026",
      author: "James Lee",
      category: "Guide",
      slug: "tax-deduction-guide",
    },
  ]

  const categoryColors = {
    Tutorial: "bg-blue-50 text-blue-700",
    Industry: "bg-purple-50 text-purple-700",
    Announcement: "bg-green-50 text-green-700",
    Security: "bg-red-50 text-red-700",
    "Case Study": "bg-yellow-50 text-yellow-700",
    Guide: "bg-teal-50 text-teal-700",
  }

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
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-lg text-slate-600 mb-12">
            Stories, tutorials, and insights from the Expense team and community.
          </p>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="p-6 rounded-2xl border border-green-200/50 bg-green-50/30 hover:border-green-300/50 hover:bg-green-50/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        categoryColors[post.category] || "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center gap-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-green-600 font-medium group-hover:text-green-700 transition-colors">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
