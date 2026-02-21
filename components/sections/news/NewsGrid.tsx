"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  LayoutList,
} from "lucide-react";
import { news, newsCategories, NewsItem } from "@/constants/news";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export default function NewsGrid() {
  const t = useTranslations("news.grid");
  const tCategories = useTranslations("news.categories");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredNews = news.filter((item) => item.featured).slice(0, 1);
  const listNews =
    selectedCategory === "all" && currentPage === 1 && featuredNews[0]
      ? filteredNews.filter((n) => n.id !== featuredNews[0].id)
      : filteredNews;
  const totalPages = Math.ceil(listNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = listNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 relative bg-[#005A7A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          {/* Sidebar - Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <Input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-11 rounded-lg border-0 bg-white/15 text-white placeholder:text-white/60 focus:ring-2 focus:ring-[#d4af37]/50"
                />
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-3 flex items-center gap-2">
                  <LayoutList className="w-3.5 h-3.5" />
                  {t("allNews")}
                </h3>
                <nav className="flex flex-col gap-1">
                  {newsCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        "text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        selectedCategory === cat.id
                          ? "bg-[#722F37] text-white"
                          : "text-white/90 hover:bg-white/10"
                      )}
                    >
                      {tCategories(cat.id)}
                    </button>
                  ))}
                </nav>
              </div>
              {filteredNews.length > 0 && (
                <p className="text-xs text-white/60">
                  {t("found")} {filteredNews.length}{" "}
                  {filteredNews.length === 1 ? t("article") : t("articles")}
                </p>
              )}
            </div>
          </motion.aside>

          {/* Main - Content */}
          <div className="space-y-12 order-1 lg:order-2">
            {/* Featured - single large card (only on first page, all category) */}
            {featuredNews.length > 0 &&
              selectedCategory === "all" &&
              currentPage === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/news/${featuredNews[0].slug}`}>
                    <article className="group block rounded-2xl overflow-hidden bg-white/95 border border-white/20 shadow-xl hover:shadow-2xl hover:border-[#722F37]/40 transition-all">
                      <div className="grid md:grid-cols-2 gap-0">
                        {featuredNews[0].image && (
                          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
                            <Image
                              src={featuredNews[0].image}
                              alt={featuredNews[0].title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-4 left-4 bg-[#722F37] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3 fill-white" />
                              {t("featured")}
                            </span>
                          </div>
                        )}
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <span className="text-xs font-semibold uppercase text-[#722F37] mb-2">
                            {featuredNews[0].category}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#722F37] transition-colors mb-3 line-clamp-2">
                            {featuredNews[0].title}
                          </h2>
                          <p className="text-gray-600 line-clamp-3 mb-4">
                            {featuredNews[0].excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(featuredNews[0].date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                            {featuredNews[0].readTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {featuredNews[0].readTime} {t("min")}
                              </span>
                            )}
                          </div>
                          <span className="inline-flex items-center gap-2 text-[#722F37] font-semibold text-sm group-hover:gap-3 transition-all">
                            {t("readMore")}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              )}

            {/* List of news - list layout (image left, content right) */}
            {paginatedNews.length > 0 ? (
              <>
                <ul className="space-y-6">
                  {paginatedNews.map((item, index) => (
                    <NewsListItem key={item.id} item={item} index={index} t={t} />
                  ))}
                </ul>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 rounded-2xl bg-white/10 border border-white/20"
              >
                <p className="text-white/90 mb-4">{t("noResults")}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {t("clearFilters")}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsListItem({
  item,
  index,
  t,
}: {
  item: NewsItem;
  index: number;
  t: (key: string) => string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/news/${item.slug}`}>
        <article className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/95 border border-white/20 hover:border-[#722F37]/40 hover:shadow-lg transition-all">
          {item.image && (
            <div className="relative w-full sm:w-56 h-40 sm:h-36 shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.featured && (
                <span className="absolute top-2 left-2 bg-[#722F37] text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {t("featured")}
                </span>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-1">
              <span className="uppercase font-semibold text-[#722F37]">
                {item.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {item.readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.readTime} {t("min")}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#722F37] transition-colors line-clamp-2 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {item.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <User className="w-3.5 h-3.5" />
                {item.author}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#722F37] group-hover:gap-2 transition-all">
                {t("readMore")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.li>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 pt-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border-white/30 bg-white/95 hover:bg-white text-[#005A7A] disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-2 text-white/70">...</span>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={
                currentPage === page
                  ? "bg-[#722F37] hover:bg-[#5a252c] text-white border-[#722F37]"
                  : "rounded-lg border-white/30 bg-white/95 hover:bg-white text-[#005A7A]"
              }
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border-white/30 bg-white/95 hover:bg-white text-[#005A7A] disabled:opacity-50"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
