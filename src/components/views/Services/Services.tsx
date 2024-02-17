import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdCode } from "react-icons/md";

export const Services = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-5 md:py-8 md:px-6">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">What i Do</span>
        <h1 className="text-2xl font-bold">Services</h1>
      </div>
      <div className="flex justify-center align-middle">
        <Carousel className="w-full max-w-56 sm:max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-6xl">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
              <Card>
                <CardHeader className="flex justify-center text-center align-middle">
                  <MdCode className="self-center w-16 h-16" />
                  <CardTitle>Web Develpment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex text-justify">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem voluptatum, soluta nobis ab sapiente vel
                      explicabo esse? Pariatur minima sit totam odit ducimus
                      doloremque distinctio, temporibus deleniti natus quo a.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
              <Card>
                <CardHeader className="flex justify-center text-center align-middle">
                  <MdCode className="self-center w-16 h-16" />
                  <CardTitle>Web Develpment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex text-justify">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem voluptatum, soluta nobis ab sapiente vel
                      explicabo esse? Pariatur minima sit totam odit ducimus
                      doloremque distinctio, temporibus deleniti natus quo a.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
              <Card>
                <CardHeader className="flex justify-center text-center align-middle">
                  <MdCode className="self-center w-16 h-16" />
                  <CardTitle>Web Develpment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex text-justify">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem voluptatum, soluta nobis ab sapiente vel
                      explicabo esse? Pariatur minima sit totam odit ducimus
                      doloremque distinctio, temporibus deleniti natus quo a.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
              <Card>
                <CardHeader className="flex justify-center text-center align-middle">
                  <MdCode className="self-center w-16 h-16" />
                  <CardTitle>Web Develpment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex text-justify">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Exercitationem voluptatum, soluta nobis ab sapiente vel
                      explicabo esse? Pariatur minima sit totam odit ducimus
                      doloremque distinctio, temporibus deleniti natus quo a.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
