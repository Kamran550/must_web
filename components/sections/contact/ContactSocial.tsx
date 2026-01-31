"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  HelpCircle,
  Share2,
} from "lucide-react";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
];

export default function ContactSocial() {
  const t = useTranslations("contact.social");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Maroon gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#3a191e]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Share2 className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-sm font-medium">
                Stay Connected
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("followUs")}
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full mb-6" />
            <p className="text-white/80 mb-8 max-w-md">
              {t("subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right - FAQ Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t("haveQuestions")}
              </h3>
              <p className="text-white/80 mb-6 max-w-md">
                {t("faqDescription")}
              </p>
              <Link
                href="/fees#faq"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-[#722F37] font-semibold hover:bg-white/90 transition-all shadow-lg group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("viewFAQ")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
