import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type AnimatedButtonProps = {
    textPrimary: string;
    textSecondary: string;
    url: string;
};

const primary = {
    rest: { y: "0%", opacity: 1 },
    hover: { y: "-110%", opacity: 0 },
};

const secondary = {
    rest: { y: "110%", opacity: 0 },
    hover: { y: "0%", opacity: 1 },
};

export default function AnimatedButton({
    textPrimary,
    textSecondary,
    url,
}: AnimatedButtonProps) {
    return (
        <motion.a
            href={url} target="_blank" rel="noopener noreferrer"
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="group relative w-full flex h-10 items-center justify-center overflow-hidden border border-neutral-700/40 px-4 leading-none"
        >
            <motion.span
                variants={primary}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                {textPrimary}
            </motion.span>

            <motion.span
                variants={secondary}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                {textSecondary} <ExternalLink size={12} className="inline-block ml-1" />
            </motion.span>
        </motion.a>
    );
}