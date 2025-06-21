"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { partners, principalAttorney } from "@/lib/data"
import { Mail, Phone, Star, Award, ChevronLeft, ChevronRight } from "lucide-react"

export default function TeamCarousel() {
  const allTeamMembers = [
    {
      ...principalAttorney,
      specializations: ["Estate Planning", "Real Estate Law", "LGBTQ Rights"],
      isFounder: true,
    },
    ...partners.map((partner) => ({ ...partner, isFounder: false })),
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === allTeamMembers.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? allTeamMembers.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">EXPERIENCED LEGAL PROFESSIONALS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Legal Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet our distinguished legal professionals dedicated to providing exceptional representation and
            personalized service to our clients throughout Miami and beyond.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700 w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700 w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {allTeamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl overflow-hidden max-w-2xl mx-auto">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={400}
                            height={500}
                            className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                          {member.isFounder && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>FOUNDING PARTNER</span>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col justify-center space-y-6">
                          <div className="text-center md:text-left space-y-3">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-amber-400 font-semibold text-lg">{member.credentials}</p>
                            <p className="text-gray-300">{member.title}</p>
                          </div>

                          {member.specializations && (
                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-amber-400 text-center md:text-left">
                                Specializations
                              </h4>
                              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {member.specializations.map((spec, specIndex) => (
                                  <span
                                    key={specIndex}
                                    className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/50"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="space-y-4 pt-4 border-t border-slate-600/50">
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-amber-400 transition-colors group/email"
                            >
                              <Mail className="w-5 h-5 group-hover/email:scale-110 transition-transform" />
                              <span>{member.email}</span>
                            </a>

                            {member.phone && (
                              <a
                                href={`tel:${member.phone}`}
                                className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-amber-400 transition-colors group/phone"
                              >
                                <Phone className="w-5 h-5 group-hover/phone:scale-110 transition-transform" />
                                <span>{member.phone}</span>
                              </a>
                            )}

                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-slate-900 mt-4 font-semibold transition-all duration-200"
                              asChild
                            >
                              <a href={`mailto:${member.email}`}>CONTACT {member.name.split(" ")[0].toUpperCase()}</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {allTeamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-amber-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
