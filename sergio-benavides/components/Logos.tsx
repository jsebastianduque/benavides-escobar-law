import { Scale, FileText, Briefcase, Gavel, TreePine, Mountain } from 'lucide-react'

const logos = [
  { icon: Scale, name: "Balanza de la Justicia" },
  { icon: FileText, name: "Documentos Legales" },
  { icon: Briefcase, name: "Representación Legal" },
  { icon: Gavel, name: "Decisiones Judiciales" },
  { icon: TreePine, name: "Protección Forestal" },
  { icon: Mountain, name: "Conservación Natural" },
]

export default function Logos() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">Áreas de Especialización</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => {
            const Icon = logo.icon
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-green-100 p-6 rounded-full mb-4">
                  <Icon className="h-12 w-12 text-green-600" />
                </div>
                <span className="text-sm text-center text-gray-600">{logo.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

