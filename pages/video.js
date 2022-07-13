import React from "react";
import * as cookie from "cookie";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");

  const auth = await fetch(
    `${process.env.HOST}/api/auth?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());

  if (auth.data == false) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function video() {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=jzYxbnHHhY4&t=2s&ab_channel=T-Series"></ReactPlayer>
    </div>
  );
}
