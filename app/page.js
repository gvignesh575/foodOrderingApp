import HeroSection from "./components/HeroSection";
import SlideSection from "./components/SlideSection";
import ScrollFoodSection from "./components/ScrollFoodSection";
import ChefSection from "./components/ChefSection";
import FoodCard from "./components/FoodCard";
import Restaurants from "./components/Restaurants";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlideSection />
      <ScrollFoodSection />
      <ChefSection />
      <Restaurants />
      <div className="w-full py-10 px-10 lg:px-16 mx-auto bg-black text-white">
        <div className="flex justify-between flex-wrap gap-2">
          {/* First Column */}
          <div className="font-bold flex flex-col gap-2">
            <div className="">Zugo</div>
            <div>© 2023</div>
          </div>
          {/* second column */}
          <div className="flex flex-col gap-2">
            <div className="font-bold">Company</div>
            <div>About</div>
            <div>Careers</div>
            <div>Team</div>
          </div>
          {/* third column */}
          <div className="flex flex-col gap-2">
            <div className="font-bold">Contact Us</div>
            <div>Help & Support</div>
            <div>Partner with us</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Legal</div>
            <div>Terms & Conditions</div>
            <div>Cookie Policy</div>
            <div>Privacy Policy</div>
          </div>
          {/* fourth column */}
          <div className="flex flex-col gap-2">
            <div className="font-bold">We deliver to</div>
            <div>Bangalore</div>
            <div>Guragon</div>
            <div>Hyderabad</div>
            <div>Delhi</div>
            <div>Tamil Nadu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
