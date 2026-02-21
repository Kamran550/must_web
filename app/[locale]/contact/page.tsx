import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactSocial from "@/components/sections/contact/ContactSocial";

export default function ContactPage() {
  return (
    <main className="min-h-screen font-sans">
      <ContactHero />
      <ContactInfo />
      <section className="w-full bg-[#005A7A]">
        <ContactMap />
      </section>
      <ContactSocial />
    </main>
  );
}
