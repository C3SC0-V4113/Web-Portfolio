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
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectCardProps {
  project: IProjects;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <img
              src={project.images.thumbnail}
              alt="project image"
              className="w-full rounded-lg hover:opacity-50"
              onClick={() => setOpen(true)}
            />
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
                <Carousel>
                  <CarouselContent>
                    {project.images.gallery.map((image, index) => (
                      <CarouselItem key={index}>
                        {<img src={image} alt={image} />}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <p>{project.description}</p>
                <p className="font-semibold">Features:</p>
                <ul className="ml-6 list-disc">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="font-semibold">Tools:</p>
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
