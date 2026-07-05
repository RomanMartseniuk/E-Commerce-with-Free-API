import { Section } from "./Section";
import { Container } from "./Container";
import { Skeleton } from "../ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

 const Category = () => {
  return (
    <Skeleton className="w-20 aspect-square rounded-full bg-red-200" />
  )
}




export const CategoriesGroup = () => {
  return (
    <Section className="overflow-hidden">
      <Container>
        <h2>See Categories here</h2>

        <div className="flex items-center justify-start gap-4">
          {/* Render categories here */}
          <Carousel opts={{ loop: true, }}>
            <CarouselContent>
              <CarouselItem>
                <Category />
              </CarouselItem>
              <CarouselItem>
                <Category />
              </CarouselItem>
              <CarouselItem>
                <Category />
              </CarouselItem>
              <CarouselItem>
                <Category />
              </CarouselItem>
              <CarouselItem>
                <Category />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};
