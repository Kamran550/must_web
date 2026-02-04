"use client";

import { motion } from "framer-motion";
import { applyInfo } from "@/constants/apply-info";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Check, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ApplyCTA() {
  const t = useTranslations("cta");
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#722F37]/10 via-white to-[#d4af37]/10 dark:from-[#722F37]/20 dark:via-black dark:to-[#d4af37]/20" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#722F37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered card design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-[#722F37] via-[#5a252c] to-[#4a1f24] rounded-3xl lg:rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">
                    {t("badge")}
                  </span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {t("title")}
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[#d4af37] via-white/30 to-[#d4af37] rounded-full mx-auto mb-6" />
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  {t("description")}
                </p>
              </div>

              {/* Benefits grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  t("benefits.globallyRecognized"),
                  t("benefits.experiencedFaculty"),
                  t("benefits.modernCampus"),
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Deadline and CTA */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                {/* Deadline */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#d4af37]/20 shrink-0">
                    <Calendar className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-1">
                      {t("deadlineLabel")}
                    </p>
                    <p className="text-xl font-bold text-white">
                      {t("deadline")}
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-white hover:bg-white/95 text-[#722F37] font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Link href="/apply" className="flex items-center gap-2">
                      {t("button")}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-full backdrop-blur-sm"
                  >
                    <Link href="/programs">{t("learnMore")}</Link>
                  </Button>
                </div>
              </div>

              {/* Logo at bottom */}
              <div className="mt-12 flex justify-center">
                <Image
                  src="/images/MUST-logo-dark.png"
                  alt="MUST Logo"
                  width={200}
                  height={110}
                  className="object-contain h-12 w-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
}
