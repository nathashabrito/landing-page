# Archio Landing Page

Uma landing page profissional e moderna para **Archio**, solução em nuvem para gestão inteligente de documentos, processos e contratos.

## 🎯 Visão Geral

A Archio Landing Page é uma aplicação front-end desenvolvida com **React 19**, **Tailwind CSS 4** e componentes **shadcn/ui**. A página apresenta um design limpo e profissional com paleta de cores em azul marinho, vermelho e branco, totalmente responsiva para dispositivos móveis, tablets e desktops.

### Características Principais

- ✨ **Design Profissional**: Paleta de cores cuidadosamente escolhida (azul marinho, vermelho, branco)
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🎠 **Carrossel Interativo**: Exibe imagens e vídeos com controles de navegação e autoplay
- 🧩 **Componentes shadcn/ui**: Utiliza componentes bem estruturados e acessíveis
- ⚡ **Performance Otimizada**: Construído com Vite para desenvolvimento rápido
- 🎨 **Tailwind CSS 4**: Estilização moderna com design tokens personalizados
- ♿ **Acessibilidade**: Componentes com suporte a navegação por teclado e leitores de tela

## 📋 Estrutura do Projeto

```
archio-landing/
├── client/
│   ├── public/                 # Ativos estáticos (imagens, vídeos)
│   │   ├── PNG-05-main.png    # Logo Archio
│   │   ├── site_2_gestao_processos.png
│   │   ├── WhatsAppVideo2025-11-21at12.46.47.mp4
│   │   └── WhatsAppVideo2025-11-21at12.46.34.mp4
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── Carousel.tsx   # Carrossel de imagens e vídeos
│   │   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   │   ├── Footer.tsx     # Rodapé
│   │   │   └── ui/            # Componentes shadcn/ui
│   │   ├── pages/
│   │   │   ├── Home.tsx       # Página principal (landing page)
│   │   │   └── NotFound.tsx   # Página 404
│   │   ├── contexts/          # Contextos React
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/               # Utilitários
│   │   ├── App.tsx            # Componente raiz
│   │   ├── main.tsx           # Ponto de entrada
│   │   ├── const.ts           # Constantes (APP_LOGO, APP_TITLE)
│   │   └── index.css          # Estilos globais
│   ├── index.html             # HTML principal
│   └── vite.config.ts         # Configuração Vite
├── shared/
│   └── const.ts               # Constantes compartilhadas
├── server/                    # Placeholder para compatibilidade
├── package.json               # Dependências do projeto
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.ts         # Configuração Tailwind CSS
└── README.md                  # Este arquivo
```

## 🚀 Começando

### Pré-requisitos

- Node.js 22.13.0 ou superior
- pnpm (gerenciador de pacotes)

### Instalação

1. **Clone ou acesse o projeto:**
```bash
cd archio-landing
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
```

Os arquivos otimizados estarão em `dist/`

## 📄 Seções da Landing Page

### 1. **Hero Section**
- Título principal: "Gestão Inteligente de Informações"
- Subtítulo descritivo
- Carrossel interativo com imagens e vídeos

### 2. **Nossas Soluções**
Apresenta três produtos principais:
- **Gestão de Documentos Inteligente**: Gerencie documentos físicos e eletrônicos
- **Gestão de Processos (Workflows)**: Automatize e gerencie processos
- **Gestão de Contratos**: Colete assinaturas e gerencie contratos

### 3. **Inteligência Artificial**
- **Automação de Processos com IA**: Indexação, OCR, assinatura digital
- **Análise com IA**: Insights, sumarização e métricas

### 4. **Destaques**
6 cards destacando funcionalidades:
- ⚙️ Configuração
- ⚡ Inteligência Artificial
- 🔒 Retenção
- 🛡️ Segurança
- 💾 Preservação
- 👥 Treinamento

### 5. **Quem Somos**
- Histórico da empresa
- Missão, Visão e Valores
- Informações sobre a SMARTSCAN

### 6. **Depoimento de Clientes**
- 3 cards com depoimentos de clientes
- Avaliações em estrelas

### 7. **Entre em Contato**
- Formulário com campos: Nome, Email, Assunto, Mensagem
- Utiliza componentes shadcn/ui (Input, Textarea, Button)

## 🎨 Design e Cores

### Paleta de Cores

| Cor | Valor OKLCH | Uso |
|-----|-------------|-----|
| Azul Marinho | `oklch(0.25 0.15 240)` | Primária, textos, botões |
| Vermelho | `oklch(0.6 0.2 15)` | Secundária, acentos |
| Branco | `oklch(0.99 0.001 0)` | Fundo, texto claro |
| Cinza Claro | `oklch(0.9 0.01 0)` | Backgrounds secundários |

### Tipografia

- **Fonte Principal**: Sistema de fontes padrão (sans-serif)
- **Tamanhos**: Responsivos com breakpoints MD e LG
- **Pesos**: Regular (400), Medium (500), Bold (700)

