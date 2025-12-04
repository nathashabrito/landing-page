import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CarouselItem {
  type: "image" | "video";
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ctaText?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlayInterval = 6000 }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [prog, setProg] = useState(0);

  const next = useCallback(() => {
    setIdx((p) => (p + 1) % items.length);
    setProg(0);
  }, [items.length]);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setProg((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (100 / (autoPlayInterval / 100));
      });
    }, 100);
    return () => clearInterval(t);
  }, [playing, autoPlayInterval, next]);

  const item = items[idx];
  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full bg-zinc-900 h-[500px] md:h-[600px] lg:h-[700px] group overflow-hidden">
      {/* Camada de Mídia (Imagem/Vídeo) */}
      <div className="absolute inset-0">
        {items.map((it, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {it.type === "image" ? (
              <img src={it.src} alt={it.alt} className="w-full h-full object-cover" />
            ) : (
              <video
                src={it.src}
                className="w-full h-full object-cover"
                autoPlay={i === idx && playing}
                muted
                loop
                playsInline
              />
            )}
            {/* Overlay Escuro para melhorar leitura do texto (opcional) */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Card de Conteúdo (Sem fundo branco) - SÓ RENDERIZA SE FOR IMAGEM */}
      {item.type === 'image' && (
        <div className="absolute z-20 bottom-0 md:top-1/2 md:-translate-y-1/2 left-0 md:left-12 lg:left-24 w-full md:w-[400px] lg:w-[480px] p-6 md:p-0">
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 flex flex-col gap-4">
            
            {/* Título: Usa title OU alt se o title não existir */}
            {(item.title || item.alt) && (
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                {item.title || item.alt}
              </h2>
            )}
            
            {/* Descrição: Só renderiza se existir item.description explicitamente */}
            {item.description && (
              <p className="text-zinc-100 line-clamp-3 drop-shadow-md leading-relaxed">
                {item.description}
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <Button className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                {item.ctaText || "Saiba Mais"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navegação Lateral (Setas) */}
      <div className="hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 border-none h-12 w-12"
          onClick={() => {
            setIdx((idx - 1 + items.length) % items.length);
            setPlaying(false);
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/10 text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 border-none h-12 w-12"
          onClick={() => {
            next();
            setPlaying(false);
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>

      {/* Controles Inferiores (Play/Pause e Barra de Progresso) */}
      <div className="absolute z-30 bottom-8 w-full py-4 flex justify-center gap-4">
        <button
          onClick={() => setPlaying(!playing)}
          className="text-white hover:scale-110 transition-transform focus:outline-none"
        >
          {playing ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="flex gap-3 items-center">
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              className="h-1.5 w-12 rounded-full bg-white/20 overflow-hidden cursor-pointer backdrop-blur-sm"
            >
              <div
                className={`h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-100 linear ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: i === idx ? `${prog}%` : "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}