import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdCode, MdDesignServices } from "react-icons/md";
import { IoLogoPwa, IoRocketSharp } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IconType } from "react-icons/lib";
import { Container } from "@/components/ui/container";

const servicesCards: {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: MdCode,
    title: "Desarrollo de Páginas desde Cero",
    desc: "Desarrollo completo de sitios web modernos y atractivos utilizando React. Desde el diseño hasta la implementación, construyo experiencias web dinamicas y detalladas",
  },
  {
    id: 2,
    icon: MdDesignServices,
    title: "Diseño Web Intuitivo",
    desc: "Desarrollo interfaces atractivas y responsivas que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario excepcional.",
  },
  {
    id: 3,
    icon: IoLogoPwa,
    title: "Experiencias Web Progresivas",
    desc: "Transformo tus sitios web en aplicaciones progresivas (PWAs), proporcionando a tus usuarios una experiencia similar a la de una aplicación nativa, con capacidad para funcionar sin conexión.",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    title: "Páginas Dinámicas y Eficientes",
    desc: "Utilizando Next.js, construyo sitios web con renderización del lado del servidor para un rendimiento óptimo. Desarrollo experiencias web dinámicas y eficientes que satisfacen las demandas actuales del usuario.",
  },
  {
    id: 5,
    icon: IoRocketSharp,
    title: "Despliegue sin Problemas",
    desc: "No te preocupes por la parte técnica. Manejo el despliegue de tus aplicaciones web de manera eficiente, asegurando una puesta en marcha suave y sin complicaciones.",
  },
  {
    id: 6,
    icon: TbBrandReactNative,
    title: "Aplicaciones Móviles con React Native",
    desc: "Llevo tus ideas a dispositivos móviles. Desarrollo aplicaciones nativas multiplataforma utilizando React Native para ofrecer experiencias móviles fluidas y consistentes.",
  },
];

export const Services = () => {
  return (
    <Container id="services" className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What i Do</span>
        <h1 className="text-2xl font-bold text-primary">Services</h1>
      </div>
      <div className="flex justify-center align-middle">
        <Carousel className="w-full max-w-56 sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[1900px]">
          <CarouselContent>
            {servicesCards.map((service) => (
              <CarouselItem
                key={service.id}
                className="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <Card className="flex flex-col grow">
                  <CardHeader className="flex justify-center h-48 text-center align-middle">
                    <service.icon className="self-center w-16 h-16 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex text-justify">
                      <p>{service.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};
