"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Target, Globe, Zap, Shield } from "lucide-react";

const icons = [Target, Globe, Zap, Shield];

export default function WhyMUST() {
  const t = useTranslations("home.whyMUST");
  const items = [
    { key: "excellence", icon: 0 },
    { key: "global", icon: 1 },
    { key: "innovation", icon: 2 },
    { key: "support", icon: 3 },
  ];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800">
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-white dark:bg-black p-8 md:p-10 flex gap-6"
              >
                <span className="text-5xl md:text-6xl font-black text-neutral-200 dark:text-neutral-800 tabular-nums shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#722F37]/10 dark:bg-[#722F37]/20">
                      <Icon className="w-5 h-5 text-[#722F37]" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {t(`${item.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {t(`${item.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
