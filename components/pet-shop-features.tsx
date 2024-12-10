import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PetShopFeatures() {
  return (
    <section className="bg-[#31576d] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] order-1 lg:order-none">
            <Image
              src="/laptop-petshop.png"
              alt="Sistema para pet shop"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Gestão Inteligente para Pet Shops</h2>
              <p className="text-base sm:text-lg text-gray-100">
                Domine cada aspecto do seu negócio com nossa solução abrangente.
              </p>
            </div>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-100 list-disc list-inside">
              <li>Integre vendas com terminais Stone</li>
              <li>Gerencie estoque com precisão</li>
              <li>Monitore validades automaticamente</li>
              <li>Utilize um PDV intuitivo</li>
              <li>Implemente leitura de código de barras</li>
              <li>Controle créditos e débitos dos clientes</li>
              <li>Gerencie caixas e turnos facilmente</li>
              <li>Ofereça múltiplas opções de pagamento</li>
              <li>Emita cupons e recibos instantaneamente</li>
              <li>Gere notas fiscais com um clique</li>
              <li>Simplifique processos de conferência</li>
              <li>Otimize o fechamento de caixa</li>
              <li>Acesse informações rapidamente</li>
              <li>Gerencie pedidos de atacado</li>
              <li>Automatize pedidos de compra</li>
            </ul>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white text-[#31576d] hover:bg-gray-100 hover:text-[#31576d] border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Descubra Mais Funcionalidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

