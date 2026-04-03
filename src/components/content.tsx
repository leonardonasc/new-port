"use client";

import { ArrowUpRight } from "lucide-react";
import CopyMail from "./copy-mail";
import Projects from "./projects";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Content() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="xs:w-full 
                    sm:w-full sm:px-20
                    md:w-180 md:px-0
                    lg:w-180 lg:px-0
                    xl:w-180 xl:px-0
                    2xl:w-180 2xl:px-0
                    min-h-screen flex flex-col gap-y-15 py-25 px-10 line-clamp-2 text-neutral-300 leading-6"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex flex-col gap-y-10">
                <div
                    className="flex justify-between items-center">
                    <h1 className="font-semibold text-neutral-200">Leonardo Nascimento</h1>
                    <div className="flex gap-x-2 text-neutral-500 items-center text-sm">
                        <a
                            href="/en"
                            className="hover:text-neutral-200 hover:underline cursor-pointer underline-offset-2"
                            style={{ textDecoration: locale === "en" ? "underline" : "none", color: locale === "en" ? "#e5e5e5" : "#71717a" }}
                        >EN</a>
                        <span>/</span>
                        <a
                            href="/pt"
                            className="hover:text-neutral-200 hover:underline cursor-pointer underline-offset-2"
                            style={{ textDecoration: locale === "pt" ? "underline" : "none", color: locale === "pt" ? "#e5e5e5" : "#71717a" }}
                        >PT</a>
                    </div>
                </div>
                <h2 className="text-neutral-200">{t("description")}</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}>
                <div className="flex gap-x-1 items-start">
                    <p>{t("contact.title")}:</p> <CopyMail />.
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col gap-y-6">
                <h3 className="text-md text-neutral-200 font-semibold">{t("projects.title")}</h3>
                <div className="flex flex-col sm:flex-row md:flex-row gap-y-3 md:gap-x-3 justify-between">
                    <Projects
                        title="Cardly"
                        description={t("projects.cardly.description")}
                        stacks={t("projects.cardly.stacks")}
                        where="BluePaper"
                        whereLink="https://bluepaper.io/"
                    />
                    <Projects
                        title="Defante Landing"
                        description={t("projects.defante.description")}
                        stacks={t("projects.defante.stacks")}
                        where="Defante"
                        whereLink="https://www.defante.com.br/"
                    />
                    <Projects
                        title="InstaPix"
                        description={t("projects.instapix.description")}
                        stacks={t("projects.instapix.stacks")}
                        where="BluePaper"
                        whereLink="https://bluepaper.io/"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col gap-y-6">
                <h3 className="text-md text-neutral-200 font-semibold">{t("about.title")}</h3>
                <div className="flex flex-col gap-y-6 text-neutral-200">
                    <p>{t("about.currently")}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
