"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  GraduationCap,
  Clock,
  ArrowRight,
  BookOpen,
  Star,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { programs, categories, Program } from "@/constants/programs";
import { useTranslations } from "next-intl";

export default function ProgramsGrid() {
  const t = useTranslations("programs.grid");
  const tCategories = useTranslations("programs.categories");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter programs based on category and search
  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        selectedCategory === "all" || program.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.degree.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23722F37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
                <BookOpen className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm font-medium text-[#722F37]">
                  Explore Programs
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                {t("title")}
              </h2>
              <div className="w-20 h-1 bg-[#722F37] rounded-full mb-4" />
              <p className="text-muted-foreground text-lg max-w-xl">
                {t("subtitle")}
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 border-gray-200 dark:border-slate-700 focus:border-[#722F37]"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#722F37] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-[#722F37]/10 hover:text-[#722F37]"
                }`}
              >
                {tCategories(category.id)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        {filteredPrograms.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-[#722F37]" />
            {t("found")} <strong>{filteredPrograms.length}</strong>{" "}
            {filteredPrograms.length === 1 ? t("programs") : t("programsPlural")}
          </motion.div>
        )}

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPrograms.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 px-6 rounded-3xl bg-gray-50 dark:bg-slate-900 border-2 border-dashed border-gray-200 dark:border-slate-700"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#722F37]/10 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#722F37]" />
            </div>
            <p className="text-lg text-muted-foreground mb-4">{t("noResults")}</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white"
            >
              {t("clearFilters")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const t = useTranslations("programs.grid");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Card
        className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl ${
          program.featured
            ? "border-2 border-[#722F37] shadow-xl"
            : "border-2 border-gray-100 dark:border-slate-800 hover:border-[#722F37]/30"
        }`}
      >
        {/* Featured banner */}
        {program.featured && (
          <div className="bg-linear-to-r from-[#722F37] to-[#5a252c] text-white text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2">
            <Star className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
            {t("featuredProgram")}
          </div>
        )}

        <CardHeader className="pb-4">
          {/* Category & Degree badge */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#722F37]/10 text-[#722F37]">
              {program.degree}
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5 text-[#722F37]" />
            </div>
          </div>

          <CardTitle className="text-xl font-bold mb-3 group-hover:text-[#722F37] transition-colors text-gray-900 dark:text-white">
            {program.title}
          </CardTitle>

          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-[#722F37]" />
            <span>{program.duration}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm line-clamp-3">
            {program.description}
          </p>

          {/* Features */}
          <div className="mb-5 flex-1">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#722F37]" />
              {t("keyFeatures")}
            </h4>
            <ul className="space-y-2">
              {program.features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6 pt-4 border-t border-gray-100 dark:border-slate-800">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#722F37]" />
              {t("careerPaths")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.career.slice(0, 2).map((career, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg"
                >
                  {career}
                </span>
              ))}
              {program.career.length > 2 && (
                <span className="text-xs text-[#722F37] font-medium">
                  +{program.career.length - 2} {t("more")}
                </span>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              className="flex-1 group/btn border-2 border-gray-200 dark:border-slate-700 hover:border-[#722F37] hover:text-[#722F37]"
            >
              <Link href={`/programs/${program.id}`}>
                {t("learnMore")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#722F37] hover:bg-[#5a252c] text-white shadow-lg"
            >
              <Link href="/apply">{t("apply")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
