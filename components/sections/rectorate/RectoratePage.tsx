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
    <main className="min-h-screen bg-white dark:from-gray-900 dark:to-black font-sans pt-24 pb-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-bl from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-purple-100/40 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Hero Section - Minimal Design */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-16 bg-linear-to-b from-blue-600 to-purple-600 rounded-full" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                  Leadership
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {t("title")}
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation - Side by Side Pills */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 mb-12 border-b border-gray-200 dark:border-gray-700 pb-4"
        >
          <button
            onClick={() => setActiveTab("profile")}
            className={`
              relative px-6 py-3 text-base font-semibold transition-all duration-300 rounded-t-lg
              ${
                activeTab === "profile"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }
            `}
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {t("tabs.profile")}
            </span>
            {activeTab === "profile" && (
              <motion.div
                layoutId="activeBorder"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("welcomeMessage")}
            className={`
              relative px-6 py-3 text-base font-semibold transition-all duration-300 rounded-t-lg
              ${
                activeTab === "welcomeMessage"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }
            `}
          >
            <span className="flex items-center gap-2">
              <Quote className="h-5 w-5" />
              {t("tabs.welcomeMessage")}
            </span>
            {activeTab === "welcomeMessage" && (
              <motion.div
                layoutId="activeBorder"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === "profile" ? (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid lg:grid-cols-5 gap-12">
                  {/* Left: Image Column */}
                  <div className="lg:col-span-2">
                    <div className="sticky top-32">
                      <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src="/images/rector.png"
                          alt={t("profile.fullNameValue")}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-5 w-5 text-yellow-400" />
                            <span className="text-sm font-bold uppercase tracking-wider">
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

                  {/* Right: Content Column */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Position Info */}
                    <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-blue-600 rounded-xl">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                            {t("profile.position")}
                          </p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                            {t("profile.positionValue")}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-600 rounded-xl">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                            {t("profile.email")}
                          </p>
                          <a
                            href={`mailto:${t("profile.emailValue")}`}
                            className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {t("profile.emailValue")}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Biography */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Biography
                        </h3>
                      </div>
                      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p className="text-lg">
                          {t("profile.description")}
                        </p>
                        <p className="text-lg">
                          {t("profile.qualifications")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="welcomeMessage"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="max-w-4xl">
                  {/* Quote Mark */}
                  <div className="mb-8">
                    <Quote className="h-16 w-16 text-blue-200 dark:text-blue-900" />
                  </div>

                  {/* Welcome Message Content */}
                  <div className="bg-linear-to-br from-gray-50 to-blue-50/50 dark:from-gray-900/50 dark:to-blue-950/30 rounded-2xl p-10 border border-gray-200 dark:border-gray-800">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                      {t("welcomeMessage.title")}
                    </h2>
                    
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <p className="text-xl font-medium text-gray-900 dark:text-white italic">
                        {t("welcomeMessage.greeting")}
                      </p>
                      <p className="text-lg">
                        {t("welcomeMessage.paragraph1")}
                      </p>
                      <p className="text-lg">
                        {t("welcomeMessage.paragraph2")}
                      </p>
                      <p className="text-lg">
                        {t("welcomeMessage.paragraph3")}
                      </p>
                      <p className="text-lg font-medium mt-8">
                        {t("welcomeMessage.closing")}
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-12 pt-8 border-t-2 border-gray-300 dark:border-gray-700">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                            {t("welcomeMessage.signature")}
                          </p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {t("welcomeMessage.signatureName")}
                          </p>
                          <p className="text-base text-blue-600 dark:text-blue-400 font-semibold mt-1">
                            {t("welcomeMessage.signatureTitle")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-3 bg-linear-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
                          <Award className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
                          <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                            Official Seal
                          </span>
                        </div>
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
