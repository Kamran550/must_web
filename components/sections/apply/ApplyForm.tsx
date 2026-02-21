"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  GraduationCap, 
  Building2, 
  FileText,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Degree } from "@/lib/types/degree";
import { Faculty } from "@/lib/types/faculty";
import ApplicantTypeSelector from "./ApplicantTypeSelector";
import DegreeSelector from "./DegreeSelector";
import FacultySelector, { TeachingLanguage } from "./FacultySelector";
import StudentApplicationForm from "./StudentApplicationForm";
import AgencyApplicationForm from "./AgencyApplicationForm";
import TransferApplicationForm from "./TransferApplicationForm";

type ApplicantType = "student" | "agency" | "transfer";
type Step = "type" | "degree" | "faculty" | "form";

const STORAGE_KEY = "apply_form_state";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

const stepConfig = [
  { key: "type" as Step, icon: UserCheck, label: "stepLabels.type" },
  { key: "degree" as Step, icon: GraduationCap, label: "stepLabels.degree" },
  { key: "faculty" as Step, icon: Building2, label: "stepLabels.faculty" },
  { key: "form" as Step, icon: FileText, label: "stepLabels.form" },
];

export default function ApplyForm() {
  const t = useTranslations("apply");
  const [currentStep, setCurrentStep] = useState<Step>("type");
  const [applicantType, setApplicantType] = useState<ApplicantType | null>(null);
  const [selectedDegree, setSelectedDegree] = useState<Degree | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<TeachingLanguage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const {
          currentStep: savedStep,
          applicantType: savedType,
          selectedDegree: savedDegree,
          selectedFaculty: savedFaculty,
          selectedLanguage: savedLanguage,
          timestamp,
        } = JSON.parse(saved);

        const isExpired = timestamp && Date.now() - timestamp > SESSION_TIMEOUT;

        if (!isExpired) {
          if (savedStep) setCurrentStep(savedStep);
          if (savedType) setApplicantType(savedType);
          if (savedDegree) setSelectedDegree(savedDegree);
          if (savedFaculty) setSelectedFaculty(savedFaculty);
          if (savedLanguage) setSelectedLanguage(savedLanguage);
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Error loading apply form state:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save state to sessionStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            currentStep,
            applicantType,
            selectedDegree,
            selectedFaculty,
            selectedLanguage,
            timestamp: Date.now(),
          })
        );
      } catch (error) {
        console.error("Error saving apply form state:", error);
      }
    }
  }, [currentStep, applicantType, selectedDegree, selectedFaculty, selectedLanguage, isLoaded]);

  const handleApplicantTypeSelect = (type: ApplicantType) => {
    setApplicantType(type);
  };

  const handleDegreeSelect = (degree: Degree) => {
    setSelectedDegree(degree);
    setSelectedFaculty(null);
  };

  const handleFacultySelect = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setSelectedLanguage(null);
  };

  const handleLanguageSelect = (language: TeachingLanguage) => {
    setSelectedLanguage(language);
  };

  const handleNext = () => {
    if (currentStep === "type" && applicantType) {
      setCurrentStep("degree");
    } else if (currentStep === "degree" && selectedDegree) {
      setCurrentStep("faculty");
    } else if (currentStep === "faculty" && selectedFaculty) {
      setCurrentStep("form");
    }
  };

  const handleBack = () => {
    if (currentStep === "degree") {
      setCurrentStep("type");
    } else if (currentStep === "faculty") {
      setCurrentStep("degree");
    } else if (currentStep === "form") {
      setCurrentStep("faculty");
    }
  };

  const canProceed = () => {
    if (currentStep === "type") return applicantType !== null;
    if (currentStep === "degree") return selectedDegree !== null;
    if (currentStep === "faculty") return selectedFaculty !== null && selectedLanguage !== null;
    return false;
  };

  const getStepIndex = (step: Step): number => {
    const steps: Step[] = ["type", "degree", "faculty", "form"];
    return steps.indexOf(step);
  };

  const isStepCompleted = (step: Step): boolean => {
    if (step === "type") return applicantType !== null;
    if (step === "degree") return selectedDegree !== null;
    if (step === "faculty") return selectedFaculty !== null && selectedLanguage !== null;
    if (step === "form") return false;
    return false;
  };

  const isStepAccessible = (step: Step): boolean => {
    const stepIndex = getStepIndex(step);
    const currentIndex = getStepIndex(currentStep);
    if (stepIndex < currentIndex) return true;
    if (stepIndex === currentIndex) return true;
    if (stepIndex === currentIndex + 1) return isStepCompleted(currentStep);
    return false;
  };

  const handleStepClick = (step: Step) => {
    if (isStepAccessible(step)) {
      setCurrentStep(step);
    }
  };

  const clearState = () => {
    setCurrentStep("type");
    setApplicantType(null);
    setSelectedDegree(null);
    setSelectedFaculty(null);
    setSelectedLanguage(null);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  if (!isLoaded) {
    return null;
  }

  const currentStepIndex = getStepIndex(currentStep);
  const progress = ((currentStepIndex + 1) / 4) * 100;

  return (
    <div className="min-h-[600px]">
      {/* Progress Bar - Top */}
      <div className="relative mb-8">
        <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        {/* Step Pills */}
        <div className="flex justify-between mt-6">
          {stepConfig.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.key;
            const isCompleted = getStepIndex(currentStep) > index;
            const isAccessible = isStepAccessible(step.key);
            
            return (
              <motion.button
                key={step.key}
                onClick={() => handleStepClick(step.key)}
                disabled={!isAccessible}
                className={`
                  group relative flex flex-col items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300
                  ${isActive 
                    ? "bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25" 
                    : isCompleted
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
                  }
                  ${isAccessible && !isActive ? "cursor-pointer hover:scale-105" : ""}
                  ${!isAccessible ? "cursor-not-allowed opacity-50" : ""}
                `}
                whileHover={isAccessible ? { y: -2 } : {}}
                whileTap={isAccessible ? { scale: 0.98 } : {}}
              >
                <div className={`
                  w-10 h-10 rounded-xl flex items-center justify-center transition-all
                  ${isActive 
                    ? "bg-white/20" 
                    : isCompleted
                      ? "bg-emerald-200 dark:bg-emerald-800/50"
                      : "bg-gray-200 dark:bg-gray-700"
                  }
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold hidden sm:block">
                  {t(step.label)}
                </span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 rounded-3xl -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-br from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl -z-10" />

        {/* Step Content */}
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {currentStep === "type" && (
                <ApplicantTypeSelector
                  selectedType={applicantType}
                  onSelect={handleApplicantTypeSelect}
                />
              )}

              {currentStep === "degree" && (
                <DegreeSelector
                  onSelect={handleDegreeSelect}
                  selectedDegreeId={selectedDegree?.id}
                />
              )}

              {currentStep === "faculty" && selectedDegree && (
                <FacultySelector
                  faculties={selectedDegree.faculties}
                  selectedFacultyId={selectedFaculty?.id || null}
                  onSelect={handleFacultySelect}
                  selectedLanguage={selectedLanguage}
                  onLanguageSelect={handleLanguageSelect}
                />
              )}

              {currentStep === "form" && selectedFaculty && applicantType === "student" && (
                <StudentApplicationForm
                  facultyId={selectedFaculty.id}
                  facultyName={selectedFaculty.name}
                  degreeId={selectedDegree?.id || 0}
                  degreeName={selectedDegree?.name || ""}
                  teachingLanguage={selectedLanguage || "EN"}
                  onSubmitSuccess={clearState}
                />
              )}

              {currentStep === "form" && selectedFaculty && applicantType === "agency" && (
                <AgencyApplicationForm
                  facultyId={selectedFaculty.id}
                  facultyName={selectedFaculty.name}
                  degreeId={selectedDegree?.id || 0}
                  degreeName={selectedDegree?.name || ""}
                  teachingLanguage={selectedLanguage || "EN"}
                  onSubmitSuccess={clearState}
                />
              )}

              {currentStep === "form" && selectedFaculty && applicantType === "transfer" && (
                <TransferApplicationForm
                  facultyId={selectedFaculty.id}
                  facultyName={selectedFaculty.name}
                  degreeId={selectedDegree?.id || 0}
                  degreeName={selectedDegree?.name || ""}
                  teachingLanguage={selectedLanguage || "EN"}
                  onSubmitSuccess={clearState}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation - Fixed Bottom Bar Style */}
      {currentStep !== "form" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-center justify-between gap-4 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
        >
          <button
            onClick={handleBack}
            disabled={currentStep === "type"}
            className={`
              group flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300
              ${currentStep === "type"
                ? "text-gray-300 dark:text-gray-700 cursor-not-allowed"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }
            `}
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>{t("navigation.back")}</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>
              {t("navigation.step")} {currentStepIndex + 1} / 4
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`
              group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${canProceed()
                ? "bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
                : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }
            `}
          >
            <span>{t("navigation.continue")}</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
