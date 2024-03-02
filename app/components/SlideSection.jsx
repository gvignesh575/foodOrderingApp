import React from "react";
import SliderComponent from "./SliderComponent";

const SlideSection = () => {
  return (
    <>
      <div className="w-full max-w-[90%] mx-auto border-b-[1px] border-gray-300 mb-2">
        <div className="text-2xl md:text-4xl font-bold my-3 md:my-6 text-blue-600">
          Explore Foods Here!
        </div>
        <SliderComponent />
      </div>
    </>
  );
};

export default SlideSection;
