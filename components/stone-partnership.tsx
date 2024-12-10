import { Button } from "@/components/ui/button"
import { PricingPlans } from "./pricing-plans"
import Link from "next/link"

export function StonePartnership() {
  return (
    <section className="-mx-[calc(100vw-100%)] overflow-x-hidden">
      {/* Top Section with Gradient */}
      <div className="relative bg-gradient-to-r from-[#dbb04a] to-[#5c7494] pt-24">
        {/* Subtle Smoke Effect */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" fill="#5c7494"/>
          </svg>
        </div>
        
        <div id="pricing" className="mx-auto max-w-[2000px] relative">
          <PricingPlans />
        </div>

        {/* Multiple Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50L48 45C96 40 192 30 288 25C384 20 480 20 576 25C672 30 768 40 864 45C960 50 1056 50 1152 45C1248 40 1344 30 1392 25L1440 20V100H0V50Z"
              fill="#5c7494"
              fillOpacity="0.3"
            />
            <path
              d="M0 70L48 65C96 60 192 50 288 45C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H0V70Z"
              fill="#5c7494"
              fillOpacity="0.5"
            />
            <path
              d="M0 0L48 13.3C96 26.7 192 53.3 288 60C384 66.7 480 53.3 576 40C672 26.7 768 13.3 864 20C960 26.7 1056 53.3 1152 66.7C1248 80 1344 80 1392 80H1440V100H0V0Z"
              fill="#5c7494"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Section with CTA and Footer */}
      <div className="bg-[#5c7494]">
        {/* CTA Section */}
        <div className="container mx-auto px-4 text-center py-24">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para revolucionar seu negócio pet?
          </h2>
          <p className="text-xl text-white mb-8">
            Escolha o plano ideal para você e comece a transformar sua gestão hoje mesmo!
          </p>
          <Button size="lg" className="bg-[#dbb04a] text-white hover:bg-[#dbb04a]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Fale com um Especialista
          </Button>
        </div>

        {/* Footer Section */}
        <footer className="border-t border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* FUNCIONALIDADES Column */}
              <div>
                <h3 className="text-white font-semibold mb-4">FUNCIONALIDADES</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Banho e Tosa</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Clínica Veterinária</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Pet Shop</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Creche, Hotelzinho e Adestramento</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Consultoria e mentoria</Link></li>
                </ul>
              </div>

              {/* PETCLOUD Column */}
              <div>
                <h3 className="text-white font-semibold mb-4">PETCLOUD</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Assista a apresentação</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Planos</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Quem somos</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Novidades</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* CONTATOS Column */}
              <div>
                <h3 className="text-white font-semibold mb-4">CONTATOS</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Quero conhecer</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">2ª Via</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Suporte para assinantes</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Abrir PetCloud</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Indique o PetCloud</Link></li>
                </ul>
              </div>

              {/* INFORMAÇÕES Column */}
              <div>
                <h3 className="text-white font-semibold mb-4">INFORMAÇÕES</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Tire suas dúvidas</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Termos de uso</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Segurança da Informação</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Política de privacidade</Link></li>
                  <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Regras de cancelamento</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-300 text-sm text-center md:text-left">
                  Feito com ❤️ em Contagem - MG para os empreendedores Brasileiros.
                </p>
                <div className="flex items-center space-x-4">
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">WhatsApp</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#E4405F" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">TikTok</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-300">
                <p>2024 © PetCloud® é o sistema ERP para gerenciamento de Pet Shops, Salões de Estética, Clínicas Veterinárias, Hotel Pet, Creche Pet, Day Care e Escola de Adestramento.</p>
                <p className="mt-2">Mais uma solução da AR2 SISTEMAS LTDA – CNPJ 46.573.469/0001-10 – JANDIRA CHAVES DINIZ, 209, EUROPA</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

