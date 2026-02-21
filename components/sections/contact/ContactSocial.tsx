"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function ContactSocial() {
  const t = useTranslations("contact.social");

  return (
    <section className="py-14 md:py-18 bg-[#00304A] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {t("followUs")}
            </h2>
            <p className="text-white/70 text-sm max-w-md">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.08 }}
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
          <Link
            href="/fees#faq"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all shrink-0"
          >
            <HelpCircle className="w-4 h-4" />
            {t("viewFAQ")}
          </Link>
        </div>
      </div>
    </section>
  );
}
