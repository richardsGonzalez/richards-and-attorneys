
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Users, Briefcase, Home, Car } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Personal Injury",
    description: "Comprehensive representation for accident victims and their families.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense strategies for all criminal charges.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate guidance through family legal matters.",
  },
  {
    icon: Briefcase,
    title: "Business Law",
    description: "Strategic legal counsel for businesses of all sizes.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Complete real estate transaction and dispute services.",
  },
  {
    icon: Car,
    title: "Auto Accidents",
    description: "Maximum compensation for motor vehicle accident victims.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR PRACTICE AREAS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, ensuring expert representation for
            all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
