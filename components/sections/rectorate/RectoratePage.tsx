"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Award, GraduationCap, Globe, BookOpen, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RectoratePage() {
  const t = useTranslations("about.rectorate");
  const [activeTab, setActiveTab] = useState<"profile" | "welcomeMessage">(
    "profile"
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 font-sans pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-136 w-136 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-104 w-104 rounded-full bg-indigo-500/10 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/45 backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                Leadership
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                {t("title")}
              </h1>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Award className="h-4 w-4" />
              <span>{t("tabs.profile")}</span>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur"
        >
          <button
            onClick={() => setActiveTab("profile")}
            className={`relative rounded-xl px-5 py-3 text-sm font-semibold transition-all md:text-base ${
              activeTab === "profile"
                ? "bg-cyan-400/20 text-cyan-200 shadow-lg shadow-cyan-500/15"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t("tabs.profile")}
            </span>
            {activeTab === "profile" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 -z-10 rounded-xl border border-cyan-300/30"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("welcomeMessage")}
            className={`relative rounded-xl px-5 py-3 text-sm font-semibold transition-all md:text-base ${
              activeTab === "welcomeMessage"
                ? "bg-cyan-400/20 text-cyan-200 shadow-lg shadow-cyan-500/15"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <Quote className="h-5 w-5" />
              {t("tabs.welcomeMessage")}
            </span>
            {activeTab === "welcomeMessage" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 -z-10 rounded-xl border border-cyan-300/30"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </motion.div>

        <div className="relative z-10 mt-8">
          <AnimatePresence mode="wait">
            {activeTab === "profile" ? (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 lg:grid-cols-5"
              >
                <div className="lg:col-span-2">
                  <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-xl shadow-black/30 backdrop-blur-xl">
                    <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
                      <Image
                        src="/images/rector.jpeg"
                        alt={t("profile.fullNameValue")}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <div className="mb-2 flex items-center gap-2">
                          <Award className="h-5 w-5 text-amber-300" />
                          <span className="text-xs font-bold uppercase tracking-widest text-amber-100">
                            Rector
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold">
                          {t("profile.fullNameValue")}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 lg:col-span-3">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/25 backdrop-blur-xl md:p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <div className="rounded-xl bg-cyan-400/20 p-3">
                          <Globe className="h-6 w-6 text-cyan-300" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                            {t("profile.position")}
                          </p>
                          <p className="text-lg font-bold leading-snug text-white md:text-xl">
                            {t("profile.positionValue")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <div className="rounded-xl bg-cyan-400/20 p-3">
                          <Mail className="h-6 w-6 text-cyan-300" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                            {t("profile.email")}
                          </p>
                          <a
                            href={`mailto:${t("profile.emailValue")}`}
                            className="text-base font-semibold text-cyan-300 hover:underline md:text-lg"
                          >
                            {t("profile.emailValue")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/25 backdrop-blur-xl md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-cyan-300" />
                      <h3 className="text-2xl font-bold text-white">Biography</h3>
                    </div>
                    <div className="space-y-4 leading-relaxed text-slate-300">
                      <p className="text-lg">{t("profile.description")}</p>
                      <p className="text-lg">{t("profile.qualifications")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="welcomeMessage"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="max-w-5xl"
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/15 p-3">
                      <Quote className="h-8 w-8 text-cyan-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      {t("welcomeMessage.title")}
                    </h2>
                  </div>

                  <div className="space-y-6 leading-relaxed text-slate-300">
                    <p className="text-xl font-medium italic text-white">
                      {t("welcomeMessage.greeting")}
                    </p>
                    <p className="text-lg">{t("welcomeMessage.paragraph1")}</p>
                    <p className="text-lg">{t("welcomeMessage.paragraph2")}</p>
                    <p className="text-lg">{t("welcomeMessage.paragraph3")}</p>
                    <p className="mt-8 text-lg font-medium text-white">
                      {t("welcomeMessage.closing")}
                    </p>
                  </div>

                  <div className="mt-10 border-t border-white/15 pt-7">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 text-sm font-medium text-slate-400">
                          {t("welcomeMessage.signature")}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {t("welcomeMessage.signatureName")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-cyan-300">
                          {t("welcomeMessage.signatureTitle")}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/10 px-4 py-2.5">
                        <Award className="h-5 w-5 text-amber-300" />
                        <span className="text-sm font-bold text-amber-100">
                          Official Seal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
