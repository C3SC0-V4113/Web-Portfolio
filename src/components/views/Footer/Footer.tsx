import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="px-4 py-6 md:grid-cols-2 md:px-6 lg:py-8 lg:px-12 xl:px-20 2xl:px-60 bg-secondary text-secondary-foreground">
      <p>{t("footer", { year: new Date().getFullYear() })}</p>
    </div>
  );
};
