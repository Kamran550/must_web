"use client";

import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const scholarshipKeys = [
  "academicExcellence",
  "meritBased",
  "needBased",
  "internationalStudents",
  "researchFellowships",
] as const;
const scholarshipIcons = [
  GraduationCap,
  Award,
  DollarSign,
  Users,
  TrendingUp,
] as const;
const scholarshipCoverages = [
  "50-100%",
  "25-75%",
  "30-80%",
  "40-60%",
  "Full Coverage",
] as const;
const scholarshipDeadlines = [
  "March 15, 2025",
  "April 1, 2025",
  "May 1, 2025",
  "March 30, 2025",
  "February 28, 2025",
] as const;

export default function Scholarships() {
  const t = useTranslations("fees.scholarships");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#722F37]/5 blur-3xl rounded-full" aria-hidden />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
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

        {/* Staggered grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {scholarshipKeys.map((key, index) => {
            const Icon = scholarshipIcons[index];
            const coverage = scholarshipCoverages[index];
            const deadline = scholarshipDeadlines[index];
            const scholarship = {
              name: t(`items.${key}.name`),
              description: t(`items.${key}.description`),
              eligibility: t.raw(`items.${key}.eligibility`) as string[],
            };
            
            // Stagger: first 2 normal, 3rd spans 2 cols on lg, then 2 more normal
            const isWide = index === 2;
            
            return (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${isWide ? 'lg:col-span-2' : ''}`}
              >
                <div className="group relative h-full rounded-2xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-[#722F37] hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gold accent corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                  
                  <div className={`p-6 ${isWide ? 'lg:flex lg:gap-8' : ''}`}>
                    {/* Header */}
                    <div className={`${isWide ? 'lg:flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#722F37]/10 dark:bg-[#722F37]/20 flex items-center justify-center group-hover:bg-[#722F37] group-hover:scale-110 transition-all">
                          <Icon className="w-7 h-7 text-[#722F37] group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#722F37]">
                            {coverage}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {t("coverage")}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {scholarship.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {scholarship.description}
                      </p>
                    </div>
                    
                    {/* Content */}
                    <div className={`${isWide ? 'lg:flex-1' : ''}`}>
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                          <span className="w-1 h-4 bg-[#722F37] rounded-full" />
                          {t("eligibility")}:
                        </h4>
                        <ul className="space-y-2">
                          {scholarship.eligibility.map((item: string, idx: number) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-[#722F37] mt-0.5 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Deadline */}
                      <div className="pt-4 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-xs">{t("applicationDeadline")}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {deadline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg" className="group bg-[#722F37] hover:bg-[#5a252c] text-white px-8 py-6 rounded-xl shadow-lg">
            <Link href="/apply" className="flex items-center gap-2">
              {t("apply")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
