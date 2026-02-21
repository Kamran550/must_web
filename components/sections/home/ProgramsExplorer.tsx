"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { programs, categories } from "@/constants/programs";
import type { Program } from "@/constants/programs";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

const DISPLAY_COUNT = 6;

export default function ProgramsExplorer() {
  const t = useTranslations("home.programsExplorer");
  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return programs.slice(0, DISPLAY_COUNT);
    return programs
      .filter((p) => p.category === activeTab)
      .slice(0, DISPLAY_COUNT);
  }, [activeTab]);

  return (
    <section className="py-20 md:py-28 bg-[#005A7A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-white/90 max-w-xl">
            {t("subtitle")}
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat.id
                  ? "bg-[#722F37] text-white shadow-lg"
                  : "bg-white/95 text-[#005A7A] hover:bg-white border border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Program list */}
        <ul className="space-y-3">
          {filtered.map((program: Program, index: number) => (
            <motion.li
              key={program.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <Link
                href={`/programs/${program.id}`}
                className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/95 border border-white/30 hover:border-[#722F37] hover:shadow-lg transition-all group"
              >
                <div className="min-w-0">
                  <span className="text-xs font-medium text-[#722F37] uppercase tracking-wide">
                    {program.degree}
                  </span>
                  <h3 className="font-semibold text-[#005A7A] truncate mt-0.5">
                    {program.title}
                  </h3>
                  <p className="text-sm text-neutral-600 truncate mt-1">
                    {program.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#722F37] shrink-0" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
          >
            {t("viewAll")}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
