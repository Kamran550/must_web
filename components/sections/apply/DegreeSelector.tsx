"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Loader2, 
  GraduationCap, 
  Check, 
  AlertCircle,
  RefreshCw,
  Sparkles,
  BookOpen
} from "lucide-react";
import { DegreeService } from "@/lib/services/degree.service";
import { Degree } from "@/lib/types/degree";
import { ApiClientError } from "@/lib/api/client";
import { useTranslations } from "next-intl";

interface DegreeSelectorProps {
  onSelect: (degree: Degree) => void;
  selectedDegreeId?: number;
}

const degreeIcons: Record<string, typeof GraduationCap> = {
  "Bachelor's": BookOpen,
  "Master's": GraduationCap,
  "PhD": GraduationCap,
};

const degreeGradients: Record<string, string> = {
  "Bachelor's": "from-emerald-500 to-teal-600",
  "Master's": "from-cyan-500 to-blue-600",
  "PhD": "from-violet-500 to-purple-600",
};

const degreeIconBg: Record<string, string> = {
  "Bachelor's": "from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30",
  "Master's": "from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30",
  "PhD": "from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30",
};

const degreeIconColor: Record<string, string> = {
  "Bachelor's": "text-emerald-600 dark:text-emerald-400",
  "Master's": "text-cyan-600 dark:text-cyan-400",
  "PhD": "text-violet-600 dark:text-violet-400",
};

export default function DegreeSelector({
  onSelect,
  selectedDegreeId,
}: DegreeSelectorProps) {
  const t = useTranslations("apply.degreeSelector");
  const [degrees, setDegrees] = useState<Degree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDegrees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await DegreeService.getAll();
      setDegrees(data);
    } catch (err) {
      const errorMessage =
        err instanceof ApiClientError
          ? err.message
          : err instanceof Error
          ? err.message
          : t("error");
      setError(errorMessage);
      console.error("Failed to fetch degrees:", err);
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    fetchDegrees();
  }, [fetchDegrees]);

  // Loading State
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4"
        >
          <Loader2 className="w-8 h-8 text-white" />
        </motion.div>
        <p className="text-gray-500 dark:text-gray-400 font-medium">{t("loading")}</p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-red-600 dark:text-red-400 font-semibold mb-2">{t("error")}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm">{error}</p>
        <motion.button
          onClick={fetchDegrees}
          className="flex items-center gap-2 px-5 py-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <RefreshCw className="w-4 h-4" />
          {t("retry")}
        </motion.button>
      </div>
    );
  }

  // Empty State
  if (degrees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
          <GraduationCap className="w-10 h-10 text-gray-400" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg">{t("noDegrees")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4"
        >
          <GraduationCap className="w-4 h-4" />
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

      {/* Degree Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {degrees.map((degree, index) => {
          const isSelected = selectedDegreeId === degree.id;
          const Icon = degreeIcons[degree.name] || GraduationCap;
          const gradient = degreeGradients[degree.name] || "from-emerald-500 to-teal-600";
          const iconBg = degreeIconBg[degree.name] || "from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30";
          const iconColor = degreeIconColor[degree.name] || "text-emerald-600 dark:text-emerald-400";

          return (
            <motion.button
              key={degree.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => onSelect(degree)}
              className={`
                group relative text-left p-6 rounded-3xl border-2 transition-all duration-300 overflow-hidden
                ${isSelected
                  ? `bg-linear-to-br ${gradient} border-transparent text-white shadow-2xl`
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-emerald-500/50 hover:shadow-xl"
                }
              `}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Decorations */}
              {isSelected && (
                <>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                </>
              )}

              <div className="relative">
                {/* Icon */}
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all
                  ${isSelected
                    ? "bg-white/20"
                    : `bg-linear-to-br ${iconBg}`
                  }
                `}>
                  <Icon className={`w-7 h-7 ${isSelected ? "text-white" : iconColor}`} />
                </div>

                {/* Content */}
                <h3 className={`
                  text-xl font-bold mb-2
                  ${isSelected ? "text-white" : "text-gray-900 dark:text-white"}
                `}>
                  {degree.name}
                </h3>
                
                <p className={`
                  text-sm
                  ${isSelected ? "text-white/70" : "text-gray-500 dark:text-gray-400"}
                `}>
                  {degree.faculties?.length || 0} {t("faculties") || "faculties"}
                </p>

                {/* Check Mark */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
                  >
                    <Check className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Summary */}
      {selectedDegreeId && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-3 px-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl"
        >
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm text-emerald-700 dark:text-emerald-300">
            {t("selected")}:{" "}
            <span className="font-bold">
              {degrees.find(d => d.id === selectedDegreeId)?.name}
            </span>
          </span>
        </motion.div>
      )}
    </div>
  );
}
