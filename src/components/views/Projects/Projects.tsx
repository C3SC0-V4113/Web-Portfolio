// import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

import { IProjects } from "@/contracts/interfaces/IProjects";

import { Container } from "@/components/ui/container";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation(["projects"]);

  const projectsJSON: IProjects[] = [
    {
      id: 1,
      name: t("projects.0.title"),
      description: t("projects.0.description"),
      features: t("projects.0.features", { returnObjects: true }),
      tools: [
        "React.JS",
        "MaterialUI",
        "Jest",
        "Firebase",
        "Cloudinary",
        "React Router",
        "React Redux",
      ],
      tags: ["web"],
      repository: {
        type: "github",
        url: "https://github.com/C3SC0-V4113/Journal-App",
      },
      link: {
        type: "web",
        url: "https://journal-app-two-eta.vercel.app/",
      },
      images: {
        thumbnail: "/journal_app.png",
        gallery: [
          "/journal_app.png",
          "/journal_app.png",
          "/journal_app.png",
          "/journal_app.png",
        ],
      },
    },
    {
      id: 2,
      name: t("projects.1.title"),
      description: t("projects.1.description"),
      features: t("projects.1.features", { returnObjects: true }),
      tools: ["React.JS", "Jest", "GIPHY"],
      tags: ["web"],
      repository: {
        type: "github",
        url: "https://github.com/C3SC0-V4113/GifExpert-App",
      },
      link: {
        type: "web",
        url: "https://gifexpert-app-cesco.netlify.app/",
      },
      images: {
        thumbnail: "/gif_app.png",
        gallery: [
          "/gif_app.png",
          "/gif_app.png",
          "/gif_app.png",
          "/gif_app.png",
        ],
      },
    },
  ];

  return (
    <Container id="projects" className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">{t("subtitle")}</span>
        <h1 className="text-2xl font-bold text-primary">{t("title")}</h1>
      </div>

      <Tabs defaultValue="all" className="w-full">
        {/* <TabsList className="flex gap-3 mb-3">
          <TabsTrigger asChild value="all">
            <Button variant={"ghost"}>All</Button>
          </TabsTrigger>
          <TabsTrigger asChild value="web">
            <Button variant={"ghost"}>Web Development</Button>
          </TabsTrigger>
        </TabsList> */}
        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projectsJSON.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="web">
          <div>Web Dev</div>
        </TabsContent>
      </Tabs>
    </Container>
  );
};
