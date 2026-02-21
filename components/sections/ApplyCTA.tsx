"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, Sparkles, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ApplyCTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#00304A]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                {t("badge")}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              {t("title")}
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-xl mb-6">
              {t("description")}
            </p>
            <ul className="flex flex-wrap gap-3 mb-6">
              {[
                t("benefits.globallyRecognized"),
                t("benefits.experiencedFaculty"),
                t("benefits.modernCampus"),
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#d4af37]/20">
                  <Calendar className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-white/70">{t("deadlineLabel")}</p>
                  <p className="font-bold text-white">{t("deadline")}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-white/95 text-[#722F37] font-semibold rounded-xl gap-2"
                >
                  <Link href="/apply">
                    {t("button")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white rounded-xl"
                >
                  <Link href="/programs">{t("learnMore")}</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:shrink-0">
            <Image
              src="/images/MUST-logo-dark.png"
              alt="MUST Logo"
              width={180}
              height={99}
              className="object-contain h-11 w-auto opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
