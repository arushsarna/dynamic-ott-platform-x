import React from "react";
import Sidebar from "../../components/Sidebar";
import * as cookie from "cookie";
import { useRouter } from "next/router";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");

  const auth = await fetch(
    `${process.env.HOST}/api/authAdmin?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());

  if (auth.data == false) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function analytics() {
  return (
    <div className="flex bg-[#135CC5] h-screen ">
      <div>
        <Sidebar />
      </div>
      <div className="flex justify-center items-center">Under Construction</div>
    </div>
  );
}
