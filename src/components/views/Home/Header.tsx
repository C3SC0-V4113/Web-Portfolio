import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../../ui/button";
import { ShapeSVG } from "./ShapeSVG";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation(["header"]);
  return (
    <Container id="home" className="grid grid-cols-1 pt-20 md:pt-24">
      <div className="flex flex-col gap-3 text-center md:text-justify ">
        <h1 className="text-3xl font-bold">Francisco Valle</h1>
        <h2 className="text-center md:text-left">{t("description")}</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={() => {
              const element = document.getElementById("contactme");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto"
          >
            {t("CTA.contactme")}
          </Button>
          <Button
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto bg-accent text-accent-foreground hover:text-primary-foreground"
          >
            {t("CTA.myworks")}
          </Button>
        </div>
        <div className="flex flex-row justify-center gap-4 align-middle md:justify-start">
          <IconButton icon={FaGithub} href="https://github.com/C3SC0-V4113" />
          <IconButton
            icon={FaLinkedin}
            href="https://www.linkedin.com/in/francisco-jos%C3%A9-valle-cornejo/"
          />
          <IconButton icon={FaXTwitter} href="https://twitter.com/c3_sc0" />
        </div>
      </div>
      <div className="justify-center hidden align-middle md:flex">
        <ShapeSVG />
      </div>
    </Container>
  );
};
