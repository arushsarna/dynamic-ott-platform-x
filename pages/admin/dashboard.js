import React from "react";
import Sidebar from "../../components/Sidebar";
import * as cookie from "cookie";

export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  console.log(process.env.HOST);
  const auth = await fetch(
    `${process.env.HOST}/api/authAdmin?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());
  console.log(auth);
  console.log(auth);
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
export default function dashboard() {
  return (
    <div className="bg-[#135CC5] h-screen">
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
