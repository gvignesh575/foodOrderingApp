import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SlideSection from "./components/SlideSection";
import SliderComponent from "./components/SliderComponent";
import FoodCard from "./components/FoodCard";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlideSection />
      <div className="w-full max-w-[90%] mx-auto my-5">
        <div className="text-2xl md:text-4xl font-bold my-3 md:my-6 text-blue-600">
          Checkout Top Restaurants
        </div>
        <div className="w-full p-2 flex items-center overflow-x-scroll space-x-2 scrollbar">
          <FoodCard image={"/foodScroll/food1.jpg"} />
          <FoodCard image={"/foodScroll/food2.jpg"} />
          <FoodCard image={"/foodScroll/food3.jpg"} />
          <FoodCard image={"/foodScroll/food4.jpg"} />
          <FoodCard image={"/foodScroll/food5.jpg"} />
          <FoodCard image={"/foodScroll/food6.jpg"} />
          <FoodCard image={"/foodScroll/food7.jpg"} />
          <FoodCard image={"/foodScroll/food8.jpg"} />
          <FoodCard image={"/foodScroll/food9.jpg"} />
          <FoodCard image={"/foodScroll/food10.jpg"} />
        </div>
      </div>
    </div>
  );
}
