import { useTranslations } from "next-intl";

export default function page() {
    const t = useTranslations();

  return (
    <div>
        <h1>{t("projects.title")}</h1>
    </div>
  )
}
