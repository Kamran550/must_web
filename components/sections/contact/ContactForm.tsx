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
import { Send, CheckCircle, MessageSquare } from "lucide-react";
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
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 shadow-xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#722F37]/10 border border-[#722F37]/20 mb-4">
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#722F37]">Send Message</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-green-800 dark:text-green-200 font-medium">
              {t("success")}
            </p>
          </motion.div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("name")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("namePlaceholder")}
                        className="rounded-xl border-2 focus:border-[#722F37]"
                        {...field}
                      />
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
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        className="rounded-xl border-2 focus:border-[#722F37]"
                        {...field}
                      />
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
                  <FormLabel>{t("phone")}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t("phonePlaceholder")}
                      className="rounded-xl border-2 focus:border-[#722F37]"
                      {...field}
                    />
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
                  <FormLabel>{t("subject")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("subjectPlaceholder")}
                      className="rounded-xl border-2 focus:border-[#722F37]"
                      {...field}
                    />
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
                  <FormLabel>{t("message")}</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[140px] w-full rounded-xl border-2 border-input bg-transparent px-4 py-3 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#722F37]/30 focus-visible:border-[#722F37] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/10"
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
              className="w-full h-14 bg-[#722F37] hover:bg-[#5a252c] text-white rounded-xl font-semibold shadow-lg disabled:opacity-70"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                t("sending")
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t("sendMessage")}
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              {t("privacy")}{" "}
              <Link
                href="/fees#faq"
                className="text-[#722F37] hover:underline font-medium"
              >
                {t("viewFAQ")}
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
