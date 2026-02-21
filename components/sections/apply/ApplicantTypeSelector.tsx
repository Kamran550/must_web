"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Building2, 
  Check, 
  ArrowRightLeft,
  UserCheck,
  Sparkles
} from "lucide-react";
import { useTranslations } from "next-intl";

type ApplicantType = "student" | "agency" | "transfer";

interface ApplicantTypeSelectorProps {
  selectedType: ApplicantType | null;
  onSelect: (type: ApplicantType) => void;
}

const applicantOptions = [
  { 
    type: "student" as ApplicantType, 
    icon: User, 
    labelKey: "student", 
    descKey: "studentDesc",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  },
  { 
    type: "agency" as ApplicantType, 
    icon: Building2, 
    labelKey: "agency", 
    descKey: "agencyDesc",
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
  { 
    type: "transfer" as ApplicantType, 
    icon: ArrowRightLeft, 
    labelKey: "transfer", 
    descKey: "transferDesc",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30",
    iconColor: "text-violet-600 dark:text-violet-400"
  },
];

export default function ApplicantTypeSelector({
  selectedType,
  onSelect,
}: ApplicantTypeSelectorProps) {
  const t = useTranslations("apply.applicantType");

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4"
        >
          <UserCheck className="w-4 h-4" />
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

      {/* Applicant Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {applicantOptions.map((option, index) => {
          const Icon = option.icon;
          const isSelected = selectedType === option.type;

          return (
            <motion.button
              key={option.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => onSelect(option.type)}
              className={`
                group relative text-left p-6 rounded-3xl border-2 transition-all duration-300 overflow-hidden
                ${isSelected
                  ? `bg-linear-to-br ${option.gradient} border-transparent text-white shadow-2xl`
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
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all
                  ${isSelected
                    ? "bg-white/20"
                    : `bg-linear-to-br ${option.iconBg}`
                  }
                `}>
                  <Icon className={`w-8 h-8 ${isSelected ? "text-white" : option.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className={`
                  text-xl font-bold mb-2
                  ${isSelected ? "text-white" : "text-gray-900 dark:text-white"}
                `}>
                  {t(option.labelKey)}
                </h3>
                
                <p className={`
                  text-sm leading-relaxed
                  ${isSelected ? "text-white/80" : "text-gray-500 dark:text-gray-400"}
                `}>
                  {t(option.descKey)}
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
      {selectedType && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 py-3 px-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl"
        >
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm text-emerald-700 dark:text-emerald-300">
            {t("title")}:{" "}
            <span className="font-bold">
              {t(applicantOptions.find(o => o.type === selectedType)?.labelKey || "")}
            </span>
          </span>
        </motion.div>
      )}
    </div>
  );
}
