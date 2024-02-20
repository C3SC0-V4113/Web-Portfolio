import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { IProjects } from "@/contracts/interfaces/IProjects";

import { Container } from "@/components/ui/container";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsJSON: IProjects[] = [
    {
      id: 1,
      name: "Journal App",
      description:
        "Aplcacion para crear notas en formato de diarios donde guardar recuerdos usando texto e imagenes.",
      features: [
        "Diseño Creado con la libreria de MaterialUI",
        "Guardado en la nube usando Firebase para informacion y Cloudinary para la imagenes",
        "Inicio de Sesion por medio de Google o por correo electrónico",
        "Componentes probados usando jest",
        "Manejo de Estado por React Redux",
      ],
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
      name: "Gif Expert App",
      description:
        "Aplicacion de una sola página que sirve como ejercicio para el uso de API's y de formulario sencillos, está aplicación funciona conectandose a una API de Gifs los cuales son buscados usando el formulario",
      features: [
        "Diseño Creado usando CSS Vanilla",
        "Conexión con la API de GIPHY",
        "Componentes probados usando jest",
      ],
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
    <Container className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What Can I Do</span>
        <h1 className="text-2xl font-bold">Projects</h1>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex gap-3 mb-3">
          <TabsTrigger asChild value="all">
            <Button variant={"ghost"}>All</Button>
          </TabsTrigger>
          <TabsTrigger asChild value="web">
            <Button variant={"ghost"}>Web Development</Button>
          </TabsTrigger>
        </TabsList>
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
