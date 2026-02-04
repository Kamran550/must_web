"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { universityStats } from "@/constants/stats";
import { useTranslations } from "next-intl";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  type LucideIcon,
} from "lucide-react";

const statIcons: Record<string, LucideIcon> = {
  programs: GraduationCap,
  students: Users,
  "international lecturers": Globe,
  "years of excellence": Award,
};

function Counter({
  end,
  suffix,
  duration = 2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatisticsSection() {
  const t = useTranslations("statistics");

  return (
    <section className="py-20 md:py-28 lg:py-32 relative bg-gradient-to-br from-[#722F37]/5 via-white to-[#d4af37]/5 dark:from-[#722F37]/10 dark:via-black dark:to-[#d4af37]/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#722F37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#722F37 1px, transparent 1px), linear-gradient(90deg, #722F37 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title", { default: "MUST in Numbers" })}
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#722F37] via-[#d4af37] to-[#722F37] rounded-full mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle", {
              default: "Excellence in science and technology education since 2020",
            })}
          </p>
        </motion.div>

        {/* Horizontal scrollable cards on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {universityStats.map((stat, index) => {
            const Icon = statIcons[stat.label.toLowerCase()] || Award;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative min-w-[280px] md:min-w-0 flex-shrink-0 md:flex-shrink"
              >
                <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-[#722F37]/50 dark:hover:border-[#722F37]/50 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#722F37]/10 to-transparent rounded-bl-full" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#722F37]/10 to-[#722F37]/5 dark:from-[#722F37]/20 dark:to-[#722F37]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#722F37] dark:text-[#a04050]" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="relative mb-4">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-[#722F37] to-[#5a252c] dark:from-[#a04050] dark:to-[#722F37] bg-clip-text text-transparent">
                      <Counter end={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {t(stat.label.toLowerCase())}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#722F37] via-[#d4af37] to-[#722F37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
