"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const SLIDE_IMAGES = [
//   "/images/about-campus.png",
//   "/images/queens-university.jpeg",
//   "/images/University-01.jpg",
//   "/images/hero-campus.jpg",
// ];


const SLIDE_IMAGES = [
  "images/campus-1.jpg",
  "images/campus-2.jpg",
  "images/campus-3.jpg",
  "images/campus-4.jpg",
];





const SLIDE_INTERVAL_MS = 5000;

export default function HeroCentered() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % SLIDE_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="relative w-full min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-10rem)] overflow-hidden">
      {/* Full-bleed image slider – no text */}
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
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Prev / Next */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/55 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/55 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
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
              backgroundColor:
                index === activeIndex ? "white" : "rgba(255,255,255,0.45)",
              transform: index === activeIndex ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
