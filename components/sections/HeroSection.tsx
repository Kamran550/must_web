"use client";

import { heroData } from "@/constants/hero";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section className="relative w-full min-h-[90vh] pt-24 md:pt-28 lg:pt-0">
      {/* Split Layout - Image Right on Desktop */}
      <div className="flex flex-col lg:flex-row min-h-[calc(90vh-6rem)]">
        {/* Left - Content */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 w-fit mb-6 px-4 py-2 rounded-full bg-[#722F37]/10 dark:bg-[#722F37]/20 border border-[#722F37]/30"
          >
            <span className="text-[#722F37] dark:text-[#a04050] font-semibold text-sm">
              EST 2020 • Warsaw
            </span>
            <MapPin className="w-4 h-4 text-[#722F37]" />
          </motion.div>

          {/* Title - Left aligned, larger typography */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-5 leading-[1.1] tracking-tight max-w-2xl"
          >
            {t("title")}
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-[#722F37] rounded-full mb-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* Buttons - Stacked or inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-[#722F37] hover:bg-[#5a252c] text-white text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/apply" className="flex items-center gap-2">
                {t("primaryButton")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-[#722F37] hover:bg-[#722F37]/5 text-base px-8 py-6 rounded-xl"
            >
              <Link href="/programs">{t("secondaryButton")}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right - Image with overlay card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:w-[55%] xl:w-[50%] min-h-[400px] lg:min-h-full"
        >
          <div className="absolute inset-0">
            <Image
              src={heroData.backgroundImage}
              alt="MUST Campus"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Overlay - subtle gradient edge */}
            <div
              className="absolute inset-0 bg-linear-to-r from-transparent to-black/30 lg:to-[#722F37]/25"
              aria-hidden
            />
          </div>

          {/* Floating card on image - visible on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block absolute bottom-8 left-8 right-8 xl:right-auto xl:max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20"
          >
            <p className="text-sm font-medium text-[#722F37] mb-1">
              Spring 2026 Intake
            </p>
            <p className="text-gray-900 dark:text-white font-semibold text-lg">
              Admissions now open
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-1 text-[#722F37] font-medium mt-2 hover:gap-2 transition-all"
            >
              Apply today <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
