"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, Wallet, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

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

  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title - centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#722F37] rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Horizontal timeline-style cards */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#722F37]/20 to-transparent" aria-hidden />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {planKeys.map((key, index) => {
              const Icon = planIcons[index];
              const discount = planDiscounts[index];
              const recommended = planRecommended[index];
              const plan = {
                name: t(`plans.${key}.name`),
                description: t(`plans.${key}.description`),
                benefits: t.raw(`plans.${key}.benefits`) as string[],
                recommended,
              };
              
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-[#722F37] items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#722F37]" />
                  </div>
                  
                  <div
                    className={`relative mt-8 lg:mt-12 rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                      recommended
                        ? "border-[#722F37] bg-[#722F37]/5 dark:bg-[#722F37]/10 shadow-lg"
                        : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-[#722F37]/30"
                    }`}
                  >
                    {recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#722F37] text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        {t("recommended")}
                      </div>
                    )}
                    
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#722F37]/10 dark:bg-[#722F37]/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[#722F37]" />
                    </div>
                    
                    {/* Discount badge */}
                    {discount !== "Custom" ? (
                      <div className="text-center mb-3">
                        <span className="text-3xl font-bold text-[#722F37]">{discount}</span>
                        <span className="text-sm text-muted-foreground ml-1">{t("off")}</span>
                      </div>
                    ) : (
                      <div className="text-center mb-3">
                        <span className="text-lg font-semibold text-[#722F37]">{t("customTerms")}</span>
                      </div>
                    )}
                    
                    <h3 className="text-lg font-bold text-center mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground text-center mb-6">
                      {plan.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {plan.benefits.map((benefit: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="text-[#722F37] mt-0.5 shrink-0">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="group bg-[#722F37] hover:bg-[#5a252c] text-white px-8 py-6 rounded-xl shadow-lg">
            <Link href="/contact" className="flex items-center gap-2">
              {t("contact")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
