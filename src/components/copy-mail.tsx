"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CopyMail() {
    const t = useTranslations();
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
                <span className="underline-offset-3 hover:underline decoration-neutral-600 decoration-1 flex gap-x-2 items-center">
                    <p className="underline">
                        {copy ? (t("contact.title") === "Contact" ? "copied to clipboard" : "copiado") : ('email')}
                    </p>
                </span>
            </button>
        </div>
    );
}
