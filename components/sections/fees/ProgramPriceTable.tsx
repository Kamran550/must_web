"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap, BookOpen, Award, Laptop, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const programKeys = ["bachelors", "masters", "doctoral", "online"] as const;
const programConfig = [
  { annualFee: 4000, totalFee: 14000, popular: false, icon: GraduationCap },
  { annualFee: 4000, totalFee: 14000, popular: true, icon: BookOpen },
  { annualFee: 4000, totalFee: 14000, popular: false, icon: Award },
  { annualFee: 2800, totalFee: 8400, popular: false, icon: Laptop },
] as const;

export default function ProgramPriceTable() {
  const t = useTranslations("fees.priceTable");
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 relative bg-[#00304A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Stacked list - each program is a row that expands to show features */}
        <div className="space-y-3">
          {programKeys.map((key, index) => {
            const config = programConfig[index];
            const Icon = config.icon;
            const program = {
              ...config,
              name: t(`programs.${key}.name`),
              duration: t(`programs.${key}.duration`),
              features: t.raw(`programs.${key}.features`) as string[],
            };
            const isOpen = expandedId === index;

            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className={cn(
                  "rounded-xl border-2 overflow-hidden transition-all",
                  program.popular
                    ? "border-[#722F37] bg-white shadow-lg"
                    : "border-white/20 bg-white/95 hover:border-white/40"
                )}
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : index)}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-4 p-5 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#722F37]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#722F37]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{program.name}</h3>
                        {program.popular && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#722F37] text-white">
                            {t("mostPopular")}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{program.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#722F37]">
                        €{program.annualFee.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500">{t("year")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span>{t("total")} €{program.totalFee.toLocaleString()}</span>
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
                      />
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-gray-100 px-5 pb-5 pt-2"
                  >
                    <ul className="space-y-2">
                      {program.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-xl bg-white/10 border border-white/20 text-center"
        >
          <p className="text-sm text-white/90">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
