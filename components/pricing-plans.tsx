import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const plans = [
{
  name: "Plano BASE",
  price: "R$ 200",
  period: "mês",
  features: [
    "2 usuários",
    "Cupom fiscal (emissão nfs-e)",
    "Controle de caixa (fechamento por usuários)",
    "Atualizações de versões",
    "Controle de estoque básico"
  ]
},
{
  name: "Plano MÉDIO",
  price: "R$ 250",
  period: "mês",
  features: [
    "3 usuários",
    "Cupom fiscal (emissão nfs-e)",
    "Controle de caixa (fechamento por usuários)",
    "Atualizações de versões",
    "Controle de estoque + cmv",
    "Agenda estética",
    "Agenda de veterinários"
  ],
  popular: true
},
{
  name: "Plano AMPLO",
  price: "R$ 350",
  period: "mês",
  features: [
    "5 usuários",
    "Cupom fiscal (emissão nfs-e)",
    "Controle de caixa (fechamento por usuários)",
    "Atualizações de versões",
    "Controle de estoque + cmv",
    "Totalizadores de vendas mensais de serviços/produtos por tipo",
    "Agenda estética",
    "Agenda de veterinários"
  ]
}
]

export function PricingPlans() {
return (
  <div className="py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Nossos Planos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${plan.popular ? 'border-4 border-secondary' : ''}`}>
            {plan.popular && (
              <div className="bg-secondary text-primary text-center py-2 font-semibold">
                Mais Popular
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary mb-4">
                {plan.price} <span className="text-lg font-normal text-gray-600">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Escolher Plano
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

