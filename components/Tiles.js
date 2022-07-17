import React, { useState } from "react";
import Link from "next/link";


export default function Tiles({data , title}) {
  
 
  return (
    <div className="px-20 mt-10 ">
      <div>{title}</div>

      <div className="flex    gap-20  h-72 mt-10 ">
        {data.map((i) => (
          <Link key={i.toString()} href={`/${i._id}`}>
            <div
              key={i.toString()}
              className=" rounded-[10px] cursor-pointer  overflow-hidden border-[3px]  border-solid border-[#f9f9f91a] shadow-custom-tiles  "
            >
              <img
                key={i.toString()}
                className=" object-cover w-full  h-full "
                //  className="object-cover rounded-md  hover:border-white hover:border-4 hover:scale-110  min-w-60 h-72 "
                src={i.poster}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
