"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

const coreValueKeys = ["excellence", "globalCitizenship", "diversity", "innovation", "ethicalLeadership"] as const;

export default function MissionVision() {
  const t = useTranslations("about.missionVision");

  return (
    <section className="py-16 md:py-24 bg-[#005A7A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-white/85 text-sm md:text-base">{t("subtitle")}</p>
        </motion.div>

        <div className="space-y-8">
          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-white/20 bg-white/95 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#722F37]/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#722F37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("mission.title")}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t("mission.description")}</p>
              </div>
            </div>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-white/20 bg-white/95 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#722F37]/10 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-[#722F37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("vision.title")}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{t("vision.description")}</p>
              </div>
            </div>
          </motion.article>

          {/* Core values - pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-white/20 bg-white/95 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-[#722F37]" />
              <h3 className="text-lg font-bold text-gray-900">{t("coreValues.title")}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreValueKeys.map((key) => (
                <span
                  key={key}
                  className="px-4 py-2 rounded-full bg-[#722F37]/10 text-[#722F37] text-sm font-medium"
                >
                  {t(`coreValues.items.${key}`)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
