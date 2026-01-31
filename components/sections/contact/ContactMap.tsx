"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactMap() {
  const t = useTranslations("contact.map");

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Ogrodowa+58,00-876+Warsaw,Poland&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const address = {
    full: "Ogrodowa 58, 00-876 Warsaw, Poland",
    googleMapsUrl:
      "https://www.google.com/maps/place/Ogrodowa+58,00-876+Warsaw,Poland",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="h-full flex flex-col rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
        {/* Header - Inside the card */}
        <div className="p-8 pb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
            <Navigation className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#722F37]">Find Us</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#722F37]" />
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-sm mb-4">{t("subtitle")}</p>
        </div>

        {/* Map */}
        <div className="relative flex-1 min-h-[300px] md:min-h-[350px] px-8 pb-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MUST Location Map"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Address & CTA */}
        <div className="p-8 pt-0 space-y-4">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {t("campusAddress")}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {address.full}
            </p>
          </div>

          <a
            href={address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#722F37] hover:bg-[#5a252c] text-white font-semibold shadow-lg transition-all group"
          >
            {t("getDirections")}
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
