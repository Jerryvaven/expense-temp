const metrics = [
  { value: "50K+", label: "Active Users", description: "Growing daily" },
  { value: "$2.5M", label: "Tracked Annually", description: "Total expenses" },
  { value: "99.8%", label: "Accuracy Rate", description: "AI categorization" },
  { value: "24/7", label: "AI Support", description: "Always available" },
]

export function ImpactSection() {
  return (
    <section className="px-6 py-24 bg-green-50/30">
      <div className="max-w-5xl mx-auto">
        {/* Impact Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-green-700 uppercase tracking-wider mb-4">Our Results</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Empowering smart spending</h2>
          <p className="text-slate-600 max-w-lg mx-auto text-balance">
            See the impact of intelligent expense tracking across our community.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-white border border-green-200/50 hover:border-green-300/50 hover:bg-green-50/50 transition-all duration-300 group text-center relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <p className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                  {metric.value}
                </p>
                <p className="text-sm font-medium text-green-700 mb-1">{metric.label}</p>
                <p className="text-xs text-slate-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
