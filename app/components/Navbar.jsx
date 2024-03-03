"use client";
import React from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const router = usePathname();
  return (
    <div
      className={cn("w-full", {
        border: !(router === "/login"),
        "border-b-white border-b bg-[#1a1a2e]": router == "/login",
        " border-b-white border-b bg-[#1a1a2e]": router === "/signup",
      })}
    >
      <div className="max-w-[90%] mx-auto h-[8vh] flex items-center justify-between gap-2">
        <div className="text-3xl font-serif text-blue-500 font-bold">
          <Link href="/" prefetch={false}>
            {" "}
            Zugo.
          </Link>
        </div>
        <div className=" flex-[2] flex justify-center items-center">
          <SearchBar />
        </div>
        <div className="flex items-center gap-3 lg:gap-10">
          <div className="text-gray-600 md:text-[18px]">
            <Link className="border-none outline-none" href={"/login"}>
              <span className="hover:text-blue-500">Login</span>
            </Link>
          </div>
          <div className="text-gray-600 md:text-[18px]">
            <Link className="border-none outline-none " href={"/signup"}>
              <span className="hover:text-blue-500">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
