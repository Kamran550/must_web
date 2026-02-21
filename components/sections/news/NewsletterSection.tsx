"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewsletterSection() {
  const t = useTranslations("news.newsletter");
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#00304A]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {t("title")}
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                {t("description")}
              </p>
            </div>

            {/* Form - inline */}
            <div className="shrink-0 w-full lg:max-w-md">
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/20 border border-green-400/30"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t("thankYou")}</p>
                    <p className="text-sm text-white/80">{t("successMessage")}</p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-6 rounded-xl bg-[#722F37] hover:bg-[#5a252c] text-white font-semibold shrink-0 gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t("subscribe")}
                  </Button>
                </form>
              )}
              <p className="text-xs text-white/50 mt-3">
                {t("privacy")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
