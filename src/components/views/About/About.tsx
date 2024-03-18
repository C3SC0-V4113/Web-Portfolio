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

export const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container
        id="about"
        className="flex flex-col bg-primary text-primary-foreground"
      >
        <div className="flex flex-col gap-0.5 text-center">
          <span className="text-sm font-light">Who Am I</span>
          <h1 className="text-2xl font-bold text-background">About Me</h1>
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
            <h2 className="text-lg font-bold text-justify">
              Desarrollador de Páginas Web Front End
            </h2>
            <p>
              Soy Francisco Valle, un ingeniero de software salvadoreño
              especializado en el desarrollo de páginas web dinamicas y
              estaticas.
            </p>
            <p>
              Empece como programador de aplicaciones web desde el año 2020,
              cuando creaba aplicaciones sencillas con HTML y CSS en la
              universidad. A traves de los años mi experiencia ha crecido en
              empresas de desarrollo web y creo aplicaciones completas con ayuda
              de React usando Typescript
            </p>
            <p>
              Me gustan mucho las peliculas y el anime, incluso veo{" "}
              <i>doramas</i> de vez en cuando, pero mi pasatiempo favorito son
              los videojuegos, me encantan sagas como Metal Gear y Resident Evil
            </p>
            <Button
              className="w-full md:max-w-72"
              onClick={() => setOpen(true)}
              variant={"secondary"}
            >
              Descargar CV
            </Button>
          </div>
        </div>
      </Container>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download Resumee</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-5 sm:flex-row">
              <ResumeeCard
                title="Spanish Resumee"
                pdfUrl="/pdf/Francisco_Valle-Desarrollador_React.pdf"
              />
              <ResumeeCard
                title="English Resumee"
                pdfUrl="/pdf/Francisco_Valle-React_Developer.pdf"
              />
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};
