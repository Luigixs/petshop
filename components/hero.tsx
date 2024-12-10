'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, PawPrint, ShoppingBag, Users2, Wallet } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const phrases = [
  "Salões de Beleza Animal",
  "Lojas de Animais",
  "Hospitais Veterinários",
  "Hospedagens para Pets",
  "Creches para Animais"
]

export function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      } else {
        timer = setTimeout(handleTyping, typingSpeed)
      }
    }

    timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <>
      <div className="relative h-[650px] flex items-center">
        {/* GIF background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/banho-e-tosa.gif"
              alt="Pet care background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl ml-4 sm:ml-8 md:ml-12 lg:ml-16">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Revolucione seu Negócio Pet com nossa Solução ERP Integrada
              </h1>
              <div className="space-y-4">
                {[
                  { icon: PawPrint, text: "Simplifique sua gestão e potencialize seus resultados" },
                  { icon: Calendar, text: "Otimize sua agenda e maximize sua eficiência" },
                  { icon: Users2, text: "Construa relacionamentos duradouros com seus clientes" },
                  { icon: MessageSquare, text: "Mantenha-se conectado com seus clientes instantaneamente" },
                  { icon: ShoppingBag, text: "Gerencie seu inventário com precisão e facilidade" },
                  { icon: Wallet, text: "Controle suas finanças e impulsione o crescimento do seu negócio" }
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Icon className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>
              <Link href="#pricing" className="inline-block mt-6">
                <Button size="lg" className="bg-primary text-[#dbb04a] hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Explore Nossos Planos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-primary mb-4">
            Quem se Beneficia com o PetCloud?
          </h2>
          <p className="text-lg sm:text-xl text-tertiary">
            Ideal para{" "}
            <span className="text-[#dbb04a] font-medium relative">
              {text}
              <span className="absolute -right-1 top-0 h-full w-[2px] bg-[#dbb04a] animate-blink"></span>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

