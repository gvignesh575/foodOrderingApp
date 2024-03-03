import React from "react";
import FoodCard from "./FoodCard";

const Restaurants = ({ title, foodData }) => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto">
        <div className="text-3xl font-bold px-3">{title}</div>
        <div className="max-w-[6xl] mx-auto my-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
          {foodData.map((food, index) => (
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

export default Restaurants;
