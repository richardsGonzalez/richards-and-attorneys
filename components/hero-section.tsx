"use client"

import { Button } from "@/components/ui/button"
import { firmData } from "@/lib/data"
import { Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/miami-skyline-hero.jpg')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Miami's Finest
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Real Estate
                </span>
                <br />
                <span className="text-white">& Property Law Firm</span>
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed max-w-3xl">
                Serving Miami's most discerning clients since 1990 with unparalleled expertise in real estate
                transactions, estate planning, and comprehensive legal services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-8 sm:px-12 py-4 sm:py-7 shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg sm:text-xl"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-8 sm:px-12 py-4 sm:py-6 backdrop-blur-sm font-semibold transition-all duration-200 text-lg sm:text-xl"
                asChild
              >
                <a href={`tel:${firmData.phone}`} className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" color="black"/>
                  <span className="text-black hover:text-gray-600">{firmData.phone}</span>
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-medium mt-2">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-medium mt-2">Cases Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  $50M+
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-medium mt-2">Client Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
