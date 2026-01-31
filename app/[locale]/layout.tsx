import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { routing } from "@/i18n/routing";
import { NavbarDemo } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SeoJsonLd } from "@/components/seo/JsonLd";
import { TopLoader } from "@/components/ui/TopLoader";
import type { Metadata } from "next";

// Hər dil üçün SEO məlumatları - Title həmişə ingilis dilindədir
const seoData: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "MUST - Mazovia University of Science and Technology | Study in Poland",
    description:
      "MUST - Mazovia University of Science and Technology. International education in Poland with bachelor's, master's and PhD programs. Quality education through peace and global understanding.",
    keywords: [
      "MUST",
      "Mazovia University of Science and Technology",
      "study in Poland",
      "international university",
      "Poland education",
      "bachelor degree Poland",
      "master degree Poland",
      "PhD Poland",
      "Mazovia university",
      "peace university",
    ],
  },
  ru: {
    title: "MUST - Мазовецкий университет науки и технологий | Study in Poland",
    description:
      "MUST - Мазовецкий университет науки и технологий. Международный образовательный центр в Польше с программами бакалавриата, магистратуры и докторантуры. Качественное образование через мир и глобальное понимание.",
    keywords: [
      "MUST",
      "Мазовецкий университет науки и технологий",
      "Образование в Польше",
      "Обучение в Польше",
      "Международный университет",
      "Польский университет",
      "Бакалавриат в Польше",
      "Магистратура в Польше",
      "Докторантура в Польше",
      "Европейский университет",
    ],
  },
  tr: {
    title: "MUST - Mazovia University of Science and Technology | Study in Poland",
    description:
      "MUST - Mazovia University of Science and Technology. International education in Poland with bachelor's, master's and PhD programs. Quality education through peace and global understanding.",
    keywords: [
      "MUST",
      "Mazovya Bilim ve Teknoloji Üniversitesi",
      "Polonya'da eğitim",
      "Polonya'da okumak",
      "uluslararası üniversite",
      "Polonya üniversitesi",
      "lisans programları",
      "yüksek lisans programları",
      "doktora",
      "Avrupa üniversitesi",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale] || seoData.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    icons: {
      icon: [
        { url: "/images/MUST-logo.png", sizes: "any", type: "image/png" },
        { url: "/images/MUST-logo.png", sizes: "32x32", type: "image/png" },
        { url: "/images/MUST-logo.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/images/MUST-logo.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/images/MUST-logo.png",
    },
    alternates: {
      canonical: `https://must.edu.pl/${locale}`,
      languages: {
        en: "https://must.edu.pl/en",
        ru: "https://must.edu.pl/ru",
        tr: "https://must.edu.pl/tr",
      },
    },
    openGraph: {
      locale: locale === "ru" ? "ru_RU" : locale === "tr" ? "tr_TR" : "en_US",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <SeoJsonLd />
      <Suspense fallback={null}>
        <TopLoader />
      </Suspense>
      <NavbarDemo />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
