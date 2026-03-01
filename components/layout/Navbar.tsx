"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return <Navbar />;
}

function Navbar() {
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/fees", label: t("fees") },
    { href: "/programs", label: t("programs") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  const topBarLinks = [
    { href: "/about/rectorate", label: t("rectorate") },
    { href: "/about/administrative-units", label: t("administrativeUnits") },
    { href: "/e-library", label: t("eLibrary") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#00304A]",
          scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
        )}
      >
        {/* Top bar – utility / rectorate & administrative (hidden on mobile) */}
        <div className="hidden md:block border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 md:h-12">
              <div className="flex items-center">
                <LanguageSwitcher variant="dark" />
              </div>
              <div className="flex items-center gap-4 md:gap-6 text-sm lg:text-base text-white/90">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main bar – logo + primary nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28 relative">
            {/* Desktop: main nav - left side */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 xl:px-5 py-3 text-sm lg:text-base font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - centered on mobile, right on desktop */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:ml-auto"
              aria-label={t("home")}
            >
              <Image
                src="/images/MUST-logo-dark.png"
                alt={t("logoAlt")}
                width={240}
                height={96}
                className="object-contain h-10 sm:h-14 md:h-16 lg:h-20 w-auto"
                priority
                sizes="(max-width: 640px) 100px, (max-width: 768px) 140px, 220px"
              />
            </Link>

            {/* Mobile menu button - right side */}
            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 rounded-full h-10 w-10 sm:h-12 sm:w-12"
                    aria-label={t("menuAria")}
                  >
                    <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-[#00304A] border-l border-white/10 p-0"
                >
                  <div className="flex flex-col h-full">
                    <SheetHeader className="p-4 sm:p-5 border-b border-white/10">
                      <SheetTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Image
                            src="/images/MUST-logo-dark.png"
                            alt={t("logoAlt")}
                            width={140}
                            height={56}
                            className="object-contain h-10 sm:h-14 w-auto"
                            sizes="104px"
                          />
                          <span className="text-sm sm:text-base font-bold text-white uppercase">
                            MUST
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-white hover:bg-white/10 rounded-full h-9 w-9 sm:h-10 sm:w-10"
                        >
                          <X className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </SheetTitle>
                    </SheetHeader>

                    <nav className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-1">
                      <div className="text-xs font-semibold text-white/60 uppercase tracking-wider pb-2 border-b border-white/10 mb-3">
                        {t("rectorate")} / {t("administrativeUnits")} /{" "}
                        {t("eLibrary")}
                      </div>
                      {topBarLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 sm:px-4 py-3 rounded-xl text-sm sm:text-base text-white/90 hover:bg-white/10 active:bg-white/20 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}

                      <div className="pt-4 mt-4 border-t border-white/10 text-xs font-semibold text-white/60 uppercase tracking-wider pb-2">
                        {t("home")}
                      </div>
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 sm:px-4 py-3 rounded-xl text-sm sm:text-base font-medium text-white/90 hover:bg-white/10 hover:text-white active:bg-white/20 transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}

                      <div className="pt-5 mt-5 border-t border-white/10">
                        <LanguageSwitcher variant="dark" />
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to account for fixed navbar height */}
      <div className="h-16 sm:h-20 md:h-[8.5rem] lg:h-[10rem]" />
    </>
  );
}
