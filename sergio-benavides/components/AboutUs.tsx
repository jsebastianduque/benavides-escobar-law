import { TreeIcon, RecycleIcon, WaterDropIcon } from './EnvironmentalIcons'

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-800">Sobre Nosotros</h2>
        <div className="max-w-3xl mx-auto text-gray-700 mb-16">
          <p className="mb-4">
            En Benavides Escobar Law, nos especializamos en derecho ambiental, con un profundo compromiso hacia la protección de los recursos naturales de Colombia. Nuestro equipo de abogados expertos combina un conocimiento exhaustivo de la legislación ambiental colombiana con una pasión por la conservación.
          </p>
          <p>
            Con años de experiencia navegando el marco legal ambiental de Colombia, estamos equipados para enfrentar los desafíos legales más complejos relacionados con la protección del medio ambiente. Nuestro objetivo es proporcionar soluciones legales efectivas que equilibren el desarrollo económico con la sostenibilidad ambiental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <TreeIcon className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">Protección Forestal</h3>
            <p className="text-gray-600">Defendemos nuestros bosques y ecosistemas terrestres.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <RecycleIcon className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">Economía Circular</h3>
            <p className="text-gray-600">Promovemos prácticas sostenibles y manejo responsable de residuos.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <WaterDropIcon className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-green-800">Recursos Hídricos</h3>
            <p className="text-gray-600">Protegemos nuestras fuentes de agua y ecosistemas acuáticos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

