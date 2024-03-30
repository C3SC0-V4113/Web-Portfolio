import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { ResumeeCard } from "./ResumeeCard";
import { useTranslation } from "react-i18next";

export const About = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["about"]);

  return (
    <>
      <Container
        id="about"
        className="flex flex-col bg-primary text-primary-foreground"
      >
        <div className="flex flex-col gap-0.5 text-center">
          <span className="text-sm font-light">{t("subtitle")}</span>
          <h1 className="text-2xl font-bold text-background">{t("title")}</h1>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-16">
          <div className="flex justify-center align-middle max-h-64">
            <Avatar className="w-40 h-40 md:w-56 md:h-56 bg-secondary">
              <AvatarImage
                src="/practice_4__1_-removebg.png"
                alt="about-me_img"
              />
              <AvatarFallback>FV</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-center gap-3 align-middle md:col-span-2">
            <h2 className="text-lg font-bold text-center md:text-justify">
              {t("body.title")}
            </h2>
            <p>{t("body.body.0")}</p>
            <p>{t("body.body.1")}</p>
            <p>{t("body.body.2")}</p>
            <Button
              className="w-full md:max-w-72"
              onClick={() => setOpen(true)}
              variant={"secondary"}
            >
              {t("resumeeButton")}
            </Button>
          </div>
        </div>
      </Container>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("modal.title")}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-5 sm:flex-row">
              <ResumeeCard
                title={t("modal.es_resumee")}
                pdfUrl="/pdf/Francisco_Valle-Desarrollador_React.pdf"
              />
              <ResumeeCard
                title={t("modal.en_resumee")}
                pdfUrl="/pdf/Francisco_Valle-React_Developer.pdf"
              />
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};
