"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Banknote, Award } from "lucide-react";

export default function TuitionScholarship() {
  const t = useTranslations("home.tuitionScholarship");

  return (
    <section className="py-20 md:py-28 bg-[#005A7A]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Link
              href="/fees"
              className="block h-full p-8 rounded-2xl bg-white/95 border-2 border-white/30 hover:border-[#722F37] hover:shadow-xl transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#722F37]/10 w-fit mb-6">
                <Banknote className="w-8 h-8 text-[#722F37]" />
              </div>
              <h3 className="text-xl font-bold text-[#005A7A] mb-2">
                {t("tuition.title")}
              </h3>
              <p className="text-neutral-600 mb-4">
                {t("tuition.description")}
              </p>
              <span className="text-[#722F37] font-semibold group-hover:underline">
                {t("tuition.link")} →
              </span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <Link
              href="/fees#scholarships"
              className="block h-full p-8 rounded-2xl bg-white/95 border-2 border-white/30 hover:border-[#722F37] hover:shadow-xl transition-all group"
            >
              <div className="p-3 rounded-xl bg-[#722F37]/10 w-fit mb-6">
                <Award className="w-8 h-8 text-[#722F37]" />
              </div>
              <h3 className="text-xl font-bold text-[#005A7A] mb-2">
                {t("scholarships.title")}
              </h3>
              <p className="text-neutral-600 mb-4">
                {t("scholarships.description")}
              </p>
              <span className="text-[#722F37] font-semibold group-hover:underline">
                {t("scholarships.link")} →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
