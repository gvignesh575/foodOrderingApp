import React from "react";
import FoodCard from "./FoodCard";
import { foodData, randomData } from "./constants/data";

const ScrollFoodSection = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto my-5">
        <div className="text-2xl md:text-4xl font-bold my-3 md:my-6 text-blue-600">
          Checkout Top Restaurants
        </div>
        <div className="w-full p-2 flex items-center overflow-x-scroll space-x-2 scrollbar">
          {randomData.map((food, index) => (
            <FoodCard
              key={index}
              ratings={food.ratings}
              image={food.image}
              title={food.title}
              items={food.items}
              city={food.city}
              url={food.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollFoodSection;
