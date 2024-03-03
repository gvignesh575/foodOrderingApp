import HeroSection from "./components/HeroSection";
import SlideSection from "./components/SlideSection";
import ScrollFoodSection from "./components/ScrollFoodSection";
import ChefSection from "./components/ChefSection";
import FoodCard from "./components/FoodCard";
import Restaurants from "./components/Restaurants";
import { foodData } from "./components/constants/data";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlideSection />
      <ScrollFoodSection />
      <ChefSection />
      <Restaurants
        foodData={foodData}
        title={"Restaurants with Online Food Delivery"}
      />
    </div>
  );
}
