"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Food from "./Food";
const SliderComponent = () => {
  return (
    <>
      <div className="w-[80%] lg:w-[100%] mx-auto my-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food1.png"} title={"Burger"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food2.png"} title={"Veg Pizza"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food3.png"} title={"Chicken"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food4.png"} title={"Juice"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food5.png"} title={"Fish Fry"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food6.png"} title={"Fishes"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food7.png"} title={"Mutton Fry"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food8.png"} title={"Fried Chicken"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food9.png"} title={"Fruits"} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <Food image={"/foods/food10.png"} title={"Shawarma"} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default SliderComponent;
