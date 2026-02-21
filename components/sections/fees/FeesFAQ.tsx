"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { HelpCircle, MessageCircle, Mail, Phone } from "lucide-react";

const faqKeys = [
  "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10",
] as const;

export default function FeesFAQ() {
  const t = useTranslations("fees.faq");
  const locale = useLocale();

  return (
    <section className="py-16 md:py-24 bg-[#005A7A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-white">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            {t("subtitle")}
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="rounded-xl border-2 border-white/20 bg-white/95 px-5 overflow-hidden hover:border-white/40 transition-colors"
              >
                <AccordionTrigger className="py-4 hover:no-underline group">
                  <span className="flex items-start gap-3 text-left">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#722F37]/10 flex items-center justify-center text-xs font-bold text-[#722F37]">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-gray-900 group-hover:text-[#722F37] transition-colors">
                      {t(`items.${key}.question`)}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4 pl-10">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border-2 border-white/20 bg-white/95 p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#722F37]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t("contact")}</h3>
                <p className="text-xs text-gray-500">Can't find what you're looking for? We're here to help.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:ml-auto">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-gray-200 hover:border-[#722F37] hover:bg-[#722F37]/5 transition-all text-sm font-medium text-gray-700"
              >
                <Mail className="w-4 h-4 text-[#722F37]" />
                Email
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-gray-200 hover:border-[#722F37] hover:bg-[#722F37]/5 transition-all text-sm font-medium text-gray-700"
              >
                <Phone className="w-4 h-4 text-[#722F37]" />
                Call
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
