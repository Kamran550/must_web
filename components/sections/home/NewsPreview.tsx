"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { news } from "@/constants/news";
import { useTranslations } from "next-intl";
import { Calendar, ArrowRight } from "lucide-react";

const PREVIEW_COUNT = 3;
const latest = news.slice(0, PREVIEW_COUNT);

export default function NewsPreview() {
  const t = useTranslations("home.newsPreview");
  const tCommon = useTranslations("common");

  return (
    <section className="py-20 md:py-28 bg-[#005A7A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t("title")}
            </h2>
            <p className="text-white/90">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors shrink-0"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <Link
                href={`/news/${item.slug}`}
                className="block group p-6 rounded-xl bg-white/95 border border-white/30 hover:border-[#722F37] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <h3 className="font-semibold text-[#005A7A] group-hover:text-[#722F37] transition-colors line-clamp-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-1 line-clamp-2 mb-3">
                  {item.excerpt}
                </p>
                <span className="inline-block text-sm font-medium text-[#722F37] group-hover:underline">
                  {tCommon("readMore")}
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
