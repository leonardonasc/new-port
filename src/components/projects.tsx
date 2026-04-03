import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
    title: string;
    where: string;
    whereLink: string;
    description: string;
    stacks: string;
}

export default function Projects({ title, description, where, whereLink, stacks }: ProjectsProps) {

    return (
        <div className="border border-neutral-700/40 sm:w-[32%] md:w-[45%] p-4 rounded-lg"
            style={{
              
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
            }}
        >

            <div className="flex justify-between items-start">
                <div className="gap-x-2 flex flex-col">
                    <h1 className="text-sm font-semibold decoration-neutral-600">{title}</h1>
                    <a href={whereLink} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 flex gap-x-2 items-center">
                        {where} <ExternalLink size={12} className="inline-block text-neutral-400" />
                    </a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <p className="text-sm text-zinc-400"
                >{description}</p>
            </motion.div>
        </div>
    )
}
