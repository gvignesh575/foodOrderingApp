import { foodData, offerData } from "@/app/components/constants/data";
import Image from "next/image";
import React from "react";

const DetailsPage = ({ params }) => {
  const id = params?.id;
  const selectedRestaurant =
    offerData.find((restaurant) => restaurant.url === id) ||
    foodData.find((restaurant) => restaurant.url === id);

  if (!selectedRestaurant) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-3xl font-bold text-blue-500">
          Restaurant not found!
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[90%] mx-auto min-h-[60vh]">
      <div className="flex flex-col items-center">
        <div className="w-[300px] h-[300px] relative mx-auto my-5 rounded-full border-8 border-blue-500 overflow-hidden">
          <Image src={selectedRestaurant?.image} fill />
        </div>
        <div className="text-3xl font-bold">{selectedRestaurant?.title}</div>
        <div className="font-semibold my-1 flex items-center gap-1 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>

          {selectedRestaurant.city}
        </div>
        <div className="my-1 font-semibold text-center">
          {'"' + selectedRestaurant.items + '"'}
        </div>
        <div className="flex items-center gap-1 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white bg-green-500 rounded-full p-1"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <span className="font-semibold">{selectedRestaurant.ratings}</span>
        </div>
        <div className="flex flex-col w-full border my-10">
          {selectedRestaurant.listItems.map((item) => (
            <>
              <div className="flex items-center justify-evenly border">
                <div className="flex-1 text-center font-serif text-[18px] py-4 text-gray-500">
                  {item.itemName}
                </div>
                <div className="flex-1 text-center text-[18px] border-l py-4 text-gray-500">
                  {item.itemPrice}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
