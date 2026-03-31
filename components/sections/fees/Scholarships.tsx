"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 relative bg-[#00304A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* List */}
          <div className="space-y-2">
            {scholarshipKeys.map((key, index) => {
              const Icon = scholarshipIcons[index];
              const name = t(`items.${key}.name`);
              const coverage = scholarshipCoverages[index];
              const isSelected = selectedIndex === index;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all",
                    isSelected
                      ? "bg-white/95 text-[#005A7A] shadow-lg border-2 border-[#722F37]"
                      : "bg-white/10 text-white border-2 border-transparent hover:bg-white/20"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                      isSelected ? "bg-[#722F37]/10" : "bg-white/20"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isSelected ? "text-[#722F37]" : "text-white")} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{name}</p>
                    <p className={cn("text-xs", isSelected ? "text-gray-500" : "text-white/70")}>
                      {coverage} {t("coverage")}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn("w-4 h-4 shrink-0", isSelected ? "text-[#722F37]" : "text-white/60")}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            {scholarshipKeys.map((key, index) => {
              if (index !== selectedIndex) return null;
              const Icon = scholarshipIcons[index];
              const deadline = scholarshipDeadlines[index];
              const coverage = scholarshipCoverages[index];
              const scholarship = {
                name: t(`items.${key}.name`),
                description: t(`items.${key}.description`),
                eligibility: t.raw(`items.${key}.eligibility`) as string[],
              };

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border-2 border-white/20 bg-white/95 p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#722F37]/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#722F37]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{scholarship.name}</h3>
                        <p className="text-2xl font-bold text-[#722F37]">{coverage}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{scholarship.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#722F37] rounded-full" />
                      {t("eligibility")}
                    </h4>
                    <ul className="space-y-2">
                      {scholarship.eligibility.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#722F37] shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {t("applicationDeadline")}: <strong className="text-gray-700">{deadline}</strong>
                    </div>
                    <Button asChild size="sm" className="bg-[#722F37] hover:bg-[#5a252c] rounded-lg gap-1">
                      <Link href="#">
                        {t("apply")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
