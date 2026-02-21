"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

interface props {
    language: "en" | "pt";
}

export default function CopyMail({ language }: props) {
    const [copy, setCopy] = useState(false);

    const user = "leonardo.nasmt";
    const at = "@";
    const domain = "gmail.com";

    const email = `${user}${at}${domain}`;

    return (
        <div className="relative group flex justify-center items-center rounded-sm">
            <button
                onClick={() => {
                    navigator.clipboard.writeText(email);
                    setCopy(true);
                    setTimeout(() => setCopy(false), 2000);
                }}
                className="hover:cursor-pointer flex items-center"
                aria-label="Copy email"
            >
                <span className="underline-offset-3 hover:underline decoration-neutral-600 decoration-1 flex gap-x-2 items-center"><p>email {language === "en" ? "(click to copy)" : "(clique para copiar)"}
                </p> <Copy className="text-white" style={{
                    color: copy ? "#22c55e" : "#f1f1f1"
                }} size={12} /></span>

            </button>

            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded ml-1 px-2 py-1 text-xs text-neutral-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {language === "en" ? "Copy e-mail" : "Copiar e-mail"}
            </span>

        </div>
    );
}
