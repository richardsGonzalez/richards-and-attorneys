import { Card, CardContent } from "@/components/ui/card"
import { principalAttorney, firmData } from "@/lib/data"
import { GraduationCap, Scale, Users, Award, Star, Trophy, Building } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-2 mb-6">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm">DISTINGUISHED LEGAL LEADERSHIP</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                About Richard González
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">{firmData.missionStatement}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Biography Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                {principalAttorney.fullBio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Community Leadership Highlight */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Community Leadership
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Founding Board Member and Treasurer of SAVE (SAVE-DADE) and current Vice Chair of Pridelines,
                    pioneering LGBTQ rights advocacy and community outreach throughout Miami-Dade County for over three
                    decades.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Credentials & Achievements */}
            <div className="space-y-8">
              {/* Education */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Education</h3>
                  </div>
                  <div className="space-y-4">
                    {principalAttorney.education.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium text-lg">{edu}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bar Admissions */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Scale className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Bar Admissions</h3>
                  </div>
                  <div className="space-y-4">
                    {principalAttorney.barAdmissions.map((bar, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium text-lg">{bar}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Associations */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Professional Associations</h3>
                  </div>
                  <div className="space-y-3">
                    {principalAttorney.barAssociations.map((assoc, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 font-medium">{assoc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">CPA + JD</div>
                    <div className="text-sm font-semibold opacity-90">Dual Expertise</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">30+</div>
                    <div className="text-sm font-semibold opacity-90">Years Excellence</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
