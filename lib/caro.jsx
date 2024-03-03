"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Restaurants from "@/app/components/Restaurants";
import { offerData } from "@/app/components/constants/data";
const OffersPage = () => {
  const left = useRef(null);
  const right = useRef(null);
  const simplifiedOfferData = offerData.map(({ listItems, ...rest }) => rest);
  return (
    <div
      className="flex flex-col w-full mx-auto"
      suppressHydrationWarning={true}
    >
      <div className="h-[50vh] md:h-[60vh] lg:h-[80vh] w-full mb-10">
        <Carousel
          className="h-[50vh] md:h-[60vh] lg:h-[80vh] border w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent className="h-[50vh] md:h-[60vh] lg:h-[80vh] w-[100%] p-0 m-0 relative">
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food1.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food2.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food3.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food4.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food5.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="border w-[100%] p-0 m-0">
              <div className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh]">
                <img
                  src={"/banner/food6.jpg"}
                  className="w-full h-full object-fill"
                  alt="food"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <ChevronLeft
            className="absolute top-[50%] left-10 text-blue-500 bg-white rounded-full p-1"
            onClick={(e) => {
              left.current.click();
            }}
          />
          <ChevronRight
            className="absolute top-[50%] right-10 text-blue-500 bg-white rounded-full p-1"
            onClick={(e) => {
              right.current.click();
            }}
          />
          <CarouselPrevious ref={left} className="hidden" />
          <CarouselNext ref={right} className="hidden" />
        </Carousel>
      </div>
      <Restaurants
        foodData={simplifiedOfferData}
        title={"Restaurants with Great Offers!"}
      />
    </div>
  );
};

export default OffersPage;
