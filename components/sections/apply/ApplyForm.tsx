"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

export default function ApplyForm() {
  const t = useTranslations("apply");
  const [currentStep, setCurrentStep] = useState<Step>("type");
  const [applicantType, setApplicantType] = useState<ApplicantType | null>(
    null
  );
  const [selectedDegree, setSelectedDegree] = useState<Degree | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [selectedLanguage, setSelectedLanguage] =
    useState<TeachingLanguage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from sessionStorage on mount (only within same tab session)
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

        // Check if session is still valid (within 30 minutes)
        const isExpired = timestamp && Date.now() - timestamp > SESSION_TIMEOUT;

        if (!isExpired) {
          if (savedStep) setCurrentStep(savedStep);
          if (savedType) setApplicantType(savedType);
          if (savedDegree) setSelectedDegree(savedDegree);
          if (savedFaculty) setSelectedFaculty(savedFaculty);
          if (savedLanguage) setSelectedLanguage(savedLanguage);
        } else {
          // Clear expired session
          sessionStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Error loading apply form state:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save state to sessionStorage whenever it changes
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
  }, [
    currentStep,
    applicantType,
    selectedDegree,
    selectedFaculty,
    selectedLanguage,
    isLoaded,
  ]);

  const handleApplicantTypeSelect = (type: ApplicantType) => {
    setApplicantType(type);
  };

  const handleDegreeSelect = (degree: Degree) => {
    setSelectedDegree(degree);
    setSelectedFaculty(null); // Reset faculty when degree changes
  };

  const handleFacultySelect = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setSelectedLanguage(null); // Reset language when faculty changes
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
    if (currentStep === "faculty")
      return selectedFaculty !== null && selectedLanguage !== null;
    return false;
  };

  // Get step index
  const getStepIndex = (step: Step): number => {
    const steps: Step[] = ["type", "degree", "faculty", "form"];
    return steps.indexOf(step);
  };

  // Check if step is completed
  const isStepCompleted = (step: Step): boolean => {
    if (step === "type") return applicantType !== null;
    if (step === "degree") return selectedDegree !== null;
    if (step === "faculty")
      return selectedFaculty !== null && selectedLanguage !== null;
    if (step === "form") return false; // Form step is never "completed" in the traditional sense
    return false;
  };

  // Check if step is accessible
  const isStepAccessible = (step: Step): boolean => {
    const stepIndex = getStepIndex(step);
    const currentIndex = getStepIndex(currentStep);

    // Can always go back to previous steps
    if (stepIndex < currentIndex) return true;

    // Can stay on current step
    if (stepIndex === currentIndex) return true;

    // Can go forward only if current step is completed
    if (stepIndex === currentIndex + 1) return isStepCompleted(currentStep);

    // Can't skip steps
    return false;
  };

  // Handle step click
  const handleStepClick = (step: Step) => {
    if (isStepAccessible(step)) {
      setCurrentStep(step);
    }
  };

  // Clear state (called on successful submission)
  const clearState = () => {
    setCurrentStep("type");
    setApplicantType(null);
    setSelectedDegree(null);
    setSelectedFaculty(null);
    setSelectedLanguage(null);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  // Don't render until state is loaded from localStorage
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-2 sm:gap-4">
          {(["type", "degree", "faculty", "form"] as Step[]).map(
            (step, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => handleStepClick(step)}
                  disabled={!isStepAccessible(step)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                    currentStep === step
                      ? "bg-[#722F37] text-white shadow-lg ring-2 ring-[#722F37]/30"
                      : getStepIndex(currentStep) > index
                      ? "bg-[#d4af37]/30 text-[#722F37] border-2 border-[#d4af37] hover:bg-[#d4af37]/40 cursor-pointer"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 border-2 border-gray-200 dark:border-slate-700"
                  } ${
                    isStepAccessible(step) && currentStep !== step
                      ? "hover:scale-110 cursor-pointer"
                      : !isStepAccessible(step)
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
                {index < 3 && (
                  <div
                    className={`w-8 sm:w-16 md:w-24 h-1 rounded-full transition-colors mx-1 ${
                      getStepIndex(currentStep) > index
                        ? "bg-[#d4af37]"
                        : "bg-gray-200 dark:bg-slate-700"
                    }`}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
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

        {currentStep === "form" &&
          selectedFaculty &&
          applicantType === "student" && (
            <StudentApplicationForm
              facultyId={selectedFaculty.id}
              facultyName={selectedFaculty.name}
              degreeId={selectedDegree?.id || 0}
              degreeName={selectedDegree?.name || ""}
              teachingLanguage={selectedLanguage || "EN"}
              onSubmitSuccess={clearState}
            />
          )}

        {currentStep === "form" &&
          selectedFaculty &&
          applicantType === "agency" && (
            <AgencyApplicationForm
              facultyId={selectedFaculty.id}
              facultyName={selectedFaculty.name}
              degreeId={selectedDegree?.id || 0}
              degreeName={selectedDegree?.name || ""}
              teachingLanguage={selectedLanguage || "EN"}
              onSubmitSuccess={clearState}
            />
          )}

        {currentStep === "form" &&
          selectedFaculty &&
          applicantType === "transfer" && (
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

      {/* Navigation Buttons */}
      {currentStep !== "form" && (
        <div className="flex justify-between gap-4 mt-10">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === "type"}
            className="flex items-center gap-2 h-12 px-6 rounded-xl border-2 border-gray-200 dark:border-slate-700 hover:border-[#722F37] hover:text-[#722F37] disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("navigation.back")}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-2 h-12 px-6 rounded-xl bg-[#722F37] hover:bg-[#5a252c] text-white shadow-lg disabled:opacity-50 disabled:hover:bg-[#722F37]"
          >
            {t("navigation.continue")}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
