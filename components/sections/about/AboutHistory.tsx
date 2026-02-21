"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const milestoneYears = ["2020", "2021", "2022", "2023"] as const;
const milestoneIcons = [BookOpen, GraduationCap, Award, Users] as const;

export default function AboutHistory() {
  const t = useTranslations("about.history");

  return (
    <section className="py-16 md:py-24 bg-[#005A7A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-white/85 text-sm md:text-base">{t("subtitle")}</p>
        </motion.div>

        {/* Vertical timeline only */}
        <div className="space-y-0">
          {milestoneYears.map((year, index) => {
            const Icon = milestoneIcons[index];
            return (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative flex gap-6"
              >
                {/* Line */}
                {index < milestoneYears.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-white/30" />
                )}
                {/* Dot + icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center shrink-0 border-4 border-[#005A7A]">
                  <Icon className="w-5 h-5 text-[#005A7A]" />
                </div>
                {/* Card */}
                <div className="flex-1 pb-8">
                  <div className="rounded-xl bg-white/95 border border-white/30 p-5 shadow-lg">
                    <span className="inline-block text-xs font-bold text-[#722F37] bg-[#722F37]/10 px-2.5 py-1 rounded-full mb-3">
                      {year}
                    </span>
                    <h3 className="text-lg font-bold text-[#005A7A] mb-2">{t(`milestones.${year}.title`)}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{t(`milestones.${year}.description`)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width image block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/about-campus.png"
            alt="MUST Campus"
            width={1200}
            height={500}
            className="w-full h-[280px] md:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#005A7A]/60 to-transparent pointer-events-none rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
