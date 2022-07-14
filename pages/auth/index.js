import { useRouter } from "next/router";
import React from "react";
import * as cookie from "cookie";
import { useState } from "react";
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie || "");
  const auth = await fetch(
    `${process.env.HOST}/api/auth?cookies=` + parsedCookies.JWT
  ).then((t) => t.json());

  if (auth.data != false) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Index() {
  const [phoneno, setPhoneno] = useState();
  const [otp, setOtp] = useState();
  const [pin, setPin] = useState();
  const [session, setSession] = useState(false);
  const [wrongotp, setWrongotp] = useState(false);
  const router = useRouter();
  function enterotp() {
    const newpin = Math.floor(Math.random() * 1000000 + 1);
    console.log(newpin);
    setPin(newpin);
    setSession(true);
  }
  function verifyOTP() {
    if (pin == otp) {
      submitForm();

      setWrongotp(false);
    } else {
      setWrongotp(true);
    }
  }
  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneno }),
    }).then((t) => t.json());

    if (res.data == true) {
      router.push("/");
    }
  }

  return (
    <div className="bg-[url(/login-background.jpg)] h-screen">
      {" "}
      <div>
        <div className="min-h-full flex items-center   justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white bg-opacity-80 p-10 rounded-xl space-y-8 ">
            <div>
              <h2 className="mt-6 text-center text-3xl  font-extrabold text-gray-900">
                Sign in or Create a New Account
              </h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px appearance-none">
                {!session && (
                  <div className="appearance-none">
                    <label htmlFor="phone" className="sr-only">
                      Phone No.
                    </label>
                    <input
                      className="numberupdown:none appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      minLength="10"
                      maxLength="10"
                      id="phone"
                      type="number"
                      autoComplete="phone"
                      required
                      placeholder="Phone No."
                      value={phoneno}
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                )}
                {session && (
                  <div>
                    <label htmlFor="otp" className="sr-only">
                      OTP
                    </label>
                    <input
                      minLength="6"
                      maxLength="6"
                      id="otp"
                      name="otp"
                      type="number"
                      autoComplete="otp"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}

                {/* <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div> */}
              </div>
              {wrongotp && session && (
                <div className=" text-red-600 text-sm ">Wrong OTP</div>
              )}

              <div>
                {!session && (
                  <button
                    onClick={() => {
                      setSession(true);
                      enterotp();
                    }}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Sign in
                  </button>
                )}
                {session && (
                  <button
                    onClick={() => {
                      verifyOTP();
                    }}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Verify OTP
                  </button>
                )}
              </div>
            </form>

            {session && (
              <button
                onClick={() => {
                  setSession(false);
                }}
                className="bg-blue-500 rounded-2xl p-2 text-white "
              >
                Go back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
