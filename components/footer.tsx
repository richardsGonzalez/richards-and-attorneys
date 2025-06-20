import { firmData, practiceAreas } from "@/lib/data"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Firm Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-xl">AT</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {firmData.name}
                </h3>
                <p className="text-amber-400 font-medium">Excellence in Legal Representation</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg max-w-md">
              Premier boutique law firm serving Miami since {firmData.established}. Providing exceptional legal
              representation with integrity, expertise, and results that exceed expectations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-semibold">{firmData.address.street}</div>
                  <div>
                    {firmData.address.city}, {firmData.address.state} {firmData.address.zip}
                  </div>
                </div>
              </div>

              <a
                href={`tel:${firmData.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors group"
              >
                <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">{firmData.phone}</span>
              </a>

              <a
                href={`mailto:${firmData.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold break-all">{firmData.email}</span>
              </a>

              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300 font-semibold">{firmData.languages.join(" • ")}</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <div className="w-10 h-10 bg-slate-700/50 hover:bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-700/50 hover:bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-700/50 hover:bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-700/50 hover:bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-400">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index} className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">
                  {area.title}
                </li>
              ))}
            </ul>
          </div>

          {/* LGBTQ Services & Community */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-amber-400">LGBTQ Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Same-Sex Estate Planning</li>
              <li className="hover:text-white cursor-pointer transition-colors">Marriage Equality Advocacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Domestic Partnerships</li>
              <li className="hover:text-white cursor-pointer transition-colors">LGBTQ Family Law</li>
              <li className="hover:text-white cursor-pointer transition-colors">Adoption Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Human Rights Advocacy</li>
            </ul>

            <div className="pt-4 border-t border-slate-700">
              <h5 className="font-semibold text-white mb-2">Community Leadership</h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                SAVE-DADE Founding Member • Pridelines Vice Chair • 30+ Years LGBTQ Advocacy
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 lg:mt-16 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm text-center lg:text-left">
              &copy; {new Date().getFullYear()} Richard's & Attorneys. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8 text-sm text-gray-400">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Legal Disclaimer</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
