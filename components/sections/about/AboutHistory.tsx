"use client";

import { motion } from "framer-motion";
import { Calendar, BookOpen, Users, Award, GraduationCap, History } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const milestoneYears = ["2020", "2021", "2022", "2023"] as const;
const milestoneIcons = [BookOpen, GraduationCap, Award, Users] as const;

export default function AboutHistory() {
  const t = useTranslations("about.history");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23722F37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
            <History className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#722F37]">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          {/* Timeline line */}
          <div className="relative h-1 bg-linear-to-r from-[#722F37] via-[#d4af37] to-[#722F37] rounded-full mb-8">
            {/* Year dots */}
            <div className="absolute inset-0 flex justify-between items-center">
              {milestoneYears.map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-6 h-6 rounded-full bg-[#722F37] border-4 border-white dark:border-slate-900 shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline cards */}
          <div className="grid grid-cols-4 gap-6">
            {milestoneYears.map((year, index) => {
              const Icon = milestoneIcons[index];

              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 hover:border-[#722F37]/30 shadow-lg hover:shadow-xl transition-all h-full">
                    {/* Year badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-[#722F37]" />
                      <span className="text-sm font-bold text-[#722F37] bg-[#722F37]/10 px-3 py-1 rounded-full">
                        {year}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[#722F37]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#722F37]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#722F37] transition-colors">
                      {t(`milestones.${year}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t(`milestones.${year}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6 mb-16">
          {milestoneYears.map((year, index) => {
            const Icon = milestoneIcons[index];

            return (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-4 group"
              >
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#722F37] flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {index < milestoneYears.length - 1 && (
                    <div className="w-0.5 flex-1 bg-linear-to-b from-[#722F37] to-[#d4af37]/30 my-2" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 pb-6">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-lg">
                    <span className="text-xs font-bold text-[#722F37] bg-[#722F37]/10 px-2 py-1 rounded-full">
                      {year}
                    </span>
                    <h3 className="text-lg font-bold mt-3 mb-2 text-gray-900 dark:text-white">
                      {t(`milestones.${year}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`milestones.${year}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Campus Image with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/about-campus.png"
            alt="MUST Campus"
            width={1200}
            height={500}
            className="w-full h-[350px] md:h-[450px] object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#722F37]/80 via-transparent to-transparent" />

          {/* Floating stats on image */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { value: "2020", label: "Founded" },
                { value: "4+", label: "Years of Growth" },
                { value: "800+", label: "Students" },
                { value: "20+", label: "Programs" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
