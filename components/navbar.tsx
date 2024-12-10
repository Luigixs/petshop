import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState, useRef, useEffect } from "react"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 w-full border-b border-tertiary bg-[#dbb04a] z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo amarela.png" alt="PetCloud Logo" width={70} height={40} />
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem 
              onMouseEnter={() => handleMouseEnter('funcionalidades')}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primary hover:text-primary/80"}>
                Funcionalidades
              </NavigationMenuLink>
              {openDropdown === 'funcionalidades' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => handleMouseEnter('funcionalidades')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="p-2">
                    <ListItem href="/banho-e-tosa" title="Banho e Tosa" />
                    <ListItem href="/clinica-veterinaria" title="Clínica Veterinária" />
                    <ListItem href="/pet-shop" title="Pet Shop" />
                    <ListItem href="/day-care" title="Day Care" />
                  </ul>
                </div>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem 
              onMouseEnter={() => handleMouseEnter('planos')}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primary hover:text-primary/80"}>
                Planos
              </NavigationMenuLink>
              {openDropdown === 'planos' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                  onMouseEnter={() => handleMouseEnter('planos')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="p-2">
                    <ListItem href="#pricing" title="Plano BASE" />
                    <ListItem href="#pricing" title="Plano MÉDIO" />
                    <ListItem href="#pricing" title="Plano AMPLO" />
                  </ul>
                </div>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className={navigationMenuTriggerStyle() + " text-primary hover:text-primary/80"}>
                Suporte
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className={navigationMenuTriggerStyle() + " text-primary hover:text-primary/80"}>
                2ª Via
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className={navigationMenuTriggerStyle() + " text-primary hover:text-primary/80"}>
                Blog
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex text-primary border-primary hover:bg-primary hover:text-[#dbb04a]">
            Fale com um especialista
          </Button>
          <Button className="bg-primary text-[#dbb04a] hover:bg-primary/90">
            Abrir PetCloud
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ className, title, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string }) => {
  return (
    <li className="mb-1 last:mb-0">
      <a
        className={`block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-primary ${className}`}
        {...props}
      >
        {title}
      </a>
    </li>
  )
}

