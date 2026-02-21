"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("validation.nameMin")),
    email: z.string().email(t("validation.emailInvalid")),
    phone: z.string().optional(),
    subject: z.string().min(3, t("validation.subjectMin")),
    message: z.string().min(10, t("validation.messageMin")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(data: FormValues) {
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border-2 border-white/20 bg-white/95 p-6 md:p-8 shadow-xl"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {t("title")}
      </h2>
      <p className="text-gray-600 text-sm mb-6">{t("subtitle")}</p>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3"
        >
          <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
          <p className="text-green-800 text-sm font-medium">{t("success")}</p>
        </motion.div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">{t("name")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("namePlaceholder")} className="rounded-lg border-gray-300" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">{t("email")}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t("emailPlaceholder")} className="rounded-lg border-gray-300" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">{t("phone")}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder={t("phonePlaceholder")} className="rounded-lg border-gray-300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">{t("subject")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("subjectPlaceholder")} className="rounded-lg border-gray-300" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">{t("message")}</FormLabel>
                <FormControl>
                  <textarea
                    className="min-h-[120px] w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 focus:border-[#722F37]"
                    placeholder={t("messagePlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white rounded-lg gap-2"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? t("sending") : <><Send className="w-4 h-4" />{t("sendMessage")}</>}
          </Button>
          <p className="text-xs text-center text-gray-500">
            {t("privacy")} <Link href="/fees#faq" className="text-[#722F37] hover:underline">{t("viewFAQ")}</Link>
          </p>
        </form>
      </Form>
    </motion.div>
  );
}
