"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const contactInfo = {
  phone: { primary: " +90 5386796595", hours: "Mon-Fri: 9:00 AM - 6:00 PM" },
  email: { primary: "info@must.edu", admissions: "international@must.edu", support: "rectorate@must.edu" },
  address: { street: "Aleja Józefa Piłsudskiego 35", city: "09-407 Płock", country: "Poland" },
};

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  const items = [
    {
      icon: Phone,
      href: `tel:${contactInfo.phone.primary.replace(/\s/g, "")}`,
      label: t("phone"),
      value: contactInfo.phone.primary,
      sub: contactInfo.phone.hours,
    },
    {
      icon: Mail,
      href: `mailto:${contactInfo.email.primary}`,
      label: t("email"),
      value: contactInfo.email.primary,
      sub: `${t("admissions")} ${contactInfo.email.admissions}`,
    },
    {
      icon: MapPin,
      href:"https://www.google.com/maps?q=Aleja+Józefa+Piłsudskiego+35,+09-407+Płock,+Poland",  
      label: t("address"),
      value: `${contactInfo.address.street}, ${contactInfo.address.city}`,
      sub: contactInfo.address.country,
    },
    {
      icon: Clock,
      href: "#",
      label: t("officeHours"),
      value: t("hours.weekdays"),
      sub: `${t("hours.saturday")} · ${t("hours.sunday")}`,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#00304A] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/70 text-sm mb-8"
        >
          {t("subtitle")}
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            const Wrapper = item.href !== "#" ? "a" : "div";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Wrapper
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-sm truncate">{item.value}</p>
                    <p className="text-white/60 text-xs mt-0.5 line-clamp-2">{item.sub}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
