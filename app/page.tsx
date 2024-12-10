'use client'

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { GroomingFeatures } from "@/components/grooming-features"
import { VetFeatures } from "@/components/vet-features"
import { PetShopFeatures } from "@/components/pet-shop-features"
import { WhatsAppFeatures } from "@/components/whatsapp-features"
import { StatsCounter } from "@/components/stats-counter"
import { StonePartnership } from "@/components/stone-partnership"
import { useEffect, useRef, useCallback } from 'react'

export default function Home() {
  const anchorsRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

  const handleSmoothScroll = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, []);

  useEffect(() => {
    anchorsRef.current = document.querySelectorAll('a[href^="#"]');
    
    anchorsRef.current.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      if (anchorsRef.current) {
        anchorsRef.current.forEach(anchor => {
          anchor.removeEventListener('click', handleSmoothScroll);
        });
      }
    };
  }, [handleSmoothScroll]);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GroomingFeatures />
      <VetFeatures />
      <PetShopFeatures />
      <WhatsAppFeatures />
      <StatsCounter />
      <StonePartnership />
    </main>
  )
}

