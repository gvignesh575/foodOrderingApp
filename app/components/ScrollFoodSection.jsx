import React from "react";
import FoodCard from "./FoodCard";

const ScrollFoodSection = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto my-5">
        <div className="text-2xl md:text-4xl font-bold my-3 md:my-6 text-blue-600">
          Checkout Top Restaurants
        </div>
        <div className="w-full p-2 flex items-center overflow-x-scroll space-x-2 scrollbar">
          <FoodCard
            ratings={"4.4 - 30mins"}
            image={"/foodScroll/food1.jpg"}
            title={"McDonalds's"}
            items={" Smoothies, Bistro, Pastries"}
          />
          <FoodCard
            ratings={"4.7 - 35mins"}
            image={"/foodScroll/food2.jpg"}
            title={"Subway's"}
            items={" Fresh Juices, Coffee Shop, Ice Cream"}
          />
          <FoodCard
            ratings={"4.9 - 40mins"}
            image={"/foodScroll/food3.jpg"}
            title={"The Red Box"}
            items={" Mocktails, Tea House, Cupcakes"}
          />
          <FoodCard
            ratings={"4.4 - 20mins"}
            image={"/foodScroll/food4.jpg"}
            title={"KFC"}
            items={" Milkshakes, Espresso Bar, Gelato"}
          />
          <FoodCard
            ratings={"4.0 - 25mins"}
            image={"/foodScroll/food5.jpg"}
            title={"Faasos-Wraps,Rolls"}
            items={"Salads, French Bakery, Puddings"}
          />
          <FoodCard
            ratings={"4.8 - 30mins"}
            image={"/foodScroll/food6.jpg"}
            title={"Behrouz Biriyani"}
            items={"BBQ, Craft Cocktails, Donuts"}
          />
          <FoodCard
            ratings={"4.4 - 32mins"}
            image={"/foodScroll/food7.jpg"}
            title={"Lunch Box - Meals and Thalis"}
            items={"Pasta, Tea Lounge, Sorbet"}
          />
          <FoodCard
            ratings={"4.7 - 20mins"}
            image={"/foodScroll/food8.jpg"}
            title={"The Good Bowl"}
            items={"Wraps, Lemonades, Cheesecakes"}
          />
          <FoodCard
            ratings={"4.8 - 20mins"}
            image={"/foodScroll/food9.jpg"}
            title={"EatFit"}
            items={"Seafood, Fresh Squeezed Juices"}
          />
          <FoodCard
            ratings={"4.9 - 20mins"}
            image={"/foodScroll/food10.jpg"}
            title={"Haggen Dazs"}
            items={"Mexican Cuisine, Herbal Infusions"}
          />
        </div>
      </div>
    </>
  );
};

export default ScrollFoodSection;
