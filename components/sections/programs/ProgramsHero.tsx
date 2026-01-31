"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap, BookOpen, Users, Award, Briefcase } from "lucide-react";

export default function ProgramsHero() {
  const t = useTranslations("programs.hero");

  return (
    <section className="relative w-full min-h-[70vh] pt-32 pb-20 overflow-hidden">
      {/* Maroon gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#722F37] via-[#5a252c] to-[#3a191e]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white/90 text-sm font-medium">
                Academic Excellence
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <div className="w-20 h-1 bg-[#d4af37] rounded-full mb-6" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-10">
              {t("subtitle")}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: BookOpen, value: "20+", label: "Programs" },
                { icon: Users, value: "800+", label: "Students" },
                { icon: Award, value: "95%", label: "Employment" },
                { icon: Briefcase, value: "50+", label: "Partners" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <stat.icon className="w-5 h-5 text-[#d4af37] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="space-y-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Bachelor's Programs",
                  desc: "4-year undergraduate degrees in science & technology",
                },
                {
                  icon: BookOpen,
                  title: "Master's Programs",
                  desc: "Advanced specialization with research focus",
                },
                {
                  icon: Award,
                  title: "Doctoral Programs",
                  desc: "PhD opportunities in cutting-edge fields",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
