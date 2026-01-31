"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Sparkles, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MissionVision() {
  const t = useTranslations("about.missionVision");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background pattern */}
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
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#722F37]">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Mission - Large card spanning 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <div className="h-full p-8 md:p-10 rounded-3xl bg-linear-to-br from-[#722F37] to-[#5a252c] shadow-xl group relative overflow-hidden">
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t("mission.title")}
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  {t("mission.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision - Card spanning 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5"
          >
            <div className="h-full p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:border-[#722F37]/30 group relative overflow-hidden">
              {/* Gold corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#722F37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-[#722F37]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("vision.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("vision.description")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values - Full width card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-12"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-linear-to-r from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 border-2 border-gray-100 dark:border-slate-700 shadow-lg group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left - Title and icon */}
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {t("coreValues.title")}
                  </h3>
                  <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                </div>

                {/* Right - Values grid */}
                <div className="lg:w-2/3">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "excellence",
                      "globalCitizenship",
                      "diversity",
                      "innovation",
                      "ethicalLeadership",
                    ].map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-[#722F37]/30 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#722F37]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-[#722F37]" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {t(`coreValues.items.${value}`)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
