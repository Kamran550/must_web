import HeroCentered from "@/components/sections/home/HeroCentered";
import ProgramsExplorer from "@/components/sections/home/ProgramsExplorer";
import AdmissionSteps from "@/components/sections/home/AdmissionSteps";
import TuitionScholarship from "@/components/sections/home/TuitionScholarship";
import NewsPreview from "@/components/sections/home/NewsPreview";
import ApplyCTA from "@/components/sections/ApplyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#005A7A] font-sans">
      <HeroCentered />

      <ProgramsExplorer />

      <AdmissionSteps />

      <TuitionScholarship />

      <NewsPreview />

      <ApplyCTA />
      {/* <ApplyBanner /> */}
    </main>
  );
}
