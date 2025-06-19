import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PracticeAreasSection from "@/components/practice-areas-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