## 🧩 Componentes Principais

### Carousel
Componente customizado para exibir imagens e vídeos:
```tsx
<Carousel 
  items={carouselItems} 
  autoPlayInterval={6000} 
/>
```

**Funcionalidades:**
- Navegação anterior/próximo
- Indicadores de slide
- Autoplay com intervalo configurável
- Pause ao passar o mouse
- Suporte a imagens e vídeos

### Header
Cabeçalho responsivo com navegação:
- Menu desktop com links de navegação
- Menu mobile com Sheet (drawer)
- Botão de Login
- Logo Archio

### Footer
Rodapé com:
- Links para produtos e empresa
- Informações de contato
- Links de política e termos
- Copyright

### Cards de Destaques
Utiliza componente `Card` do shadcn/ui com:
- Ícone (Lucide Icons)
- Título
- Descrição
- Efeito hover

## 🔧 Componentes shadcn/ui Utilizados

- **Button**: Botões em toda a aplicação
- **Card**: Cards de destaques, depoimentos, formulário
- **Input**: Campo de texto no formulário
- **Textarea**: Campo de mensagem no formulário
- **Badge**: Destaque de seções
- **Separator**: Divisores no footer
- **Sheet**: Menu mobile (drawer)
- **Tooltip**: Dicas em elementos interativos
- **Sonner**: Notificações toast

## 🎯 Navegação

A página utiliza scroll suave para navegação entre seções:

```tsx
const handleNavClick = (section: string) => {
  switch (section) {
    case "produtos":
      produtosRef.current?.scrollIntoView({ behavior: "smooth" });
      break;
    // ...
  }
};
```

Seções navegáveis:
- Produtos
- Conteúdo (placeholder)
- Quem Somos
- Clientes
- Contato

## 📱 Responsividade

A página é otimizada para:
- **Mobile**: < 640px (padding: 1rem)
- **Tablet**: 640px - 1024px (padding: 1.5rem)
- **Desktop**: > 1024px (padding: 2rem, max-width: 1280px)

Breakpoints Tailwind utilizados:
- `md`: 768px
- `lg`: 1024px

## 🎬 Carrossel

O carrossel inclui:
- **1 imagem**: site_2_gestao_processos.png
- **2 vídeos**: WhatsAppVideo2025-11-21at12.46.47.mp4 e WhatsAppVideo2025-11-21at12.46.34.mp4

**Controles:**
- Botões anterior/próximo (aparecem ao passar o mouse)
- Indicadores de slide (clicáveis)
- Badge mostrando slide atual
- Autoplay com pausa ao interagir

## 🔐 Constantes

As constantes da aplicação são definidas em `client/src/const.ts`:

```typescript
export const APP_LOGO = "/PNG-05-main.png";
export const APP_TITLE = "Archio";
```

## 🧪 Desenvolvimento

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Linting (se configurado)
pnpm lint
```

### Estrutura de Componentes

Componentes são organizados em:
- `components/`: Componentes reutilizáveis (Header, Footer, Carousel)
- `components/ui/`: Componentes shadcn/ui
- `pages/`: Páginas da aplicação

### Adicionando Novos Componentes shadcn/ui

Para adicionar um novo componente shadcn/ui:

```bash
npx shadcn-ui@latest add [component-name]
```

Exemplo:
```bash
npx shadcn-ui@latest add dialog
```

## 🎨 Customização

### Alterar Logo

1. Coloque a nova imagem em `client/public/`
2. Atualize `APP_LOGO` em `client/src/const.ts`:
```typescript
export const APP_LOGO = "/novo-logo.png";
```

### Alterar Cores

Edite `client/src/index.css` na seção `:root`:

```css
:root {
  --primary: oklch(0.25 0.15 240); /* Azul Marinho */
  --secondary: oklch(0.6 0.2 15);  /* Vermelho */
  /* ... outras cores ... */
}
```

### Adicionar Novas Seções

1. Crie uma referência com `useRef`:
```tsx
const novaSecaoRef = useRef<HTMLDivElement>(null);
```

2. Adicione a seção no JSX:
```tsx
<section ref={novaSecaoRef} className="py-16 md:py-24">
  {/* Conteúdo */}
</section>
```

3. Adicione ao menu de navegação em `Header.tsx`

## 📦 Dependências Principais

- **React 19**: Framework UI
- **Tailwind CSS 4**: Estilização
- **shadcn/ui**: Componentes acessíveis
- **Lucide React**: Ícones
- **Wouter**: Roteamento leve
- **Vite**: Build tool

## 🚀 Deployment

A landing page está pronta para ser publicada. Para publicar:

1. Clique no botão **"Publish"** na interface de gerenciamento
2. A página estará disponível em um domínio público

## 📝 Licença

Este projeto é propriedade da Archio.

---

**Desenvolvido usando React, Tailwind CSS e shadcn/ui**

Última atualização: Novembro 2025
