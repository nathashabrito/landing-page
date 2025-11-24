import React from "react";
import { Separator } from "@/components/ui/separator";
import { APP_LOGO } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Coluna Logo */}
          <div>
            <img
              src={APP_LOGO}
              alt="Archio"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              Gestão inteligente de documentos, processos e contratos.
            </p>
          </div>

          {/* Coluna Produtos */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Gestão de Documentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Gestão de Processos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Gestão de Contratos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Inteligência Artificial
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#quem-somos" className="hover:opacity-100 transition-opacity">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="mailto:contato@archio.com.br" className="hover:opacity-100 transition-opacity">
                  suporte@archio.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:opacity-100 transition-opacity">
                  +55 (34) 99693-5800
                </a>
              </li>
              <li>Uberaba, MG</li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <Separator className="bg-primary-foreground/20 my-8" />

        {/* Rodapé */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-90">
          <p>&copy; {currentYear} Archio. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
