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
    <section className="py-24 md:py-32 relative">
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23722F37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Inline header - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 max-w-2xl">
            {t("title", { default: "MUST in Numbers" })}
          </h2>
          <div className="w-16 h-1 bg-[#722F37] rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl">
            {t("subtitle", {
              default: "Excellence in science and technology education since 2020",
            })}
          </p>
        </motion.div>

        {/* Asymmetric bento grid - 2 large, 2 small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {universityStats.map((stat, index) => {
            const Icon = statIcons[stat.label.toLowerCase()] || Award;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 backdrop-blur-sm hover:border-[#722F37]/50 dark:hover:border-[#722F37]/50 transition-all duration-300"
              >
                {/* Icon top-left */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-[#722F37]/10 group-hover:bg-[#722F37]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#722F37]" />
                </div>

                <div className="p-6 lg:p-8 flex flex-col min-h-[180px]">
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#722F37] dark:text-[#a04050] mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium mt-auto">
                    {t(stat.label.toLowerCase())}
                  </p>
                </div>

                {/* Bottom accent bar - visible on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#722F37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
