"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, MapPin, Calendar, Users } from "lucide-react";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  const stats = [
    { icon: Calendar, value: "2020", label: t("founded") },
    { icon: MapPin, value: t("locationValue"), label: t("location") },
    { icon: Users, value: "800+", label: t("students") },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#00304A]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-xs font-medium uppercase tracking-wider mb-6"
        >
          <Building2 className="w-3.5 h-3.5" />
          {t("badge")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <stat.icon className="w-5 h-5 text-[#d4af37]" />
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-white/70 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
