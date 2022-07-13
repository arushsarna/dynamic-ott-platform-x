import React from "react";

// layout for page
import { useRouter } from "next/router";
import * as cookie from "cookie";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  console.log(parsedCookies.JWT);
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
export default function Register() {
  const [login, setLogin] = useState(false);
  const [exists, setExists] = useState(false);
  const [created, setCreated] = useState(false);
  const router = useRouter();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function submitForm() {
    const res = await fetch("/api/createAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());
    if (res.data == false) {
      setExists(true);
      setCreated(false);
    } else {
      setCreated(true);
      setExists(false);
    }
  }

  return (
    <div className="flex bg-[#135CC5] h-screen">
      <Sidebar />
      <div className="container mx-auto px-4 h-full  ">
        <div className="flex content-center items-center justify-center  h-full">
          <div className="w-full lg:w-6/12 px-4  ">
            <div className="relative flex flex-col bg-white pt-10 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
                <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                <form>
                  <div className="relative w-full mb-3">
                    {exists && (
                      <div>
                        The User Already Exists , Please
                        <Link href="/admin">
                          <span className="underline text-blue-700 cursor-pointer">
                            {" "}
                            Login
                          </span>
                        </Link>
                      </div>
                    )}
                    {created && (
                      <div>
                        The User is Created , Please
                        <Link href="/admin">
                          <span className="underline text-blue-700 cursor-pointer">
                            {" "}
                            Login
                          </span>
                        </Link>
                      </div>
                    )}
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      UserName
                    </label>
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        submitForm();
                      }}
                      className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
