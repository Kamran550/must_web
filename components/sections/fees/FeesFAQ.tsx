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
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
] as const;

export default function FeesFAQ() {
  const t = useTranslations("fees.faq");
  const locale = useLocale();

  return (
    <section className="py-24 md:py-32 bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sidebar - sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
                <HelpCircle className="w-4 h-4 text-[#722F37]" />
                <span className="text-sm font-medium text-[#722F37]">FAQ</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                {t("title")}
              </h2>
              <div className="w-16 h-1 bg-[#722F37] rounded-full mb-6" />
              <p className="text-muted-foreground text-lg">
                {t("subtitle")}
              </p>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border-2 border-[#722F37]/20 bg-white dark:bg-slate-900 p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#722F37]/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#722F37]" />
                </div>
                <h3 className="font-semibold text-lg">{t("contact")}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              
              <div className="space-y-3">
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-[#722F37] hover:bg-[#722F37]/5 transition-all group"
                >
                  <Mail className="w-5 h-5 text-[#722F37]" />
                  <div className="flex-1">
                    <div className="text-sm font-medium group-hover:text-[#722F37] transition-colors">
                      Email Support
                    </div>
                    <div className="text-xs text-muted-foreground">
                      info@must.edu.pl
                    </div>
                  </div>
                </Link>
                
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-[#722F37] hover:bg-[#722F37]/5 transition-all group"
                >
                  <Phone className="w-5 h-5 text-[#722F37]" />
                  <div className="flex-1">
                    <div className="text-sm font-medium group-hover:text-[#722F37] transition-colors">
                      Call Us
                    </div>
                    <div className="text-xs text-muted-foreground">
                      +48 579369968
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white dark:bg-slate-900 rounded-2xl px-6 border-2 border-gray-200 dark:border-slate-700 hover:border-[#722F37]/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-5 hover:no-underline group">
                      <span className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 rounded-full bg-[#722F37]/10 flex items-center justify-center text-xs font-bold text-[#722F37] mt-0.5">
                          {index + 1}
                        </span>
                        <span className="group-hover:text-[#722F37] transition-colors">
                          {t(`items.${key}.question`)}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-5 pl-9">
                      {t(`items.${key}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
