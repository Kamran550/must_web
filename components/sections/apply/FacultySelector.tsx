"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Check, 
  Globe2,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Faculty } from "@/lib/types/faculty";
import { useTranslations } from "next-intl";

export type TeachingLanguage = "EN" | "TR";

interface FacultySelectorProps {
  faculties: Faculty[];
  selectedFacultyId: number | null;
  onSelect: (faculty: Faculty) => void;
  selectedLanguage: TeachingLanguage | null;
  onLanguageSelect: (language: TeachingLanguage) => void;
}

const languageOptions = [
  { code: "EN" as TeachingLanguage, flag: "🇬🇧", labelKey: "english" },
  { code: "TR" as TeachingLanguage, flag: "🇹🇷", labelKey: "turkish" },
];

export default function FacultySelector({
  faculties,
  selectedFacultyId,
  onSelect,
  selectedLanguage,
  onLanguageSelect,
}: FacultySelectorProps) {
  const t = useTranslations("apply.facultySelector");
  const langT = useTranslations("apply.facultySelector.languageSelection");

  if (faculties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
          <Building2 className="w-10 h-10 text-gray-400" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg">{t("noFaculties")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4"
        >
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-semibold">{t("title")}</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 max-w-md mx-auto"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* Faculty Cards - Masonry Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {faculties.map((faculty, index) => {
          const isSelected = selectedFacultyId === faculty.id;
          
          return (
            <motion.button
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => onSelect(faculty)}
              className={`
                group relative text-left p-5 rounded-2xl border-2 transition-all duration-300
                ${isSelected
                  ? "bg-linear-to-br from-emerald-500 to-teal-600 border-transparent text-white shadow-xl shadow-emerald-500/20"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 hover:shadow-lg"
                }
              `}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Pattern */}
              {isSelected && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
              )}

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all
                  ${isSelected
                    ? "bg-white/20"
                    : "bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30"
                  }
                `}>
                  <Building2 className={`w-6 h-6 ${isSelected ? "text-white" : "text-emerald-600 dark:text-emerald-400"}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`
                    font-bold text-base leading-tight mb-1
                    ${isSelected ? "text-white" : "text-gray-900 dark:text-white"}
                  `}>
                    {faculty.name}
                  </h3>
                  
                  <div className={`
                    flex items-center gap-1 text-xs font-medium
                    ${isSelected ? "text-white/70" : "text-gray-500 dark:text-gray-400"}
                  `}>
                    <ChevronRight className="w-3 h-3" />
                    <span>{t("clickToSelect")}</span>
                  </div>
                </div>

                {/* Check Mark */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0"
                  >
                    <Check className="w-5 h-5 text-emerald-600" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Faculty Summary */}
      {selectedFacultyId && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center justify-center gap-2 py-3 px-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl"
        >
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm text-emerald-700 dark:text-emerald-300">
            {t("selected")}:{" "}
            <span className="font-bold">
              {faculties.find((f) => f.id === selectedFacultyId)?.name}
            </span>
          </span>
        </motion.div>
      )}

      {/* Language Selection - Appears after faculty selection */}
      {selectedFacultyId && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          {/* Language Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full mb-3">
              <Globe2 className="w-4 h-4" />
              <span className="text-sm font-semibold">{langT("title")}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm mx-auto">
              {langT("subtitle")}
            </p>
          </div>

          {/* Language Pills */}
          <div className="flex justify-center gap-4">
            {languageOptions.map((lang, index) => {
              const isSelected = selectedLanguage === lang.code;
              
              return (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => onLanguageSelect(lang.code)}
                  className={`
                    group relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300
                    ${isSelected
                      ? "bg-linear-to-br from-cyan-500 to-blue-600 border-transparent text-white shadow-xl shadow-cyan-500/20"
                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-lg"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Flag */}
                  <span className="text-3xl">{lang.flag}</span>
                  
                  {/* Label */}
                  <div className="text-left">
                    <p className={`
                      font-bold text-base
                      ${isSelected ? "text-white" : "text-gray-900 dark:text-white"}
                    `}>
                      {langT(lang.labelKey)}
                    </p>
                    <p className={`
                      text-xs font-medium
                      ${isSelected ? "text-white/70" : "text-gray-500 dark:text-gray-400"}
                    `}>
                      {lang.code === "EN" ? "English" : "Türkçe"}
                    </p>
                  </div>

                  {/* Check */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center ml-2"
                    >
                      <Check className="w-4 h-4 text-cyan-600" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Language Selected Summary */}
          {selectedLanguage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 mt-6 py-3 px-5 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl"
            >
              <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">
                {langT("selected")}:{" "}
                <span className="font-bold">
                  {selectedLanguage === "EN" ? langT("english") : langT("turkish")}
                </span>
              </span>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
