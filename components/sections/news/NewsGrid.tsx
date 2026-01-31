"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
} from "lucide-react";
import { news, newsCategories, NewsItem } from "@/constants/news";
import { useTranslations } from "next-intl";

const ITEMS_PER_PAGE = 6;

export default function NewsGrid() {
  const t = useTranslations("news.grid");
  const tCategories = useTranslations("news.categories");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter news based on category and search
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

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, endIndex);

  // Featured news
  const featuredNews = news.filter((item) => item.featured).slice(0, 2);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23722F37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Featured Section */}
        {featuredNews.length > 0 &&
          selectedCategory === "all" &&
          currentPage === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
                  <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                  <span className="text-sm font-medium text-[#722F37]">Featured</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  {t("featuredNews")}
                </h2>
                <div className="w-16 h-1 bg-[#722F37] rounded-full mt-3" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {featuredNews.map((item, index) => (
                  <FeaturedNewsCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          )}

        {/* Title & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">{t("allNews")}</h2>
              <div className="w-16 h-1 bg-[#722F37] rounded-full" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {newsCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? "bg-[#722F37] hover:bg-[#5a252c] text-white border-[#722F37]"
                        : "border-gray-300 dark:border-slate-700 hover:border-[#722F37] hover:bg-[#722F37]/5"
                    }
                  >
                    {tCategories(category.id)}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          {filteredNews.length > 0 && (
            <div className="text-sm text-muted-foreground mb-6">
              {t("found")} {filteredNews.length}{" "}
              {filteredNews.length === 1 ? t("article") : t("articles")}
            </div>
          )}
        </motion.div>

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {paginatedNews.map((item, index) => (
                <NewsCard key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Pagination */}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center py-16"
          >
            <p className="text-lg text-muted-foreground mb-4">
              {t("noResults")}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              {t("clearFilters")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FeaturedNewsCard({ item, index }: { item: NewsItem; index: number }) {
  const t = useTranslations("news.grid");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link href={`/news/${item.slug}`}>
        <Card className="h-full shadow-lg hover:shadow-2xl transition-all border-2 border-[#722F37]/30 overflow-hidden cursor-pointer group-hover:border-[#722F37] bg-white dark:bg-slate-900">
          {item.image && (
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#722F37] text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-white" />
                  {t("featured")}
                </span>
              </div>
            </div>
          )}
          <CardHeader>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
              <span className="uppercase font-semibold px-2 py-1 bg-[#722F37]/10 text-[#722F37] rounded">
                {item.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {item.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.readTime} {t("min")}
                </div>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#722F37] transition-colors line-clamp-2">
              {item.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {item.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{item.author}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 group-hover:gap-3 transition-all"
              >
                {t("readMore")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const t = useTranslations("news.grid");
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <Link href={`/news/${item.slug}`}>
        <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all overflow-hidden cursor-pointer border-2 border-gray-200 dark:border-slate-700 group-hover:border-[#722F37] bg-white dark:bg-slate-900">
          {item.image && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {item.featured && (
                <div className="absolute top-3 left-3">
                  <span className="bg-[#722F37] text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                    {t("featured")}
                  </span>
                </div>
              )}
            </div>
          )}
          <CardHeader className="flex-1">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
              <span className="uppercase font-semibold px-2 py-1 bg-[#722F37]/10 text-[#722F37] rounded">
                {item.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#722F37] transition-colors line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {item.excerpt}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <User className="w-3 h-3" />
                <span>{item.author}</span>
              </div>
              {item.readTime && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>
                    {item.readTime} {t("min")}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
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
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
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
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-2 text-muted-foreground">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              className={
                currentPage === page
                  ? "bg-[#722F37] hover:bg-[#5a252c] text-white border-[#722F37]"
                  : "border-gray-300 dark:border-slate-700 hover:border-[#722F37]"
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
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
