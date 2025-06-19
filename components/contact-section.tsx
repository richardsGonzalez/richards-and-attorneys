"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { firmData } from "@/lib/data"
import { MapPin, Phone, Mail, Globe, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-400/10 to-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-4 sm:px-6 py-2 mb-6">
            <Phone className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 font-semibold text-xs sm:text-sm">SCHEDULE YOUR CONSULTATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Contact Our Firm
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Schedule your complimentary consultation today. We're here to help you navigate your legal challenges with
            personalized attention and expert guidance in English, Spanish, or Italian.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-slate-800 text-lg sm:text-xl text-center sm:text-left">
                    Call Direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left">
                  <a
                    href={`tel:${firmData.phone}`}
                    className="text-xl sm:text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors block"
                  >
                    {firmData.phone}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Available for consultations</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-slate-800 text-lg sm:text-xl text-center sm:text-left">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left">
                  <a
                    href={`mailto:${firmData.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors font-semibold break-all text-sm sm:text-base"
                  >
                    {firmData.email}
                  </a>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Secure & confidential</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-slate-800 text-lg sm:text-xl text-center sm:text-left">
                    Visit Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left">
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">{firmData.address.street}</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {firmData.address.city}, {firmData.address.state} {firmData.address.zip}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Biscayne Boulevard</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                    <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-slate-800 text-lg sm:text-xl text-center sm:text-left">
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center sm:text-left">
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">{firmData.languages.join(" • ")}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">Multilingual service</p>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us - Enhanced mobile layout */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10"></div>
              <CardContent className="p-6 sm:p-8 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center sm:text-left capitalize">
                  Why Choose {firmData.name}?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <ul className="space-y-3 sm:space-y-4 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">30+ years of distinguished legal experience</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Trilingual service capabilities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Premier Biscayne Boulevard location</span>
                    </li>
                  </ul>
                  <ul className="space-y-3 sm:space-y-4 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">LGBTQ community leadership</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">CPA + JD dual expertise</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Personalized client attention</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Enhanced mobile layout */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-slate-800 text-center sm:text-left">
                Schedule Your Free Consultation
              </CardTitle>
              <p className="text-gray-600 text-center sm:text-left text-sm sm:text-base">
                Complete the form below and we'll contact you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {formSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We'll contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      placeholder="First Name *"
                      required
                      className="h-10 sm:h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                    <Input
                      placeholder="Last Name *"
                      required
                      className="h-10 sm:h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="h-10 sm:h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="h-10 sm:h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Input
                    placeholder="Legal Matter Type"
                    className="h-10 sm:h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                  />

                  <Textarea
                    placeholder="Please describe your legal matter in detail..."
                    rows={4}
                    className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 resize-none"
                  />

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="languages"
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="languages" className="text-xs sm:text-sm text-gray-600">
                        I would like service in Spanish or Italian
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="lgbtq"
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="lgbtq" className="text-xs sm:text-sm text-gray-600">
                        This matter involves LGBTQ legal issues
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="urgent"
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="urgent" className="text-xs sm:text-sm text-gray-600">
                        This is an urgent legal matter
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                  >
                    SCHEDULE FREE CONSULTATION
                  </Button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy and terms of service. All communications
                    are confidential and protected by attorney-client privilege.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
