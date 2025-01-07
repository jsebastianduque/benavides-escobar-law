import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-green-900 text-white">
      <div className="absolute inset-0 bg-[url('/background2.jpg')] bg-cover bg-center opacity-50 backdrop-blur-md"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32">
      <Image src="/logo.jpg" alt="Benavides Escobar Law Logo" width={150} height={150} className="mb-8" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Benavides Escobar Law</h1>
        <p className="text-xl md:text-2xl mb-8">Protegiendo el medio ambiente con justicia</p>
        <Button asChild>
          <Link href="#contacto" className="px-6 py-3 text-lg md:text-xl">
            Contáctenos
          </Link>
        </Button>
      </div>
    </section>
  )
}
