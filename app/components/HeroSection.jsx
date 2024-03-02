"use client";
import Image from "next/image";
import "../hero.css";
import { gsap } from "gsap/";
import { useEffect } from "react";
import { animateOnLoad } from "@/lib/gsap";
const HeroSection = () => {
  useEffect(() => {
    console.log(gsap.timeline());
    var tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
    });
    tl.from(".layer-3, .layer-4", {
      y: 200,
      opacity: 0,
      stagger: 0.25,
      duration: 0.5,
    });
    tl.from(".layer-2, .layer-1", {
      y: -200,
      opacity: 0,
      stagger: 0.25,
      duration: 0.5,
    });
    tl.from(
      ".next-img",
      {
        x: 1000,
        opacity: 1,
        duration: 0.5,
      },
      "1"
    );
    tl.from(".calories", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
    });

    var tl2 = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
      },
    });
    tl2.from(".badge, h1 span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
    tl2.from(".ingredients .icons > *", {
      x: -100,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);
  return (
    <main>
      <section>
        <div className="text">
          <div className="badge curve-btn">NEW</div>
          <h1>
            <span>THE</span> <span>DOUBLE</span> <br /> <span>DECKER</span>
          </h1>
          <div className="rating">
            <i className="ri-fire-fill"></i> <i className="ri-fire-fill"></i>{" "}
            <i className="ri-fire-fill"></i> <i className="ri-fire-line"></i>{" "}
            <i className="ri-fire-line"></i> Spicy
          </div>
          <p>
            Sed nec consequat lorem, phaselus convallis ante eu auque finibus
            maximus, In imperdiet non ex id ultricies. Suspendisse ac diam id
            elit laoreet porttitor. Proin quis tortor nisi.
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
          <div className="order">
            <a href="#" className="curve-btn">
              ORDER NOW
            </a>
            <p>
              $12.99 <sup>$14.99</sup>
            </p>
          </div>
        </div>
        <div className="cover-img">
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
          <div className="nutrition">
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
        <div className="next-img">
          <img src="/images/burger.png" alt="" />
        </div>
      </section>
      <footer>
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
        <div className="navigate">
          <button className="yellow">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button>
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </footer>
    </main>
    // <main className="w-full max-w-[90%] mx-auto min-h-[91.7vh] flex flex-col items-center justify-center gap-6">
    //   <div className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold">
    //     Order the foods you love
    //     <br className="" />
    //     <span className="text-blue-600 font-bold">online with Zugo.</span>
    //   </div>
    //   <p className="text-center text-gray-700 md:text-xl">
    //     {'"'}Savor the flavors of convenience with our seamless online food
    //     ordering experience <br className="hidden lg:block" />
    //     where every craving meets simplicity at your fingertips.{'"'}
    //   </p>
    //   <div className="w-[300px] h-[200px] md:w-[400px] md:h-[270px] relative">
    //     <img  src={/"/heroImage1.png"} alt="food image" fill />
    //   </div>
    // </main>
  );
};

export default HeroSection;
