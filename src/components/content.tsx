"use client";

import CopyMail from "./copy-mail";
import Projects from "./projects";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import AnimatedButton from "./animated-button";

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
                    min-h-screen flex flex-col gap-y-12 py-25 px-10 line-clamp-2 text-neutral-300 leading-6"
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
                {/* todo: arrumar os leadings */}
                <h2 className="text-neutral-400 text-sm leading-6">{t.rich("description", {
                    span: (chunks) => <span className="text-neutral-300 underline underline-offset-1">{chunks}</span>
                })}</h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
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
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col gap-y-6"
            >
                <h3 className="text-md text-neutral-200 font-semibold">{t("experience.title")}</h3>
                <div className="flex flex-col gap-y-3">
                    <div>
                        <p className="text-neutral-500 text-xs">{t("experience.duration")}</p>

                        <div className="flex gap-x-1 text-sm">
                            <p className="font-semibold">{t("experience.role")} - </p>
                            <a href="https://bluepaper.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline underline-offset-1 flex gap-x-2 items-center">
                                <p className="text-zinc-400">@{t("experience.company")}</p>
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-400">{t("experience.description")}</p>

                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col gap-y-6">
                <h3 className="text-md text-neutral-200 font-semibold">{t("education.title")}</h3>
                <div className="flex flex-col gap-y-5 text-neutral-200">
                    <div>
                        <p className="text-neutral-500 text-xs">{t("education.degreeDate")}</p>
                        <p className="text-sm">{t("education.degree")}</p>
                        <p className="text-sm text-neutral-500">{t("education.country")}</p>
                    </div>

                    <div>
                        <p className="text-neutral-500 text-xs">{t("education.courseDate")}</p>
                        <p className="text-sm">{t("education.course")}</p>
                        <p className="text-sm text-neutral-500">{t("education.country")}</p>
                    </div>

                    <div>
                        <p className="text-neutral-500 text-xs">{t("education.oracleDate")}</p>
                        <p className="text-sm">{t("education.oracle")}</p>
                        <p className="text-sm text-neutral-500">Online</p>
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col gap-y-6"
            >
                <h3 className="text-md text-neutral-200 font-semibold">Skills</h3>
                <div className="flex gap-y-6 gap-x-6 text-sm text-neutral-500">
                    <div className="flex-col">
                        <p>HTML5 / CSS</p>
                        <p>TypeScript</p>
                        <p>React</p>
                        <p>AdonisJS</p>
                        <p>Expo</p>
                    </div>
                    <div className="flex-col">
                        <p>Git / GitHub</p>
                        <p>JavaScript</p>
                        <p>Tailwind CSS</p>
                        <p>Next.js</p>
                        <p>Turso (SQLite)</p>

                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="flex flex-col gap-y-6 w-full"
            >
                <div className="w-full h-px bg-neutral-800" />
                <h3 className="text-md text-neutral-200 font-semibold">{t("contact.title")}</h3>
                <div className="w-full items-center flex flex-col gap-2 md:flex-row flex-1">

                    <AnimatedButton
                        textPrimary={t("contact.email")}
                        textSecondary={t("contact.sendEmail")}
                        url="mailto:leonardo.nasmt@gmail.com"
                    />

                    <AnimatedButton
                        textPrimary={t("contact.github")}
                        textSecondary={t("contact.viewGithub")}
                        url="https://github.com/leonardonasc"
                    />

                    <AnimatedButton
                        textPrimary={t("contact.linkedIn")}
                        textSecondary={t("contact.viewLinkedIn")}
                        url="https://linkedin.com/in/leonardownascimento"
                    />

                </div>
            </motion.div>

        </motion.div>
    )
}
