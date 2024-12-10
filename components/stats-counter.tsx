'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function StatsCounter() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-[2000px] px-4 sm:px-6 lg:px-8 py-16">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {inView && (
                <>
                  +<CountUp end={3000} duration={2.5} separator="." />
                </>
              )}
            </div>
            <p className="text-tertiary">Clientes beneficiados</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {inView && (
                <>
                  +<CountUp end={1500000} duration={2.5} separator="." />
                </>
              )}
            </div>
            <p className="text-tertiary">Agendamentos mensais</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {inView && (
                <>
                  +<CountUp end={24} duration={2.5} /> estados
                </>
              )}
            </div>
            <p className="text-tertiary">Presente em todo o Brasil</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              {inView && (
                <>
                  em <CountUp end={4} duration={2.5} /> países
                </>
              )}
            </div>
            <p className="text-tertiary">Brasil, EUA, Bolívia e Portugal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

