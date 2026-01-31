import Script from "next/script";

// Universitet üçün Organization Schema
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://must.edu.pl/#organization",
    name: "Mazovia University of Science and Technology",
    alternateName: [
      "MUST",
      "Мазовецкий университет науки и технологий",
      "Mazovya Bilim ve Teknoloji Üniversitesi",
    ],
    url: "https://must.edu.pl",
    logo: {
      "@type": "ImageObject",
      url: "https://must.edu.pl/images/MUST-logo.png",
      width: 512,
      height: 512,
    },
    image: "https://must.edu.pl/images/MUST-logo-dark.png",
    description:
      "Mazovia University of Science and Technology (MUST) - International education in Poland with bachelor's, master's and PhD programs. Quality education through peace and global understanding.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
      addressLocality: "Poland",
    },
    sameAs: [
      "https://www.facebook.com/must.edu.pl",
      "https://www.instagram.com/must.edu.pl",
      "https://www.linkedin.com/school/must",
      "https://twitter.com/must_edu",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "admissions",
      availableLanguage: ["English", "Turkish", "Russian"],
    },
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

// Universitet üçün CollegeOrUniversity Schema
export function UniversityJsonLd() {
  const universityData = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Mazovia University of Science and Technology",
    alternateName: "MUST",
    url: "https://must.edu.pl",
    logo: "https://must.edu.pl/images/MUST-logo.png",
    description:
      "Mazovia University of Science and Technology (MUST) offers bachelor's, master's and PhD programs in Warsaw, Poland. Excellence in science, technology and innovation since 2020.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Poland",
    },
    hasOfferingCatalog: {
      "@type": "OfferingCatalog",
      name: "Academic Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "Bachelor Programs",
          description: "Undergraduate degree programs",
        },
        {
          "@type": "Course",
          name: "Master Programs",
          description: "Graduate degree programs",
        },
        {
          "@type": "Course",
          name: "PhD Programs",
          description: "Doctoral degree programs",
        },
      ],
    },
  };

  return (
    <Script
      id="university-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(universityData) }}
    />
  );
}

// WebSite Schema - Axtarış üçün
export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://must.edu.pl/#website",
    url: "https://must.edu.pl",
    name: "Mazovia University of Science and Technology",
    alternateName: ["MUST", "Mazovia University of Science and Technology"],
    description: "Official website of Mazovia University of Science and Technology (MUST) - Warsaw, Poland",
    publisher: {
      "@id": "https://must.edu.pl/#organization",
    },
    inLanguage: ["en", "tr", "ru"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://must.edu.pl/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

// Bütün JSON-LD-ləri birləşdirən komponent
export function SeoJsonLd() {
  return (
    <>
      <OrganizationJsonLd />
      <UniversityJsonLd />
      <WebsiteJsonLd />
    </>
  );
}
