import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Services = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-5 md:py-8 md:px-6">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What i Do?</span>
        <h1 className="text-2xl font-bold">Services</h1>
      </div>
      <div className="flex justify-center w-full align-middle">
        <Carousel>
          <CarouselContent>
            <CarouselItem>1</CarouselItem>
            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
