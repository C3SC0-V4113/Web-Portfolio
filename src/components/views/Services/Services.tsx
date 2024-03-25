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
import { ServicesCard } from "./ServicesCard";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation(["services"]);

  const servicesCards: {
    id: number;
    icon: IconType;
    title: string;
    desc: string;
  }[] = [
    {
      id: 1,
      icon: MdCode,
      title: t("cards.0.title"),
      desc: t("cards.0.desc"),
    },
    {
      id: 2,
      icon: MdDesignServices,
      title: t("cards.1.title"),
      desc: t("cards.1.desc"),
    },
    {
      id: 3,
      icon: IoLogoPwa,
      title: t("cards.2.title"),
      desc: t("cards.2.desc"),
    },
    {
      id: 4,
      icon: SiNextdotjs,
      title: t("cards.3.title"),
      desc: t("cards.3.desc"),
    },
    {
      id: 5,
      icon: IoRocketSharp,
      title: t("cards.4.title"),
      desc: t("cards.4.desc"),
    },
    {
      id: 6,
      icon: TbBrandReactNative,
      title: t("cards.5.title"),
      desc: t("cards.5.desc"),
    },
  ];

  return (
    <Container id="services" className="flex flex-col">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">{t("subtitle")}</span>
        <h1 className="text-2xl font-bold text-primary">{t("title")}</h1>
      </div>
      <div className="flex justify-center align-middle">
        <Carousel className="w-full max-w-56 sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-[1900px]">
          <CarouselContent>
            {servicesCards.map(({ id, icon, desc, title }) => (
              <CarouselItem
                key={id}
                className="flex md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              >
                <ServicesCard Icon={icon} desc={desc} title={title} />
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
