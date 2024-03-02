import Image from "next/image";
import React from "react";

const Food = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 group hover:bg-blue-500 p-3 rounded-xl shadow-md my-5">
      <div className="w-[200px] h-[150px] relative group-hover:scale-105 transition-all ease-in-out duration-200">
        <Image src={image} alt="image" fill />
      </div>
      <div className="mt-4 mb-3 italic text-[18px] md:text-xl group-hover:text-white duration-300 font-bold">
        {title}
      </div>
    </div>
  );
};

export default Food;
