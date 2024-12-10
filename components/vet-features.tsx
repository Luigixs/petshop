import { Button } from "@/components/ui/button"
import Image from "next/image"

export function VetFeatures() {
  return (
    <section className="bg-[#5c7494] py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Solução Abrangente para Clínicas Veterinárias</h2>
              <p className="text-base sm:text-lg text-gray-200">
                Eleve a eficiência da sua clínica com uma plataforma que integra todos os aspectos do seu negócio.
              </p>
            </div>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-200 list-disc list-inside">
              <li>Libere tempo para focar em atividades de alto valor</li>
              <li>Gerencie agendas individuais para cada veterinário</li>
              <li>Automatize lembretes via WhatsApp</li>
              <li>Utilize prontuários digitais customizáveis</li>
              <li>Crie receituários personalizados</li>
              <li>Implemente programas de vacinação</li>
              <li>Ofereça carteiras de vacinação digitais</li>
              <li>Gerencie exames e procedimentos</li>
              <li>Mantenha um arquivo digital seguro</li>
              <li>Disponibilize resultados com assinatura digital</li>
              <li>Documente procedimentos com fotos integradas</li>
            </ul>
            <Button 
              variant="outline" 
              size="lg"
              className="mx-auto sm:mx-0 bg-white text-[#5c7494] hover:bg-gray-100 hover:text-[#5c7494] border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Recursos Avançados
            </Button>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            <Image
              src="/laptop-vet.png"
              alt="Sistema para clínica veterinária"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

