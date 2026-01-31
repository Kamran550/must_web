"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { DollarSign, TrendingDown, Award } from "lucide-react";

export default function FeesHero() {
  const t = useTranslations("fees.hero");

  return (
    <section className="relative w-full min-h-[60vh] pt-32 pb-20 overflow-hidden">
      {/* Maroon gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#4a1f24]" />
      
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      {/* Content - Split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <DollarSign className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-sm font-medium">
                Transparent Pricing
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

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: TrendingDown, label: "Flexible Plans", value: "4+" },
              { icon: Award, label: "Scholarships", value: "5+" },
              { icon: DollarSign, label: "Starting From", value: "€2,800" },
              { icon: Award, label: "Discount", value: "Up to 10%" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <item.icon className="w-8 h-8 text-[#d4af37] mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
