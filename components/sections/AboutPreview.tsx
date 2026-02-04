"use client";

import { aboutPreviewData } from "@/constants/about";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Building2, Award, Globe, Users } from "lucide-react";

export default function AboutPreview() {
  const t = useTranslations("aboutPreview");
  
  const features = [
    { 
      icon: Building2, 
      label: t("features.modernCampus"),
      description: t("features.modernCampusDescription")
    },
    { 
      icon: Award, 
      label: t("features.excellence"),
      description: t("features.excellenceDescription")
    },
    { 
      icon: Globe, 
      label: t("features.international"),
      description: t("features.internationalDescription")
    },
    { 
      icon: Users, 
      label: t("features.community"),
      description: t("features.communityDescription")
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 relative bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-950/50 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 dark:bg-[#722F37]/20 border border-[#722F37]/20 mb-6">
            <span className="text-sm font-semibold text-[#722F37] dark:text-[#a04050] uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t("title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#722F37] via-[#d4af37] to-[#722F37] rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* Masonry-style card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Main image card - spans 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={aboutPreviewData.image}
                alt="MUST Campus"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                    <span className="text-sm font-medium text-[#d4af37]">{t("location")}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">{t("campusTitle")}</h3>
                  <p className="text-white/90 text-lg max-w-2xl">
                    {t("campusDescription")}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature cards */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#722F37]/50 dark:hover:border-[#722F37]/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#722F37]/10 to-[#722F37]/5 dark:from-[#722F37]/20 dark:to-[#722F37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#722F37] dark:text-[#a04050]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#722F37] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 md:mt-24 lg:mt-28"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t("additionalInfo.title")}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
              {t("additionalInfo.description")}
            </p>
            
            {/* Highlights grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#722F37]/30 dark:hover:border-[#722F37]/30 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="shrink-0 w-2 h-2 rounded-full bg-[#722F37] mt-2" />
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {t(`additionalInfo.highlights.${index}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#722F37] to-[#5a252c] hover:from-[#5a252c] hover:to-[#722F37] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {t("button")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
