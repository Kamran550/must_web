"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Rss } from "lucide-react";

export default function NewsHero() {
  const t = useTranslations("news.hero");

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#00304A]">
      {/* Diagonal accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#005A7A] to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-xs font-medium uppercase tracking-wider mb-6"
        >
          <Rss className="w-3.5 h-3.5" />
          {t("title").split(" ")[0]}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
      </div>
    </section>
  );
}
