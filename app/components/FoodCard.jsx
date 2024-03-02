import Image from "next/image";
import React from "react";

const FoodCard = ({ image, title, ratings, items }) => {
  return (
    <>
      <div className="min-w-[350px] h-[350px] rounded-lg overflow-hidden group p-2 pb-4">
        <div className="relative w-full h-[65%]">
          <Image
            src={image}
            className="object-cover rounded-xl group-hover:scale-105 transition-all ease-in-out duration-150"
            fill
            alt="food"
          />
        </div>
        <div className="px-2 py-3 flex flex-col gap-1">
          <div className="font-bold">{title}</div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white bg-blue-500 rounded-full p-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span className="font-semibold">{ratings}</span>
          </div>
          <div className="text-gray-600">{items}</div>
          <div className="text-gray-600">Perungalathur</div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
