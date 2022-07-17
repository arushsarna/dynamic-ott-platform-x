import { typographyClasses } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import * as cookie from "cookie";
export async function getServerSideProps(context) {
 
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  const result = await fetch(
    `${process.env.HOST}/api/getId?_id=` + context.params.details
  );
  const auth = await fetch(
    `${process.env.HOST}/api/auth?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());
  const data = await result.json();
  try {
    if (data[0].data == false || auth.data == false) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  } catch {}
  return {
    props: { data },
  };
}
export default function Detail({ data }) {
  return (
    <div className="">
      <Header />
      <div className="relative max-h-20 ">
        <img
          className="object-fill h-[calc(100vh_-_70px)] w-full  "
          src={data[0].thumbnail}
        ></img>
        <div className={"absolute items-center  top-72 left-20  "}>
          <div className="flex  space-x-3">
            <button className="bg-white border-white border-2 px-4 py-2 rounded-sm flex items-center hover:bg-opacity-80">
              <Image
                src="/play-icon-black.png"
                layout="fixed"
                height="30px"
                width="30px"
              />
              <span className="text-black">PLAY</span>
            </button>
            <button className="px-6 py-2 border-white border-2 rounded-sm flex items-center bg-black bg-opacity-20 hover:bg-white hover:bg-opacity-20 ">
              <Image
                src="/play-icon-white.png"
                layout="fixed"
                height="30px"
                width="30px"
              />
              <span className="text-white">Trailer</span>
            </button>
            <button className=" text-2xl pb-1 rounded-full bg-black bg-opacity-50 border-white border-2 w-10 h-10 text-white font-semibold">
              +
            </button>
            <button className=" text-2xl rounded-full pt-1 bg-black bg-opacity-50 border-white border-2 w-10 h-10 text-white font-semibold">
              <Image
                src="/group-icon.png"
                height="25px"
                width="25px"
                layout="fixed"
              />
            </button>
          </div>
          <div className="text-white mt-5"> {data[0].genere}</div>
          <div className="text-white mt-5"> {data[0].description}</div>
        </div>
      </div>
    </div>
  );
}
