import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { FaEllipsisH, FaGithub, FaLink } from "react-icons/fa";
import { IProjects } from "../../../contracts/interfaces/IProjects";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: IProjects;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(["projects"]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <AspectRatio
              ratio={16 / 9}
              className="rounded-lg hover:opacity-50 bg-primary"
              onClick={() => setOpen(true)}
            >
              <img
                src={project.images.thumbnail}
                alt="project image"
                className="w-full rounded-lg"
              />
            </AspectRatio>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <div className="flex justify-between w-full">
            <div className="flex gap-3">
              <IconButton icon={FaGithub} href={project.repository.url} />
              <IconButton icon={FaLink} href={project.link.url} />
            </div>
            <div className="flex">
              <IconButton icon={FaEllipsisH} onClick={() => setOpen(true)} />
            </div>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{project.name}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-96 lg:h-full">
              <div className="flex flex-col gap-3 px-4 py-5">
                <Carousel setApi={setApi}>
                  <CarouselContent>
                    {project.images.gallery.map((image, index) => (
                      <CarouselItem className="basis-10/12" key={index}>
                        <AspectRatio ratio={4 / 3} className="flex bg-primary">
                          {<img src={image} alt={image} />}
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="font-semibold text-center">
                  {t("slidesCounter", {
                    current,
                    total: count,
                  })}
                </div>
                <p>{project.description}</p>
                <p className="font-semibold">{t("featuresTitle")}:</p>
                <ul className="ml-6 list-disc">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="font-semibold">{t("toolsTitle")}:</p>
                <ul className="ml-6 list-disc">
                  {project.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            </ScrollArea>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};
