import Link from 'next/link'
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/logo.jpg" alt="Benavides Escobar Law Logo" width={60} height={60} className="mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Benavides Escobar Law</h3>
              <p className="text-sm">Protegiendo el medio ambiente con justicia</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-300">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-green-300">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-green-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p>Calle ....</p>
            <p>Teléfono: ...</p>
            <p>Email: ....</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>Asesoría en cumplimiento ambiental</li>
              <li>Litigación ambiental</li>
              <li>Defensa contra sanciones ambientales</li>
              <li>Consultoría para proyectos sostenibles</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Casos de éxito</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
            <p className="mb-2">Recibe nuestras últimas noticias y actualizaciones.</p>
            <form className="flex">
              <Input type="email" placeholder="Tu email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">Enviar</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-green-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Benavides Escobar Law. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

