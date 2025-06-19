"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import { firmData } from "@/lib/data"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-slate-900 font-bold text-xl">AT</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-xl">AT RICHARD'S & ATTORNEYS</h1>
                <p className="text-amber-400 text-sm font-medium">Excellence in Legal Representation</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-amber-400 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${firmData.phone}`}
                className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{firmData.phone}</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-6 py-2 shadow-lg"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button - Only show on mobile/tablet */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-amber-400">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-slate-900 border-slate-700">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                          <span className="text-slate-900 font-bold">G</span>
                        </div>
                        <div>
                          <h2 className="text-white font-bold">González & Associates</h2>
                          <p className="text-amber-400 text-xs">Excellence in Legal Representation</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-6 flex-1">
                      {navItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left text-white hover:text-amber-400 font-medium text-lg transition-colors py-2 border-b border-slate-700/50"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4 pt-6 border-t border-slate-700">
                      <a
                        href={`tel:${firmData.phone}`}
                        className="flex items-center space-x-3 text-white hover:text-amber-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">{firmData.phone}</span>
                      </a>
                      <a
                        href={`mailto:${firmData.email}`}
                        className="flex items-center space-x-3 text-white hover:text-amber-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">Email Us</span>
                      </a>
                      <Button
                        onClick={() => scrollToSection("#contact")}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold py-3"
                      >
                        Free Consultation
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
