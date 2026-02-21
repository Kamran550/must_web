"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CreditCard, Wallet, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const planKeys = [
  "fullPayment",
  "semesterPayment",
  "monthlyPayment",
  "installmentPlan",
] as const;
const planIcons = [DollarSign, Calendar, CreditCard, Wallet] as const;
const planDiscounts = ["10%", "5%", "0%", "Custom"] as const;
const planRecommended = [false, true, false, false] as const;

export default function PaymentPlans() {
  const t = useTranslations("fees.paymentPlans");
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-16 md:py-24 bg-[#005A7A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {planKeys.map((key, index) => {
            const Icon = planIcons[index];
            const plan = {
              name: t(`plans.${key}.name`),
              recommended: planRecommended[index],
            };
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeIndex === index
                    ? "bg-white text-[#005A7A] shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25"
                )}
              >
                <Icon className="w-4 h-4" />
                {plan.name}
                {plan.recommended && (
                  <span className="text-[10px] uppercase font-bold opacity-80">•</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {planKeys.map((key, index) => {
            if (index !== activeIndex) return null;
            const Icon = planIcons[index];
            const discount = planDiscounts[index];
            const recommended = planRecommended[index];
            const plan = {
              name: t(`plans.${key}.name`),
              description: t(`plans.${key}.description`),
              benefits: t.raw(`plans.${key}.benefits`) as string[],
            };

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border-2 border-white/30 bg-white/95 p-6 md:p-8 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#722F37]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#722F37]" />
                      </div>
                      {recommended && (
                        <span className="px-3 py-1 rounded-full bg-[#722F37] text-white text-xs font-semibold">
                          {t("recommended")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    {discount !== "Custom" ? (
                      <p className="text-3xl font-bold text-[#722F37]">
                        {discount} {t("off")}
                      </p>
                    ) : (
                      <p className="text-lg font-semibold text-[#722F37]">{t("customTerms")}</p>
                    )}
                  </div>
                  <ul className="space-y-2 md:max-w-xs">
                    {plan.benefits.map((benefit: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-[#722F37] shrink-0">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#722F37] hover:bg-[#5a252c] text-white rounded-xl gap-2"
          >
            <Link href="/contact">
              {t("contact")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
