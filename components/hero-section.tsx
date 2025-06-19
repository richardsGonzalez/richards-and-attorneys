"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { firmData, principalAttorney } from "@/lib/data"
import { Phone, Mail, MapPin, Star, Award, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      ></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 sm:px-4 py-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-medium text-xs sm:text-sm">Premier Legal Excellence Since 1990</span>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">RICHARD</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    GONZÁLEZ
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-300 font-light">ESQUIRE</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  {principalAttorney.shortBio}
                </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {firmData.tagline}
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Serving Miami's most discerning clients since {firmData.established} with unparalleled expertise in
                  real estate, estate planning, business law, and LGBTQ advocacy. Fluent in{" "}
                  {firmData.languages.join(", ")}.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-6 sm:px-8 py-3 sm:py-4 shadow-2xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm font-semibold transition-all duration-200 text-sm sm:text-base"
                asChild
              >
                <a href={`tel:${firmData.phone}`} className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" color="black"/>
                  <span className="text-black">{firmData.phone}</span>
                </a>
              </Button>
            </div>

            {/* Stats - Fixed mobile layout */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Cases Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  $50M+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium">Client Value</div>
              </div>
            </div>

            {/* Contact Info - Enhanced mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <a
                href={`tel:${firmData.phone}`}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Call Direct</div>
                  <div className="font-semibold text-white text-sm sm:text-base">{firmData.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${firmData.email}`}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Email Us</div>
                  <div className="font-semibold text-white text-xs sm:text-sm">Secure Contact</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Biscayne Blvd</div>
                  <div className="font-semibold text-white text-sm sm:text-base">Miami, FL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Portrait - Enhanced mobile layout */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <Image
                  src={principalAttorney.image || "/placeholder.svg"}
                  alt={principalAttorney.name}
                  width={500}
                  height={600}
                  className="rounded-2xl object-cover w-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Achievement Cards - Responsive positioning */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 p-3 sm:p-4 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-bold">CPA + JD</div>
                  <div className="text-xs">Dual Expertise</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 sm:p-4 rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1" />
                  <div className="text-xs sm:text-sm font-bold">LGBTQ</div>
                  <div className="text-xs">Advocate</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
