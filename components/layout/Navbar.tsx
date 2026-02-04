"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return <Navbar />;
}

function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutDropdownOpen, setMobileAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/fees`, label: t("fees") },
    { href: `/${locale}/programs`, label: t("programs") },
    { href: `/${locale}/news`, label: t("news") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const aboutDropdownItems = [
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/about/rectorate`, label: t("rectorate") },
    {
      href: `/${locale}/about/administrative-units`,
      label: t("administrativeUnits"),
    },
  ];

  // Handle dropdown open/close with delay
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/95 dark:bg-[#0a0809]/95 backdrop-blur-xl shadow-2xl"
            : "bg-white/80 dark:bg-[#0a0809]/80 backdrop-blur-lg"
        )}
      >
        {/* Decorative top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#722F37] via-[#d4af37] to-[#722F37] opacity-90" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23722F37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo with enhanced styling */}
            <Link
              href={`/${locale}`}
              className="flex items-center group shrink-0 relative z-10"
            >
              <div className="relative">
                {/* Logo glow effect on hover */}
                <div className="absolute inset-0 bg-[#722F37]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="relative transition-all duration-300 group-hover:scale-[1.05] group-active:scale-[0.98]">
                  <Image
                    src="/images/MUST-logo.png"
                    alt="MUST Logo"
                    width={360}
                    height={204}
                    className="object-contain h-16 md:h-20 lg:h-24 w-auto drop-shadow-sm"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Modern Split Design */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Navigation Links with modern underline effect - Home first */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-3 text-sm xl:text-base font-semibold text-[#1a1a1a] dark:text-gray-100 transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Animated underline with gradient */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#722F37] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  {/* Subtle background on hover */}
                  <span className="absolute inset-0 bg-[#722F37]/5 dark:bg-[#722F37]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Link>
              ))}

              {/* About Dropdown with modern styling */}
              <div
                ref={aboutDropdownRef}
                className="relative group"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="relative px-5 py-3 text-sm xl:text-base font-semibold text-[#1a1a1a] dark:text-gray-100 transition-all duration-300 group">
                  <span className="relative z-10 flex items-center gap-1.5">
                    {t("about")}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-all duration-300",
                        aboutDropdownOpen && "rotate-180"
                      )}
                    />
                  </span>
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#722F37] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
                
                {aboutDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#1a1516] rounded-2xl shadow-2xl border border-[#722F37]/20 dark:border-[#722F37]/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-2">
                      {aboutDropdownItems.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="relative block px-4 py-3 text-sm font-medium text-[#2d1b1d] dark:text-gray-200 rounded-lg transition-all duration-200 group/item hover:bg-gradient-to-r hover:from-[#722F37]/5 hover:to-[#722F37]/10 dark:hover:from-[#722F37]/10 dark:hover:to-[#722F37]/15 hover:text-[#722F37] dark:hover:text-[#c45c6c] hover:translate-x-1"
                          onClick={() => setAboutDropdownOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="relative flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language Switcher */}
              <div className="ml-2 xl:ml-4">
                <LanguageSwitcher />
              </div>

              {/* Apply Button - Enhanced Design */}
              <Button
                asChild
                size="lg"
                className="ml-2 xl:ml-4 relative overflow-hidden bg-gradient-to-r from-[#722F37] to-[#5a252c] hover:from-[#5a252c] hover:to-[#722F37] text-white text-sm xl:text-base font-bold px-6 xl:px-8 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
              >
                <Link href={`/${locale}/apply`} className="relative z-10">
                  <span className="relative">{t("apply")}</span>
                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-[#722F37] dark:text-[#c45c6c] hover:bg-[#722F37]/10 dark:hover:bg-[#722F37]/20 rounded-full transition-all duration-300"
                    aria-label="Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[320px] sm:w-[400px] bg-white dark:bg-[#0f0d0e] border-l-2 border-[#722F37]/30 dark:border-[#722F37]/40 p-0"
                >
                  <div className="h-full flex flex-col">
                    {/* Mobile Header */}
                    <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#722F37]/10 dark:border-[#722F37]/20">
                      <SheetTitle className="flex items-center justify-between">
                        <Image
                          src="/images/MUST-logo.png"
                          alt="MUST Logo"
                          width={200}
                          height={80}
                          className="object-contain h-14 w-auto"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileMenuOpen(false)}
                          className="rounded-full hover:bg-[#722F37]/10"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetTitle>
                    </SheetHeader>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                      {/* Navigation Links - Home first */}
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3.5 text-base font-semibold text-[#1a1a1a] dark:text-gray-100 hover:bg-[#722F37]/5 dark:hover:bg-[#722F37]/10 rounded-xl transition-all duration-200 active:scale-[0.98]"
                        >
                          {link.label}
                        </Link>
                      ))}

                      {/* About in Mobile */}
                      <div>
                        <button
                          onClick={() =>
                            setMobileAboutDropdownOpen(!mobileAboutDropdownOpen)
                          }
                          className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-[#1a1a1a] dark:text-gray-100 hover:bg-[#722F37]/5 dark:hover:bg-[#722F37]/10 rounded-xl transition-all duration-200 active:scale-[0.98]"
                        >
                          <span>{t("about")}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              mobileAboutDropdownOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileAboutDropdownOpen && (
                          <div className="flex flex-col space-y-1 ml-4 mt-2 pl-4 border-l-2 border-[#722F37]/20 dark:border-[#722F37]/30">
                            {aboutDropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileAboutDropdownOpen(false);
                                }}
                                className="px-4 py-2.5 text-sm font-medium text-[#2d1b1d] dark:text-gray-300 hover:text-[#722F37] dark:hover:text-[#c45c6c] rounded-lg hover:bg-[#722F37]/5 dark:hover:bg-[#722F37]/10 transition-all duration-200"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Language Switcher in Mobile */}
                      <div className="pt-4 border-t border-[#722F37]/10 dark:border-[#722F37]/20">
                        <div className="px-4">
                          <LanguageSwitcher />
                        </div>
                      </div>
                    </nav>

                    {/* Mobile Apply Button */}
                    <div className="p-4 border-t border-[#722F37]/10 dark:border-[#722F37]/20">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#722F37] to-[#5a252c] hover:from-[#5a252c] hover:to-[#722F37] text-white text-base font-bold py-6 rounded-full shadow-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Link href={`/${locale}/apply`}>{t("apply")}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20 md:h-24 lg:h-28" />
    </>
  );
}
