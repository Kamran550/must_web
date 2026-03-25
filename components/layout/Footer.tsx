"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

// const partnerLogos = [
//   { id: "ankuni", image: "/images/ANKUNI.png", name: "Ankara University", url: "https://ankara.edu.tr" },
//   { id: "arxiv", image: "/images/ARXIV.jpg", name: "arXiv", url: "https://arxiv.org" },
//   { id: "core", image: "/images/CORE.png", name: "CORE", url: "https://core.ac.uk" },
//   { id: "doaj", image: "/images/DOAJ.jpg", name: "DOAJ", url: "https://doaj.org" },
//   { id: "eric", image: "/images/ERIC.png", name: "ERIC", url: "https://eric.ed.gov" },
//   { id: "mit-ocw", image: "/images/MIT-OCW.png", name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
//   { id: "odtu-metu", image: "/images/ODTUMETU.jpg", name: "METU / ODTÜ", url: "https://www.metu.edu.tr" },
//   { id: "otl", image: "/images/OTL.jpg", name: "Open Textbook Library", url: "https://open.umn.edu" },
//   { id: "sgh", image: "/images/SGH.png", name: "SGH Płock School", url: "https://www.sgh.waw.pl" },
// ];

const partnerLogos = [
  {
    id: "eua",
    image: "/images/eua.jpg",
    name: "European University Association",
    url: "https://www.eua.eu",
  },
  {
    id: "europejski",
    image: "/images/europejski-fundusz-rozw-regionalnego_en.jpg",
    name: "European Regional Development Fund",
    url: "https://www.ur.edu.pl/",
  },
  {
    id: "magna",
    image: "/images/magna-charta.jpg",
    name: "MAGNA CHARTA",
    url: "https://www.magna-charta.org/",
  },
  {
    id: "program",
    image: "/images/program-regionalny_en.jpg",
    name: "Program Regionalny",
    url: "https://www.eib.org/en/stories/innovation-cohesion",
  },
  {
    id: "sgh",
    image: "/images/SGH.png",
    name: "SGH Płock School",
    url: "https://www.sgh.waw.pl",
  },
  {
    id: "herb",
    image: "/images/herp.png",
    name: "Ministry of Education and Science of Poland",
    url: "https://www.gov.pl/web/science",
  },
  {
    id: "Polish Accreditation Committee",
    image: "/images/polish-accreditation.png",
    name: "Polish Accreditation Committee",
    url: "https://pka.edu.pl/en/home-page/",
  },
  {
    id: "Erasmus",
    image: "/images/eu_flag-erasmus_vect_pos.jpg",
    name: "Erasmus+ programme.",
    url: "https://erasmus-plus.ec.europa.eu/",
  },
    {
    id: "Polish",
    image: "/images/nawa_poland.png",
    name: "Polish National Agency for Academic Exchange.",
    url: "https://nawa.gov.pl/en/nawa",
  },

];

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-[#0f0a0b] via-[#1a0f10] to-[#151218] relative overflow-hidden">
      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden
      />

      {/* Partner Logos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:gap-6">
          {partnerLogos.map((logo) => (
            <a
              key={logo.id}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 transition-all duration-300 hover:scale-105"
              title={logo.name}
            >
              <div className="relative h-11 w-[5.5rem] md:h-[3.25rem] md:w-[6.5rem] bg-white/95 rounded-md overflow-hidden">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="110px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" />
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">
              {t("contactInfo.phone")}
            </h3>
            <div className="space-y-1">
              <a
                href="tel:+48579277493"
                className="block text-base text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
              >
                +48579277493
              </a>
              <a
                href="tel:+48579369968"
                className="block text-base text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
              >
                +48 579 369 968
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">
              {t("contactInfo.email")}
            </h3>
            <a
              href="mailto:info@must.edu.pl"
              className="block text-base text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
            >
              info@must.edu.pl
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">
              {t("contactInfo.address")}
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Płock, Poland
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" />
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            {t("copyright", { year: currentYear })}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              href="/apply"
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              {t("links.apply")}
            </Link>
            <Link
              href="/about"
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              Sitemap
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
