"use client";

import { aboutPreviewData } from "@/constants/about";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen } from "lucide-react";

export default function AboutPreview() {
  const t = useTranslations("aboutPreview");
  return (
    <section className="py-24 md:py-32 overflow-x-hidden">
      {/* Bento-style layout with offset image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left - Content block with accent border */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col justify-center relative pl-0 lg:pl-8 border-l-0 lg:border-l-4 border-[#722F37]"
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-[#722F37]/10">
                <BookOpen className="w-5 h-5 text-[#722F37]" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#722F37]">
                EST 2020
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
              {t("title")}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              {t("description")}
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 w-fit px-6 py-4 bg-[#722F37] text-white rounded-xl font-semibold hover:bg-[#5a252c] transition-all shadow-lg hover:shadow-xl"
            >
              {t("button")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - Image with overlapping card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 relative mb-20 lg:mb-0 lg:pb-20"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={aboutPreviewData.image}
                alt="MUST Campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Gold accent corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-[#d4af37]/30 to-transparent"
                aria-hidden
              />
            </div>

            {/* Overlapping stats card - adds margin for spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-4 right-4 md:left-auto md:right-8 lg:right-12 md:w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-slate-800"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Warsaw, Poland
              </p>
              <p className="text-2xl font-bold text-[#722F37]">5+</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
