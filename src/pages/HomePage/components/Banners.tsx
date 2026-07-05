import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

import Autoplay from "embla-carousel-autoplay";

export const Banners = () => {
  return (
    <Section>
      <Container className="">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000, // Time in milliseconds between slides (2 seconds)
              stopOnInteraction: false, // Keeps scrolling even after user swipes/clicks
              stopOnMouseEnter: true, // Pauses auto-scroll when hovering over the carousel
            }),
          ]}
        >
          <CarouselContent className="">
            <CarouselItem className="">
              <Skeleton className="bg-amber-200 h-80" />
            </CarouselItem>
            <CarouselItem className="">
              <Skeleton className="bg-blue-200 h-80" />
            </CarouselItem>
            <CarouselItem className="">
              <Skeleton className=" h-80" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="z-3 absolute left-2" />
          <CarouselNext className="z-3 absolute  right-2" />
        </Carousel>
      </Container>
    </Section>
  );
};
