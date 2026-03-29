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
      image: "/images/vice-rector.jpeg",
      positionKey: "viceRector.position",
      nameKey: "viceRector.name",
      emailKey: "viceRector.email",
    },
    {
      id: "rector-advisor",
      image: "/images/chancellor.jpeg",
      positionKey: "rectorAdvisor.position",
      nameKey: "rectorAdvisor.name",
      emailKey: "rectorAdvisor.email",
    },
    {
      id: "secretary-general",
      image: "/images/secretary-general.jpeg",
      positionKey: "secretaryGeneral.position",
      nameKey: "secretaryGeneral.name",
      emailKey: "secretaryGeneral.email",
    },
    {
      id: "office-director",
      image: "/images/office-director.jpeg",
      positionKey: "officeDirector.position",
      nameKey: "officeDirector.name",
      emailKey: "officeDirector.email",
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 font-sans pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-88 w-88 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </motion.section>

        <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {staff.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-slate-900/90 to-slate-950/90 p-6 shadow-xl shadow-black/35 backdrop-blur-xl transition-colors hover:border-cyan-400/40"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70" />

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="relative mx-auto h-40 w-40 shrink-0 sm:mx-0">
                  <div className="absolute -inset-2 rounded-3xl bg-cyan-400/20 blur-lg transition-all duration-500 group-hover:bg-cyan-400/30" />
                  <div className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-white/15">
                    <Image
                      src={member.image}
                      alt={t(member.nameKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="mb-4">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1.5">
                      <Briefcase className="h-4 w-4 text-cyan-300" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                        {t(member.positionKey)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                      {t(member.nameKey)}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-cyan-400/35 hover:bg-white/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15">
                        <Mail className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Email
                        </p>
                        <a
                          href={`mailto:${t(member.emailKey)}`}
                          className="block truncate text-sm font-medium text-slate-100 transition-colors hover:text-cyan-300"
                        >
                          {t(member.emailKey)}
                        </a>
                      </div>
                    </div>

                    {/* <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-cyan-400/35 hover:bg-white/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15">
                        <Phone className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Office
                        </p>
                        <p className="text-sm font-medium text-slate-100">
                          +48 22 579 10 00
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}



