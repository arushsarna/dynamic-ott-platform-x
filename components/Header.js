import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="h-[70px] bg-[#090b13] flex max-w-full">
      <nav className="text-white px-10 py-5 ">OTT</nav>
      <nav className="flex  py-3 text-white justify-between mx-[calc(100vh_-_800px)] space-x-[50px] flex-1 ">
        <a className=" group flex items-center relative space-x-1 ">
          <Image
            src="/home-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">HOME</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>
        </a>
        <a className=" flex group relative items-center space-x-1">
          <Image
            src="/search-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">SEARCH</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>
        </a>
        <a className=" flex group relative items-center  space-x-1">
          <Image
            src="/watchlist-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">WATCHLIST</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>
        </a>
        <a className=" flex group relative items-center space-x-1 ">
          <Image
            src="/original-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">ORIGINAL</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>
        </a>
        <a className=" flex group relative items-center  space-x-1">
          <Image
            src="/movie-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">MOVIES</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>{" "}
        </a>
        <a className=" flex group relative items-center space-x-1 ">
          <Image
            src="/series-icon.svg"
            height="20px"
            width="20px"
            layout="fixed"
          />
          <span className=" text-[13px] ">SERIES</span>
          <div className=" h-[2px] bg-white w-full absolute origin-left bottom-2 opacity-0  scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 "></div>{" "}
        </a>
      </nav>
      <nav className="p-3   ">
        <Image
          className="rounded-full "
          src="/user-icon.jpeg"
          height="40px"
          width="40px"
          layout="fixed"
        />
      </nav>
    </div>
  );
}
