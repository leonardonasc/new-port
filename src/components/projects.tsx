import { useState } from "react";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface ProjectsProps {
    title: string;
    description: string;
    stacks: string;
}

export default function Projects({ title, description, stacks }: ProjectsProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-700/40 sm:w-[32%] md:w-[35%] p-4 rounded-lg"
            style={{
                height: isOpen ? "auto" : "130px",
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
                justifyContent: isOpen ? "justify-end" : "justify-start",
            }}
        >

            <div className="flex justify-between items-start">
                <h1 className="text-md decoration-neutral-600">{title}</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-neutral-400 hover:text-neutral-200 border border-neutral-700/40 rounded-full p-1">
                    {isOpen ? <ChevronDown size={18} /> : <ChevronDown size={18} className="rotate-90" />}
                </button>
            </div>

            <div>
                <p className="line-clamp-3 text-sm text-zinc-400"
                    style={{
                        height: isOpen ? "55px" : "auto",
                    }}
                >{description}</p>
                {isOpen && (
                    <div className="mt-4 text-sm text-neutral-300 flex flex-col">
                        <DropdownMenuSeparator className="my-2 bg-neutral-700/40" />
                        <p className="text-blue-200/70 text-xs">{stacks}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
