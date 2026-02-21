import ProgramsHero from "@/components/sections/programs/ProgramsHero";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
// import TestimonialsSection from "@/components/sections/Testimonials";
import ApplyCTA from "@/components/sections/ApplyCTA";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#005A7A] font-sans">
      <ProgramsHero />
      <ProgramsGrid />
      <ApplyCTA />
    </main>
  );
}
