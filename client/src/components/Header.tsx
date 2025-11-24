import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { APP_LOGO, APP_LOGO_DARK } from "@/const";

interface HeaderProps {
  onNavClick?: (section: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Produtos", id: "produtos" },
    { label: "Conteúdo", id: "conteudo" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Clientes", id: "clientes" },
    { label: "Contato", id: "contato" },
  ];

  const handleNavClick = (id: string) => {
    onNavClick?.(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[rgb(10,10,10)] border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* --- MUDANÇA NO LOGO AQUI --- */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Logo Light: Some no modo dark (dark:hidden) */}
          <img
            src={APP_LOGO}
            alt="Archio"
            className="h-10 md:h-12 w-auto dark:hidden" 
          />
          
          {/* Logo Dark: Escondido por padrão (hidden), aparece no dark (dark:block) */}
          <img
            src={APP_LOGO_DARK}
            alt="Archio"
            className="h-10 md:h-12 w-auto hidden dark:block"
          />
        </div>
        {/* ---------------------------- */}

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Botão Login e Menu Mobile */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            Login
          </Button>

          {/* Menu Mobile com Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Login
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
