"use client";
import "../hero.css";
import { Flame, ChevronsRight, ChevronsLeft } from "lucide-react";
const HeroSection = () => {
  return (
    <main className="w-full overflow-hidden max-md:flex max-md:shadow-neutral-200 max-md:shadow-lg max-md:flex-col max-md:h-[130vmin]">
      <section className="max-md:px-6 max-md:flex max-md:flex-col" id="fl">
        <div className="text max-md:flex-1">
          <h1 className="text-shad">
            <span>THE</span> <span>DOUBLE</span> <br /> <span>DECKER</span>
          </h1>
          <div className="rating">
            <Flame className="fill-[#ef420e]" />
            <Flame className="fill-[#ef420e]" />
            <Flame />
            <Flame />
            <span className="font-medium">Spicy</span>
          </div>
          <p
            className="text-center bg-gradient-to-r from-[#FFBE3D]
    to-[#F06543]  p-3 rounded-lg md:font-bold design"
          >
            Savor the flavors of convenience with our seamless online food
            ordering experience <br className="hidden lg:block" />
            where every craving meets simplicity at your fingertips.
          </p>
          <div className="ingredients">
            <span>INGREDIENTS</span>
            <div className="icons">
              <div className="icon relative">
                <img src="/images/tomato.png" alt="" />
              </div>
              <div className="icon relative">
                <img src="/images/chilly.png" alt="" />
              </div>
              <div className="icon relative">
                <img src="/images/corn.png" alt="" />
              </div>
              <div className="icon relative">
                <img src="/images/carrot.png" alt="" />
              </div>
              <div className="icon relative">
                <img src="/images/garlic.png" alt="" />
              </div>
              <div className="more">+3</div>
            </div>
          </div>
          <div className="order flex ">
            <a href="#" className="rounded-lg  p-3">
              ORDER NOW
            </a>
            <p className="self-center">
              $12.99 <sup className="my-2"> $14.99</sup>
            </p>
          </div>
        </div>
        <div className="cover-img layerimp mt-10 max-md:flex-1 -ml-10 max-md:scale-50">
          <div className="layers">
            <div className="layer  layer-4">
              <img src="/images/layer-4.png" alt="" />
            </div>

            <div className="layer relative layer-3">
              <img src="/images/layer-3.png" alt="" />
            </div>

            <div className="layer relative layer-2">
              <img src="/images/layer-2.png" alt="" />
            </div>
            <div className="layer relative layer-1">
              <img src="/images/layer-1.png" alt="" />
            </div>
          </div>
          <div className="nutrition dep animate-bounce font-bold">
            <div className="calories">
              Calories <br />
              <small>Kcal</small> <br />
              <span>1370</span>
            </div>
            <div className="calories">
              Fat <br />
              <small>g</small> <br />
              <span>93</span>
            </div>
            <div className="calories">
              Protein <br />
              <small>g</small> <br />
              <span>85</span>
            </div>
          </div>
        </div>
        <div className="next-img  back">
          <img src="/images/burger.png" className="max-md:w-full" alt="" />
        </div>
      </section>
      <footer className="mt-10 max-md:mt-28 hide">
        <div className="options">
          <div className="option">
            <img src="/images/burger.png" alt="" />
          </div>
          <div className="option active">
            <img src="/images/burger.png" alt="" />
          </div>
          <div className="option">
            <img src="/images/burger.png" alt="" />
          </div>
          <div className="option">
            <img src="/images/burger.png" alt="" />
          </div>
          <div className="option">
            <img src="/images/burger.png" alt="" />
          </div>
        </div>
        <div className="navigate hide">
          <button className="yellow hide">
            <ChevronsLeft className="max-md:hidden"></ChevronsLeft>
          </button>
          <button className="bg-white hide">
            <ChevronsRight className="max-md:hidden"></ChevronsRight>
          </button>
        </div>
      </footer>
    </main>
  );
};

export default HeroSection;
