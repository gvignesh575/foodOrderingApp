import React from "react";
import CardAnimation from "./CardAnimation";
import Image from "next/image";

const ChefSection = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto my-5">
        <div className="flex items-center flex-col xl:flex-row">
          <div className="flex-[0.8] flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              <Image src={"/chef.png"} fill alt="chef" />
            </div>
          </div>
          <div className="flex-1 flex items-center py-20">
            <div className="my-10 p-5 rounded-xl lg:w-full">
              <CardAnimation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefSection;
