"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const contactInfo = {
  phone: {
    primary: "+48 579369968",
    secondary: "+48 579369968",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  email: {
    primary: "info@must.edu",
    admissions: "international@must.edu",
    support: "rectorate@must.edu",
  },
  address: {
    street: "Ogrodowa 5800-876",
    city: "Warsaw, Poland",
    zip: "00-000",
    country: "Poland",
  },
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    sunday: "Sunday: Closed",
    saturday: "Saturday: Closed",
  },
};

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23722F37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#722F37]">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid - Phone spans 2 cols, Email & Address side by side */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Phone - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5"
          >
            <a
              href={`tel:${contactInfo.phone.primary.replace(/\s/g, "")}`}
              className="block h-full p-8 md:p-10 rounded-3xl bg-linear-to-br from-[#722F37] to-[#5a252c] shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("phone")}
                </h3>
                <p className="text-xl font-semibold text-white/90 mb-2">
                  {contactInfo.phone.primary}
                </p>
                <p className="text-sm text-white/70 mb-4">
                  {contactInfo.phone.hours}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#d4af37]">
                  Call now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Email - Stacked */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <div className="grid sm:grid-cols-2 gap-6 h-full">
              {/* Email card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#722F37]/30 transition-all h-fit">
                <div className="w-14 h-14 rounded-2xl bg-[#722F37]/10 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[#722F37]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("email")}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${contactInfo.email.primary}`}
                    className="block text-sm font-semibold text-[#722F37] hover:underline break-all"
                  >
                    {contactInfo.email.primary}
                  </a>
                  <div className="pt-3 border-t border-gray-100 dark:border-slate-800 space-y-2">
                    <p className="text-xs text-muted-foreground">{t("admissions")}</p>
                    <a
                      href={`mailto:${contactInfo.email.admissions}`}
                      className="block text-xs text-gray-600 dark:text-gray-300 hover:text-[#722F37] hover:underline break-all"
                    >
                      {contactInfo.email.admissions}
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">{t("support")}</p>
                    <a
                      href={`mailto:${contactInfo.email.support}`}
                      className="block text-xs text-gray-600 dark:text-gray-300 hover:text-[#722F37] hover:underline break-all"
                    >
                      {contactInfo.email.support}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#722F37]/30 transition-all h-fit">
                <div className="w-14 h-14 rounded-2xl bg-[#722F37]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-[#722F37]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("address")}
                </h3>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{contactInfo.address.street}</p>
                  <p>{contactInfo.address.city}</p>
                  <p className="text-sm">{contactInfo.address.zip}</p>
                  <p className="text-sm font-semibold mt-2">
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours - Full width below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mt-6 p-6 rounded-2xl bg-gray-50 dark:bg-slate-800/50 border-2 border-gray-100 dark:border-slate-700 flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {t("officeHours")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("hours.saturday")} • {t("hours.sunday")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
