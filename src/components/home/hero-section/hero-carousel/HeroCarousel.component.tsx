import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CAROUSEL_IMAGES } from "@/data";
import Image from "next/image";

export default function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {CAROUSEL_IMAGES.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="p-0">
                  <CardContent className="p-2">
                    <Image
                      src={img}
                      alt="hero"
                      className="w-full h-96 rounded-md object-cover object-center"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
