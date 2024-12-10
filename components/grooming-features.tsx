import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GroomingFeatures() {
  return (
    <section className="bg-[#dbb04a] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] order-1 lg:order-none">
            <Image
              src="/laptop-grooming.png"
              alt="Sistema de agendamento para pet shop"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Projetado para Excelência em Estética Pet</h2>
              <p className="text-lg sm:text-xl text-gray-800">
                Empodere sua equipe com ferramentas que simplificam e aprimoram cada aspecto do seu serviço.
              </p>
            </div>
            <ul className="space-y-4 text-gray-800">
              {[
                "Maximize a ocupação semanal com preços dinâmicos",
                "Expanda sua clientela sem sobrecarregar a equipe",
                "Reconquiste clientes perdidos eficazmente",
                "Impulsione vendas com tecnologia de ponta",
                "Automatize comunicação via WhatsApp",
                "Fortaleça fidelização com promoções inteligentes",
                "Minimize inadimplência com cobranças ágeis",
                "Aprimore seu poder de negociação",
                "Garanta a segurança jurídica do seu negócio"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white text-[#dbb04a] hover:bg-gray-100 hover:text-[#dbb04a] border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Descubra Mais Funcionalidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

