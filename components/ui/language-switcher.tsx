"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
] as const;

type LanguageSwitcherProps = {
  variant?: "default" | "dark";
};

export function LanguageSwitcher({
  variant = "default",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    startTransition(() => {
      const segments = pathname.split("/");
      const pathWithoutLocale = segments.slice(2).join("/") || "";
      router.push(
        `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ""}`,
      );
      router.refresh();
      setIsOpen(false);
    });
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);
  const isDark = variant === "dark";

  return (
    <div className="relative">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          "group relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200",
          "outline-none ring-0 focus:outline-none focus:ring-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isDark
            ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 focus-visible:ring-white/40 shadow-lg backdrop-blur-sm"
            : "bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-[#722F37] focus-visible:ring-[#722F37]/30 shadow-md",
          isPending && "opacity-50 cursor-not-allowed",
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Globe Icon */}
        <Globe
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />

        {/* Current Language */}
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-wide",
            isDark ? "text-white" : "text-gray-900",
          )}
        >
          {currentLanguage?.code}
        </span>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180",
            isDark ? "text-white/70" : "text-gray-500",
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className={cn(
              "absolute top-full right-0 mt-2 z-50 min-w-[200px] rounded-xl shadow-2xl overflow-hidden",
              "animate-in fade-in-0 zoom-in-95 duration-200",
              isDark
                ? "bg-white/95 backdrop-blur-md border border-white/20"
                : "bg-white border-2 border-gray-200",
            )}
          >
            <div className="py-2">
              {languages.map((lang) => {
                const isActive = lang.code === locale;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150",
                      "hover:bg-gray-100 focus:bg-gray-100 outline-none ring-0",
                      "focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#722F37]/40 focus-visible:ring-inset",
                      isActive && "bg-[#722F37]/10",
                    )}
                  >
                    {/* Flag */}
                    <span className="text-xl leading-none">{lang.flag}</span>

                    {/* Language Info */}
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <div
                          className={cn(
                            "text-sm font-semibold",
                            isActive ? "text-[#722F37]" : "text-gray-900",
                          )}
                        >
                          {lang.label}
                        </div>
                        <div className="text-xs text-gray-500 uppercase">
                          {lang.code}
                        </div>
                      </div>

                      {/* Check Icon */}
                      {isActive && <Check className="w-4 h-4 text-[#722F37]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
