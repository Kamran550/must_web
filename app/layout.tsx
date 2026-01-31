import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Əsas məlumatlar
  title: {
    default: "MUST - Mazovia University of Science and Technology | Study in Poland",
    template: "%s | MUST - Mazovia University of Science and Technology",
  },
  description:
    "MUST - Mazovia University of Science and Technology. International education in Poland with bachelor's, master's and PhD programs. Quality education through science and technology.",

  // Açar sözlər
  keywords: [
    "MUST",
    "Mazovia University of Science and Technology",
    "MUST",
    "must.edu.pl",
    "Poland university",
    "Polish university",
    "international university Poland",
    "international university",
    "science and technology university",
    "Mazovia university",
    "study in Poland",
    "education in Poland",
    "PhD Poland",
    "PhD in Poland",
    "bachelor degree Poland",
    "bachelor programs in Poland",
    "master degree Poland",
    "master programs in Poland",
    "doctoral programs in Poland",
  ],

  // Müəllif və yaradıcı
  authors: [
    {
      name: "Mazovia University of Science and Technology",
      url: "https://must.edu.pl",
    },
  ],
  creator: "MUST - Mazovia University of Science and Technology",
  publisher: "Mazovia University of Science and Technology",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  metadataBase: new URL("https://must.edu.pl"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ru: "/ru",
      tr: "/tr",
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "tr_TR"],
    url: "https://must.edu.pl",
    siteName: "MUST - Mazovia University of Science and Technology",
    title: "MUST - Mazovia University of Science and Technology | Study in Poland",
    description:
      "MUST - Mazovia University of Science and Technology. International education in Poland with bachelor's, master's and PhD programs. Quality education through peace and global understanding.",
    images: [
      {
        url: "/images/MUST-logo-tam.png",
        width: 1200,
        height: 630,
        alt: "MUST - Mazovia University of Science and Technology Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MUST - Mazovia University of Science and Technology",
    description:
      "MUST - Mazovia University of Science and Technology. International education in Poland with bachelor's, master's and PhD programs.",
    images: ["/images/MUST-logo-tam.png"],
    creator: "@must_edu",
    site: "@must_edu",
  },

  // Verification (Google Search Console, Bing, etc.)
  verification: {
    google: "KLaSW1pDoMKO_L3uMzk9eMceecJ5d0d7Pvke5ldZkNs", // Google Search Console-dan alınacaq
    // yandex: "YOUR_YANDEX_CODE",
    // bing: "YOUR_BING_CODE",
  },

  // Category
  category: "education",

  // Icons / Favicon
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
