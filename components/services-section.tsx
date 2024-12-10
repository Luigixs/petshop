import { ServiceCard } from "./service-card"

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ServiceCard
            title="Banho & Tosa"
            description="Controle melhor a agenda e serviços, com atendimento e cobrança rápida, financeiro completo e integração total."
            imageSrc="/serviços/banho.png"
          />
          <ServiceCard
            title="Clínica Veterinária"
            description="Ofereça o melhor atendimento, melhore o controle, histórico e contato com clientes, facilitando atendimentos e cobranças."
            imageSrc="/serviços/clinica.png"
          />
          <ServiceCard
            title="Pet Shop / Loja"
            description="Controle maior de vendas, estoque, validades, notas fiscais, financeiro completo e relatórios analíticos."
            imageSrc="/serviços/petshop.png"
          />
          <ServiceCard
            title="Day Care e Hotelzinho"
            description="Personalize serviços, controle check-in/out facilmente, imprima contratos e integre com outros setores."
            imageSrc="/serviços/daycare.png"
          />
        </div>
      </div>
    </section>
  )
}

