import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import {
  CheckCircle2,
  Settings,
  Zap,
  Lock,
  Database,
  Users,
  Star,
} from "lucide-react";

const carouselItems = [
  {
    type: "video" as const,
    src: "/WhatsAppVideo2025-11-21at12.46.34.mp4",
    alt: "Vídeo 2",
  },
  {
    type: "image" as const,
    src: "/site_2_gestao_processos.png",
    alt: "Gestão de Processos",
  },
  {
    type: "video" as const,
    src: "/WhatsAppVideo2025-11-21at12.46.47.mp4",
    alt: "Vídeo 1",
  },
  {
    type: "image" as const,
    src: "/site_3_gestao_contratos.png",
    alt: "Gestão de Contratos",
  },
  {
    type: "image" as const,
    src: "/site_4_automacao_processos.png",
    alt: "Automação de Processos",
  },
  {
    type: "image" as const,
    src: "/site_5_analise_informacoes.png",
    alt: "Análise de Informações",
  },
];

const destaques = [
  {
    icon: Settings,
    title: "Configuração",
    description:
      "Configure documentos, modelos de contratos e processos de forma intuitiva ou utilize modelos pré-configurados",
  },
  {
    icon: Zap,
    title: "Inteligência Artificial",
    description:
      "Automatize processos e analise informações com uso de Inteligência Artificial",
  },
  {
    icon: Lock,
    title: "Retenção",
    description: "Controle prazos dos documentos com notificação automática",
  },
  {
    icon: Database,
    title: "Segurança",
    description:
      "Controle o acesso a nível de documentos ou grupo de documentos, por usuário ou time de usuários",
  },
  {
    icon: CheckCircle2,
    title: "Preservação",
    description:
      "Garantia de preservação das informações, redundância de servidores em nuvem e backups automatizados",
  },
  {
    icon: Users,
    title: "Treinamento",
    description:
      "Nosso suporte acompanha toda a configuração do sistema para que os objetivos sejam rapidamente atingidos",
  },
];

const clientes = [
  {
    nome: "Cliente 1",
    empresa: "Empresa 1",
    avaliacao: 5,
    depoimento:
      "Archio transformou completamente a forma como gerenciamos nossos documentos. A plataforma é intuitiva e o suporte é excelente.",
  },
  {
    nome: "Cliente 2",
    empresa: "Empresa 2",
    avaliacao: 5,
    depoimento:
      "Implementação rápida e eficiente. O sistema nos ajudou a reduzir custos operacionais significativamente.",
  },
  {
    nome: "Cliente 3",
    empresa: "Empresa 3",
    avaliacao: 5,
    depoimento:
      "Excelente solução para gestão de contratos. Recomendamos para qualquer empresa que busca modernização.",
  },
];

