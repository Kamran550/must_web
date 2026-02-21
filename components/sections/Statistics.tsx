"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { universityStats } from "@/constants/stats";
import { useTranslations } from "next-intl";
import { GraduationCap, Users, Globe, Award, type LucideIcon } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setCount(end);
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
    <section className="py-16 md:py-20 bg-[#00304A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("title")}</h2>
          <p className="text-white/80 text-sm md:text-base">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {universityStats.map((stat, index) => {
            const Icon = statIcons[stat.label.toLowerCase()] || Award;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <Icon className="w-8 h-8 text-[#d4af37] mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-white/80">{t(stat.label.toLowerCase())}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
