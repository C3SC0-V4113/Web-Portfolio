import { Container } from "@/components/ui/container";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["common"]);

  return (
    <Container className="bg-secondary text-secondary-foreground">
      <p>{t("footer", { year: new Date().getFullYear() })}</p>
    </Container>
  );
};
