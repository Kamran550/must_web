"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const locationQuery = "Aleja Józefa Piłsudskiego 35, 09-407 Płock, Poland";
const mapEmbedUrl = `https://maps.google.com/maps?hl=en&q=${encodeURIComponent(
  locationQuery
)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  locationQuery
)}`;

export default function ContactMap() {
  const t = useTranslations("contact.map");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", inset: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MUST Location Map"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-linear-to-t from-black/60 via-black/30 to-transparent p-4 md:p-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#d4af37] shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-white">{t("title")}</h2>
                <p className="text-sm text-white/90">
                  {t("campusAddress")}: Aleja Józefa Piłsudskiego 35, 09-407 Płock, Poland
                </p>
              </div>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#722F37] font-semibold text-sm hover:bg-white/95 transition-colors shrink-0"
            >
              {t("getDirections")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
