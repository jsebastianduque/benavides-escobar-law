import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { BookOpen, Scale, Shield, Leaf } from 'lucide-react'

const services = [
  {
    title: "Asesoría en cumplimiento ambiental",
    description: "Guiamos a nuestros clientes para asegurar el cumplimiento de todas las regulaciones ambientales aplicables, previniendo infracciones y sanciones.",
    icon: BookOpen
  },
  {
    title: "Litigación ambiental",
    description: "Representamos a nuestros clientes en disputas legales relacionadas con el medio ambiente, defendiendo sus intereses ante las autoridades competentes.",
    icon: Scale
  },
  {
    title: "Defensa contra sanciones ambientales",
    description: "Ofrecemos una robusta defensa legal contra sanciones ambientales, trabajando para mitigar o eliminar penalidades.",
    icon: Shield
  },
  {
    title: "Consultoría para proyectos sostenibles",
    description: "Asesoramos en el desarrollo de proyectos que cumplan con los estándares de sostenibilidad, garantizando la viabilidad legal y ambiental.",
    icon: Leaf
  }
]

export default function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-900">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-green-800">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

