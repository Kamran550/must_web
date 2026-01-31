"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, GraduationCap, BookOpen, Award, Laptop } from "lucide-react";
import { useTranslations } from "next-intl";

const programKeys = ["bachelors", "masters", "doctoral", "online"] as const;
const programConfig = [
  { annualFee: 4000, totalFee: 14000, popular: false, icon: GraduationCap },
  { annualFee: 4000, totalFee: 14000, popular: true, icon: BookOpen },
  { annualFee: 4000, totalFee: 14000, popular: false, icon: Award },
  { annualFee: 2800, totalFee: 8400, popular: false, icon: Laptop },
] as const;

export default function ProgramPriceTable() {
  const t = useTranslations("fees.priceTable");

  return (
    <section className="py-24 md:py-32 relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23722F37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programKeys.map((key, index) => {
            const config = programConfig[index];
            const Icon = config.icon;
            const program = {
              ...config,
              name: t(`programs.${key}.name`),
              duration: t(`programs.${key}.duration`),
              features: t.raw(`programs.${key}.features`) as string[],
            };
            
            // Make popular item span 2 columns on large screens
            const isPopular = program.popular;
            
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative ${isPopular ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              >
                <Card
                  className={`h-full flex flex-col border-2 hover:shadow-xl transition-all duration-300 ${
                    isPopular
                      ? "border-[#722F37] bg-[#722F37]/5 dark:bg-[#722F37]/10"
                      : "border-gray-200 dark:border-slate-700 hover:border-[#722F37]/30"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-6 bg-[#722F37] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {t("mostPopular")}
                    </div>
                  )}
                  
                  <CardHeader className={`${isPopular ? 'lg:flex lg:flex-row lg:items-start lg:gap-8' : ''}`}>
                    <div className={`${isPopular ? 'lg:flex-1' : ''}`}>
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-[#722F37]/10 dark:bg-[#722F37]/20 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-[#722F37]" />
                      </div>
                      
                      <CardTitle className="text-xl md:text-2xl font-bold mb-2">
                        {program.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-4">
                        {program.duration}
                      </p>
                    </div>
                    
                    {/* Pricing */}
                    <div className={`${isPopular ? 'lg:text-right' : ''}`}>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold text-[#722F37]">
                          €{program.annualFee.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {t("year")}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("total")}: <span className="font-semibold text-gray-900 dark:text-white">€{program.totalFee.toLocaleString()}</span>
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className={`flex-1 ${isPopular ? 'lg:grid lg:grid-cols-2 lg:gap-6' : ''}`}>
                    <ul className="space-y-3">
                      {program.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="shrink-0 w-5 h-5 rounded-full bg-[#722F37]/10 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-[#722F37]" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 p-6 rounded-2xl bg-[#722F37]/5 border border-[#722F37]/10"
        >
          <p className="text-sm text-muted-foreground text-center">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