export default function Home() {
  const produtosRef = useRef<HTMLDivElement>(null);
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (section: string) => {
    switch (section) {
      case "produtos":
        produtosRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "quem-somos":
        quemSomosRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contato":
        contatoRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onNavClick={handleNavClick} />

      <main className="flex-1">
        {/* Hero Section com Carrossel */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="mb-8">
              <Badge className="mb-4 bg-primary/20 text-primary dark:text-[oklch(0.90_0_0)] hover:bg-primary/30">
                Solução em Nuvem
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                Gestão Inteligente de Informações
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground dark:text-[oklch(0.90_0_0)] max-w-1xl">
                Archio é uma solução em nuvem que traz conceitos inovadores na
                gestão de documentos, processos e contratos.
              </p>
            </div>
            <Carousel items={carouselItems} autoPlayInterval={6000} />
          </div>
        </section>

        {/* Seção Produtos */}
        <section ref={produtosRef} className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-12 text-center">
              Nossas Soluções
            </h2>

            {/* Gestão de Documentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                  Gestão de Documentos Inteligente
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Gerencie suas informações, sejam documentos físicos ou
                  eletrônicos, de forma a permitir sua preservação e recuperação
                  imediata.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Saiba Mais
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/gestao_documentos.jpg"
                  alt="Gestão de Documentos"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Gestão de Processos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg  order-2 md:order-1">
                <img
                  src="/site_2_gestao_processos.png"
                  alt="Gestão de Processos"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                  Gestão de Processos (Workflows)
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Automatize e gerencie cada etapa de seus processos, mantenha
                  registros das operações, identifique gargalos e ganhe
                  produtividade.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Gestão de Contratos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                  Gestão de Contratos
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Colete assinaturas (eSignature), gerencie e armazene seus
                  contratos, permitindo controlar seu ciclo de vida, a rápida
                  recuperação e preservação dos contratos.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Saiba Mais
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/site_3_gestao_contratos.png"
                  alt="Gestão de Contratos"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção IA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                  Automação de Processos com Inteligência Artificial
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Automatize processos de indexação de documentos, OCR,
                  assinatura digital, workflows e a coleta de informações para
                  criação de uma base de conhecimento corporativa.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Explorar IA
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/site_4_automacao_processos.png"
                  alt="Automação com IA"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                <img
                  src="/site_5_analise_informacoes.png"
                  alt="Análise com IA"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-primary dark:text-[oklch(0.90_0_0)] mb-4">
                  Analise Suas Informações com Inteligência Artificial
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Tenha insights, localize informações em documentos, sumarize
                  informações, controle a retenção de informações, pesquise e
                  gerencie métricas dos processos e acervo de informações.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Destaques */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 dark:text-[oklch(0.90_0_0)] text-center">
              Destaques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destaques.map((destaque, index) => {
                const Icon = destaque.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary mb-2 dark:text-[oklch(0.90_0.02_240)]">
                          {destaque.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {destaque.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção Quem Somos */}
        <section
          ref={quemSomosRef}
          className="py-16 md:py-24 bg-primary/5 dark:bg-transparent"
        >
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 dark:text-[oklch(0.90_0_0)] text-center">
              Quem Somos
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed dark:text-zinc-300">
                Archio nasceu de uma cisão da área de sistemas da SMARTSCAN
                SERVIÇOS DIGITAIS LTDA. Empresa da área de Gestão Documental
                fundada em 2006 contando hoje com mais de 220 mil caixas de
                documentos armazenadas e 100 milhões de páginas digitalizadas.
              </p>

              <p className="text-lg text-muted-foreground mb-12 leading-relaxed dark:text-zinc-300">
                O Archio é uma aplicação em nuvem que traz conceitos inovadores
                na gestão de documentos, gestão de processos e gestão de
                contratos, permitindo total controle de seu acervo e das
                informações nele disponíveis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* CARD 1 */}
                <Card className="p-6 bg-white dark:bg-[#171717] border border-border dark:border-white/10">
                  <h3 className="font-bold text-lg text-primary mb-3 dark:text-white">
                    Nossa Missão
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-zinc-400">
                    Estruturar e permitir acesso às informações corporativas
                    quando elas forem necessárias, transformando processos
                    analógicos em digitais.
                  </p>
                </Card>

                {/* CARD 2 */}
                <Card className="p-6 bg-white dark:bg-[#171717] border border-border dark:border-white/10">
                  <h3 className="font-bold text-lg text-primary mb-3 dark:text-white">
                    Nossa Visão
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-zinc-400">
                    Prestar serviços com foco na excelência, disponibilizando as
                    informações de forma segura e simples através de sistema
                    inovador e intuitivo.
                  </p>
                </Card>

                {/* CARD 3 */}
                <Card className="p-6 bg-white dark:bg-[#171717] border border-border dark:border-white/10">
                  <h3 className="font-bold text-lg text-primary mb-3 dark:text-white">
                    Nossos Valores
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2 dark:text-zinc-400">
                    <li>• Incansável busca pela perfeição</li>
                    <li>• Produtividade com qualidade</li>
                    <li>• Segurança e preservação de dados</li>
                    <li>• Integridade</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Clientes */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 dark:text-[oklch(0.90_0_0)] text-center">
              Depoimento de Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clientes.map((cliente, index) => (
                <Card key={index} className="p-6 border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {cliente.nome.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {cliente.nome}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cliente.empresa}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    "{cliente.depoimento}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(cliente.avaliacao)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section ref={contatoRef} className="py-16 md:py-24 bg-primary/5">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 dark:text-[oklch(0.90_0_0)] text-center">
              Entre em Contato
            </h2>

            <Card className="p-8 border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    placeholder="Assunto da mensagem"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Sua mensagem aqui..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
