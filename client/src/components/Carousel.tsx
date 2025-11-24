import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export default function Carousel({
  items,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, items.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (items.length === 0) {
    return (
      <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
        Nenhum item no carrossel
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div
      className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-muted rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Conteúdo do Carrossel */}
      <div className="w-full h-full flex items-center justify-center bg-background">
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={currentItem.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
          />
        )}
      </div>

      {/* Botões de Navegação */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-full"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 rounded-full"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? "bg-white w-8 h-3"
                : "bg-white/50 hover:bg-white/75 w-3 h-3"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Tipo de Conteúdo Badge */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentItem.type === "image" ? "Imagem" : "Vídeo"} {currentIndex + 1} de{" "}
        {items.length}
      </div>
    </div>
  );
}
