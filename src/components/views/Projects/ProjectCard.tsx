import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { FaEllipsisH, FaGithub, FaLink } from "react-icons/fa";
import { IProjects } from "../../../contracts/interfaces/IProjects";

interface ProjectCardProps {
  project: IProjects;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
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
            <IconButton
              icon={FaEllipsisH}
              onClick={() => console.log("click click")}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
