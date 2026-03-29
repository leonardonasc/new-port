import { useState } from "react";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsProps {
    title: string;
    where: string;
    whereLink: string;
    description: string;
    stacks: string;
}

export default function Projects({ title, description, where, whereLink, stacks }: ProjectsProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-700/40 sm:w-[32%] md:w-[35%] p-4 rounded-lg"
            style={{
                height: isOpen ? "auto" : "140px",
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
                justifyContent: isOpen ? "justify-end" : "justify-start",
            }}
        >

            <div className="flex justify-between items-start">
                <div className="gap-x-2 flex flex-col">
                    <h1 className="text-sm font-semibold decoration-neutral-600">{title}</h1>
                    <a href={whereLink} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-2 flex gap-x-2 items-center">
                        {where} <ExternalLink size={12} className="inline-block text-neutral-400" />
                    </a>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-neutral-400 hover:text-neutral-200 border border-neutral-700/40 rounded-lg p-1">
                    {isOpen ? <ChevronDown size={18} /> : <ChevronDown size={18} className="rotate-90" />}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <p className="line-clamp-3 text-sm text-zinc-400"
                    style={{
                        height: isOpen ? "59px" : "auto",
                    }}
                >{description}</p>
                {isOpen && (
                    <div className="mt-4 text-sm text-neutral-300 flex flex-col">
                        <DropdownMenuSeparator className="my-2 bg-neutral-700/40" />
                        <p className="text-blue-200/70 text-xs">{stacks}</p>
                    </div>
                )}
            </motion.div>
        </div>
    )
}
