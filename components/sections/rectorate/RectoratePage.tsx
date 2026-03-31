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
    <main className="relative min-h-screen overflow-hidden bg-[#040712] font-sans pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-136 w-136 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px]" />
        <div className="absolute -right-32 top-[18%] h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[130px]" />
        <div className="absolute -bottom-24 -left-24 h-88 w-88 rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-size-[28px_28px] opacity-15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-4xl border border-white/15 bg-linear-to-br from-white/10 via-white/[0.07] to-transparent p-6 shadow-[0_35px_80px_-30px_rgba(8,145,178,0.45)] backdrop-blur-2xl md:p-10"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-sky-300/35 bg-sky-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                Leadership
              </p>
              <h1 className="bg-linear-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-5xl">
                {t("title")}
              </h1>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/15 px-4 py-2 text-sm font-medium text-violet-100">
              <Award className="h-4 w-4" />
              <span>{t("tabs.profile")}</span>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 inline-flex rounded-2xl border border-white/15 bg-slate-900/60 p-1.5 shadow-[0_10px_35px_-18px_rgba(56,189,248,0.55)] backdrop-blur-xl"
        >
          <button
            onClick={() => setActiveTab("profile")}
            className={`relative rounded-xl px-5 py-3 text-sm font-semibold transition-all md:text-base ${
              activeTab === "profile"
                ? "bg-linear-to-r from-sky-500/25 to-indigo-500/25 text-sky-100 shadow-lg shadow-sky-900/40"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t("tabs.profile")}
            </span>
            {activeTab === "profile" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 -z-10 rounded-xl border border-sky-300/40"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("welcomeMessage")}
            className={`relative rounded-xl px-5 py-3 text-sm font-semibold transition-all md:text-base ${
              activeTab === "welcomeMessage"
                ? "bg-linear-to-r from-sky-500/25 to-indigo-500/25 text-sky-100 shadow-lg shadow-sky-900/40"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <Quote className="h-5 w-5" />
              {t("tabs.welcomeMessage")}
            </span>
            {activeTab === "welcomeMessage" && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 -z-10 rounded-xl border border-sky-300/40"
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
                  <div className="sticky top-28 rounded-3xl border border-white/15 bg-linear-to-b from-white/10 to-white/5 p-3 shadow-[0_22px_60px_-30px_rgba(125,211,252,0.65)] backdrop-blur-2xl">
                    <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
                      <Image
                        src="/images/rector.jpeg"
                        alt={t("profile.fullNameValue")}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
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
                  <div className="rounded-3xl border border-white/15 bg-slate-900/45 p-6 shadow-[0_24px_65px_-32px_rgba(59,130,246,0.7)] backdrop-blur-2xl md:p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-linear-to-r from-slate-900/70 to-slate-800/45 p-4">
                        <div className="rounded-xl bg-sky-400/20 p-3 ring-1 ring-sky-200/25">
                          <Globe className="h-6 w-6 text-sky-300" />
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

                      <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-linear-to-r from-slate-900/70 to-slate-800/45 p-4">
                        <div className="rounded-xl bg-sky-400/20 p-3 ring-1 ring-sky-200/25">
                          <Mail className="h-6 w-6 text-sky-300" />
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                            {t("profile.email")}
                          </p>
                          <a
                            href={`mailto:${t("profile.emailValue")}`}
                            className="text-base font-semibold text-sky-300 hover:text-sky-200 hover:underline md:text-lg"
                          >
                            {t("profile.emailValue")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/15 bg-slate-900/45 p-6 shadow-[0_24px_65px_-32px_rgba(14,165,233,0.65)] backdrop-blur-2xl md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <BookOpen className="h-6 w-6 text-sky-300" />
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
                <div className="rounded-3xl border border-white/15 bg-linear-to-br from-slate-900/60 via-slate-900/45 to-slate-800/40 p-6 shadow-[0_30px_80px_-34px_rgba(99,102,241,0.75)] backdrop-blur-2xl md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-sky-400/15 p-3 ring-1 ring-sky-300/25">
                      <Quote className="h-8 w-8 text-sky-300" />
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
                        <p className="mt-1 text-base font-semibold text-sky-300">
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
