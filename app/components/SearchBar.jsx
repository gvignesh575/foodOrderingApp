import React from "react";

const SearchBar = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-[100%] sm:w-[90%] lg:w-[50%] px-4 flex justify-center items-center bg-gray-100 rounded-full outline-none border-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          className="w-[100%] p-2 bg-transparent outline-none border-none text-gray-600"
          placeholder="Enter Tasty Food..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
