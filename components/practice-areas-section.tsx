import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { practiceAreas } from "@/lib/data"
import { Building2, ScrollText, Briefcase, Heart, Home, CreditCard } from "lucide-react"

const iconMap = {
  Building2,
  ScrollText,
  Briefcase,
  Heart,
  Home,
  CreditCard,
}

export default function PracticeAreasSection() {
  return (
    <section id="practice-areas" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-2 mb-6">
            <span className="text-amber-600 font-semibold text-sm">COMPREHENSIVE LEGAL SERVICES</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We resolve complex legal matters with precision and efficiency, specializing in sophisticated practice areas
            with multilingual service in English, Spanish, and Italian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap]

            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 overflow-hidden relative"
              >
                <CardHeader className="text-center pb-6 relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* LGBTQ Specialization Highlight */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-400 font-semibold text-sm">LGBTQ LEGAL ADVOCACY</span>
                </div>
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Pioneering LGBTQ Rights
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Our firm has a distinguished 30-year commitment to Florida's LGBTQ community, providing specialized
                  legal services with deep understanding of unique challenges and opportunities.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-amber-400">Family & Relationships</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Same-Sex Estate Planning</li>
                    <li>• Marriage Equality Advocacy</li>
                    <li>• Domestic Partnership Agreements</li>
                    <li>• Premarital Agreements</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-amber-400">Legal Protection</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Custody & Adoption Services</li>
                    <li>• Same-Sex Divorce Proceedings</li>
                    <li>• HIV Protection Laws</li>
                    <li>• Human Rights Advocacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
