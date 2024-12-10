import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#31576d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm">
              PetCloud é a solução completa para gerenciamento de pet shops, clínicas veterinárias e hotéis para pets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:underline">Funcionalidades</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Planos</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Suporte</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm">Email: contato@petcloud.com</p>
            <p className="text-sm">Telefone: (11) 1234-5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-[#dbb04a]"><Facebook /></Link>
              <Link href="#" className="text-white hover:text-[#dbb04a]"><Instagram /></Link>
              <Link href="#" className="text-white hover:text-[#dbb04a]"><Twitter /></Link>
              <Link href="#" className="text-white hover:text-[#dbb04a]"><Linkedin /></Link>
              <Link href="#" className="text-white hover:text-[#dbb04a]"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">&copy; 2023 PetCloud. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

