"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileCheck, Send, ClipboardCheck, GraduationCap } from "lucide-react";

const steps = [
  { key: "apply", icon: FileCheck },
  { key: "submit", icon: Send },
  { key: "review", icon: ClipboardCheck },
  { key: "enroll", icon: GraduationCap },
];

export default function AdmissionSteps() {
  const t = useTranslations("home.admissionSteps");

  return (
    <section className="py-20 md:py-28 bg-[#005A7A]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-white/90 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </header>

        <div className="relative">
          {/* Connector line - desktop */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/30"
            style={{ top: "2rem" }}
            aria-hidden
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#722F37] text-white flex items-center justify-center relative z-10 mb-4 shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-bold text-[#d4af37] mb-1">
                    {t("stepLabel", { number: index + 1 })}
                  </span>
                  <h3 className="font-semibold text-white mb-1">
                    {t(`${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-white/80">
                    {t(`${step.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
