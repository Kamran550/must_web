"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_IMAGES = [
  "/images/University-01.jpg",
  "/images/queens-university.jpeg",
  "/images/about-campus.png",
  "/images/hero-campus.jpg",
];

const AUTOPLAY_MS = 5000;

export default function HeroSplit() {
  const t = useTranslations("hero");
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % SLIDE_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="min-h-[90vh] flex flex-col lg:flex-row bg-neutral-50 dark:bg-neutral-950">
      {/* Left: copy */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24 order-2 lg:order-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#722F37] dark:text-[#c45c6a] mb-6">
          Mazovia University of Science and Technology
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-white leading-[1.1] tracking-tight max-w-xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#722F37] hover:bg-[#5a252c] text-white font-semibold px-8"
          >
            <Link href="#" className="inline-flex items-center gap-2">
              {t("primaryButton")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-md border-2 border-neutral-300 dark:border-neutral-700 font-semibold px-8"
          >
            <Link href="/programs">{t("secondaryButton")}</Link>
          </Button>
        </div>
      </div>

      {/* Right: animated slider */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-[90vh] order-1 lg:order-2">
        <div className="absolute inset-0 lg:left-0 lg:right-0 lg:top-0 lg:bottom-0 lg:pl-8 lg:pt-8 lg:pb-8 lg:pr-0">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-t-2xl lg:rounded-l-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            {SLIDE_IMAGES.map((src, index) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  zIndex: index === activeIndex ? 1 : 0,
                }}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={src}
                  alt={`MUST Campus ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Prev / Next */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {SLIDE_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === activeIndex ? "white" : "rgba(255,255,255,0.4)",
                    transform: index === activeIndex ? "scale(1.25)" : "scale(1)",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
