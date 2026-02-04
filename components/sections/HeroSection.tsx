"use client";

import { heroData } from "@/constants/hero";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-24 md:pt-28 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.backgroundImage}
          alt="MUST Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#722F37]/20 via-transparent to-[#d4af37]/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#722F37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      </div>

      {/* Centered content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-white font-semibold text-sm">
            EST 2020 • Warsaw, Poland
          </span>
          <MapPin className="w-4 h-4 text-[#d4af37]" />
        </motion.div>

        {/* Title - Centered, larger */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Accent line - Centered */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-32 h-1.5 bg-gradient-to-r from-[#722F37] via-[#d4af37] to-[#722F37] rounded-full mx-auto mb-8"
        />

        {/* Subtitle - Centered */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          {t("subtitle")}
        </motion.p>

        {/* Buttons - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="group bg-linear-to-r from-[#722F37] to-[#5a252c] hover:from-[#5a252c] hover:to-[#722F37] text-white text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[#722F37]/50 transition-all border-0 font-bold"
          >
            <Link href="/apply" className="flex items-center gap-3">
              {t("primaryButton")}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-lg px-10 py-7 rounded-full backdrop-blur-sm font-semibold"
          >
            <Link href="/programs" className="flex items-center gap-2 ">
              {t("secondaryButton")}
            </Link>
          </Button>
        </motion.div>

        {/* Quick stats - Floating cards at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Programs", value: "50+" },
            { label: "Students", value: "2000+" },
            { label: "Faculty", value: "150+" },
            { label: "Years", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
