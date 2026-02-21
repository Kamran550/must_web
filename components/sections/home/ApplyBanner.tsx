"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function ApplyBanner() {
  const t = useTranslations("cta");

  return (
    <section className="py-14 md:py-18 bg-[#722F37] text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            {t("title")}
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            {t("deadline")}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-white text-[#722F37] hover:bg-white/95 font-semibold rounded-md px-8 shrink-0"
        >
          <Link href="/apply" className="inline-flex items-center gap-2">
            {t("button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
