"use client";

import { motion } from "framer-motion";
import { applyInfo } from "@/constants/apply-info";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Check, ArrowRight, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ApplyCTA() {
  const t = useTranslations("cta");
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {/* Split layout - Contained card design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {t("title")}
            </h2>
            <div className="w-20 h-1 bg-[#722F37] rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              {t("description")}
            </p>

            {/* Benefits - List style instead of pills */}
            <ul className="space-y-4 mb-10">
              {applyInfo.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#722F37]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#722F37]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-[#722F37] hover:bg-[#5a252c] text-white text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
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
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-[#722F37] text-base px-8 py-6 rounded-xl"
              >
                <Link href="/programs">{t("learnMore")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right - Contained card with gradient background */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#4a1f24] p-8 md:p-12 lg:p-16 shadow-2xl">
              {/* Subtle pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1.5px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
                aria-hidden
              />

              {/* Content inside card */}
              <div className="relative z-10 text-white">
                {/* Logo or emblem area */}
                <div className="mb-8">
                  <Image
                    src="/images/MUST-logo-dark.png"
                    alt="MUST Logo"
                    width={180}
                    height={100}
                    className="object-contain h-16 w-auto opacity-95"
                  />
                </div>

                {/* Deadline highlight */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                  <div className="p-2 rounded-xl bg-amber-400/20 shrink-0">
                    <Calendar className="w-6 h-6 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80 mb-0.5">
                      Deadline
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {applyInfo.deadline}
                    </p>
                  </div>
                </div>

                <p className="text-white/90 text-sm md:text-base mb-8 max-w-sm">
                  {t("description")}
                </p>

                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-[#722F37] font-semibold rounded-xl hover:bg-white/95 transition-colors shadow-lg"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
