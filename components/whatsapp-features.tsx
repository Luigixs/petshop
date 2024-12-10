import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatsAppFeatures() {
  return (
    <section className="bg-[#dbb04a] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Comunicação Instantânea com Seus Clientes</h2>
              <p className="text-base sm:text-lg text-gray-800">
                Simplifique o contato e aumente o engajamento com ferramentas de mensagem integradas.
              </p>
            </div>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-800 list-disc list-inside">
              <li>Crie avisos personalizados via WhatsApp</li>
              <li>Envie lembretes automáticos para agendamentos</li>
              <li>Implemente confirmação automática</li>
              <li>Mantenha os clientes informados sobre atendimentos</li>
              <li>Envie lembretes de aniversário</li>
              <li>Notifique sobre próximas vacinas</li>
              <li>Facilite o fechamento de pacotes de serviços</li>
              <li>Envie comandas de serviços digitalmente</li>
              <li>Realize campanhas de reativação</li>
            </ul>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white text-[#dbb04a] hover:bg-gray-100 hover:text-[#dbb04a] border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Saiba Mais Sobre Integração
            </Button>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            <Image
              src="/whatsapp-screen.png"
              alt="Interface de conversas automatizadas no WhatsApp"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

