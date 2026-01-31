"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

const valueKeys = [
  "academicExcellence",
  "globalPerspective",
  "inclusiveCommunity",
  "innovation",
  "integrity",
  "excellence",
] as const;

const valueIcons = [
  GraduationCap,
  Globe,
  Users,
  Lightbulb,
  Shield,
  Award,
] as const;

export default function UniversityValues() {
  const t = useTranslations("about.values");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#4a1f24]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="w-4 h-4 text-[#d4af37]" />
            <span className="text-white/90 text-sm font-medium">What We Stand For</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] rounded-full mx-auto mb-4" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Values Grid - Staggered layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[index];
            // Make some cards span 2 columns for visual interest
            const isWide = index === 0 || index === 3;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group ${isWide ? "lg:col-span-2" : ""}`}
              >
                <div className="h-full p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon container */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af37]/30 transition-all">
                        <Icon className="w-8 h-8 text-[#d4af37]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {t(`items.${key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/50 rounded-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-sm text-white/70">Core Values Guiding Our Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
