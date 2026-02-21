"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, Building2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function AdministrativeUnitsPage() {
  const t = useTranslations("about.administrativeUnits");

  const staff = [
    {
      id: "vice-rector",
      image: "/images/vice-rector.png",
      positionKey: "viceRector.position",
      nameKey: "viceRector.name",
      emailKey: "viceRector.email",
    },
    {
      id: "rector-advisor",
      image: "/images/rector-advisor.png",
      positionKey: "rectorAdvisor.position",
      nameKey: "rectorAdvisor.name",
      emailKey: "rectorAdvisor.email",
    },
    {
      id: "secretary-general",
      image: "/images/secretary-general.png",
      positionKey: "secretaryGeneral.position",
      nameKey: "secretaryGeneral.name",
      emailKey: "secretaryGeneral.email",
    },
    {
      id: "office-director",
      image: "/images/office-director.png",
      positionKey: "officeDirector.position",
      nameKey: "officeDirector.name",
      emailKey: "officeDirector.email",
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black font-sans pt-24 pb-20">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section with Icon */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl mb-8 shadow-xl">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              {t("title")}
            </h1>
            <div className="w-24 h-1.5 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 shadow-2xl hover:shadow-amber-500/20">
                {/* Card Header with Position Badge */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400" />
                
                <div className="p-8">
                  {/* Image Container */}
                  <div className="relative mb-6">
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-white/10 group-hover:ring-amber-500/50 transition-all duration-500">
                        <Image
                          src={member.image}
                          alt={t(member.nameKey)}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    
                    {/* Position Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max">
                      <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-500 to-orange-600 rounded-full shadow-lg">
                        <Briefcase className="h-4 w-4 text-white" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {t(member.positionKey)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-8 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {t(member.nameKey)}
                    </h3>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
                      <div className="flex items-center justify-center w-10 h-10 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                        <Mail className="h-5 w-5 text-amber-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${t(member.emailKey)}`}
                          className="text-sm font-medium text-white hover:text-amber-400 transition-colors truncate block"
                        >
                          {t(member.emailKey)}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300">
                      <div className="flex items-center justify-center w-10 h-10 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                        <Phone className="h-5 w-5 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                          Office
                        </p>
                        <p className="text-sm font-medium text-white">
                          +48 22 579 10 00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}



