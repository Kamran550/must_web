"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileText, CheckCircle, Calendar, GraduationCap } from "lucide-react";

export default function ApplyHero() {
  const t = useTranslations("apply.hero");

  return (
    <section className="relative w-full min-h-[65vh] pt-32 pb-20 overflow-hidden">
      {/* Maroon gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#3a191e]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-sm font-medium">
                {t("badge")}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <div className="w-20 h-1 bg-[#d4af37] rounded-full mb-6" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Right - Process steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="space-y-4">
              {[
                { icon: FileText, key: "step1" },
                { icon: GraduationCap, key: "step2" },
                { icon: Calendar, key: "step3" },
                { icon: CheckCircle, key: "step4" },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t(`steps.${item.key}.title`)}</div>
                    <div className="text-sm text-white/70">{t(`steps.${item.key}.desc`)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
