"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Users, Lightbulb, Shield, Award } from "lucide-react";
import { useTranslations } from "next-intl";

const valueKeys = [
  "academicExcellence",
  "globalPerspective",
  "inclusiveCommunity",
  "innovation",
  "integrity",
  "excellence",
] as const;
const valueIcons = [GraduationCap, Globe, Users, Lightbulb, Shield, Award];

export default function UniversityValues() {
  const t = useTranslations("about.values");

  return (
    <section className="py-16 md:py-24 bg-[#00304A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-white/80 text-sm md:text-base">{t("subtitle")}</p>
        </motion.div>

        <ul className="space-y-4">
          {valueKeys.map((key, index) => {
            const Icon = valueIcons[index];
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{t(`items.${key}.title`)}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{t(`items.${key}.description`)}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
