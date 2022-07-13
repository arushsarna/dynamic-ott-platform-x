import React from "react";
import { useState } from "react";
export default function Famous() {
  const invisible = "invisible  object-cover rounded-md w-full h-full";
  const visible = "visible  object-fill rounded-md w-full h-full ";
  const [state1, setVisible1] = useState(
    "invisible  object-cover rounded-md w-full h-full"
  );
  const [state2, setVisible2] = useState(
    "invisible  object-cover rounded-md w-full h-full"
  );
  const [state3, setVisible3] = useState(
    "invisible  object-cover rounded-md w-full h-full"
  );
  const [state4, setVisible4] = useState(
    "invisible  object-cover rounded-md w-full h-full"
  );
  const [state5, setVisible5] = useState(
    "invisible  object-cover rounded-md w-full h-full"
  );

  return (
    <div className="grid grid-cols-5 min-w-56 w-full  gap-20 px-20  h-40 mt-16 ">
      <div
        className="shadow-custom-famous relative "
        onMouseEnter={() => {
          setVisible1(visible);
        }}
        onMouseLeave={() => {
          setVisible1(invisible);
        }}
      >
        <img
          className="object-cover w-full h-full absolute "
          src="/viewers-disney.png"
        ></img>
        <video
          onMouseEnter={(event) => event.target.play()}
          onMouseOut={(event) => {
            event.target.currentTime = 0;
            event.target.pause();
          }}
          className={state1}
          src="/disney.mp4"
        ></video>
      </div>
      <div
        className="shadow-custom-famous  relative"
        onMouseEnter={() => {
          setVisible2(visible);
        }}
        onMouseLeave={() => {
          setVisible2(invisible);
        }}
      >
        <img
          className="object-cover w-full h-full absolute "
          src="/viewers-pixar.png"
        ></img>
        <video
          onMouseEnter={(event) => event.target.play()}
          onMouseOut={(event) => {
            event.target.currentTime = 0;
            event.target.pause();
          }}
          className={state2}
          src="/pixar.mp4"
        ></video>
      </div>
      <div
        className="shadow-custom-famous relative"
        onMouseEnter={() => {
          setVisible3(visible);
        }}
        onMouseLeave={() => {
          setVisible3(invisible);
        }}
      >
        <img
          className="object-cover w-full h-full absolute "
          src="/viewers-marvel.png"
        ></img>
        <video
          onMouseEnter={(event) => event.target.play()}
          onMouseOut={(event) => {
            event.target.currentTime = 0;
            event.target.pause();
          }}
          className={state3}
          src="/marvel.mp4"
        ></video>
      </div>
      <div
        className="shadow-custom-famous relative "
        onMouseEnter={() => {
          setVisible4(visible);
        }}
        onMouseLeave={() => {
          setVisible4(invisible);
        }}
      >
        {" "}
        <img
          className="object-cover w-full h-full absolute "
          src="/viewers-starwars.png"
        ></img>
        <video
          onMouseEnter={(event) => event.target.play()}
          onMouseOut={(event) => {
            event.target.currentTime = 0;
            event.target.pause();
          }}
          className={state4}
          src="/starwars.mp4"
        ></video>
      </div>
      <div
        className="shadow-custom-famous relative"
        onMouseEnter={() => {
          setVisible5(visible);
        }}
        onMouseLeave={() => {
          setVisible5(invisible);
        }}
      >
        <img
          className="object-cover w-full h-full absolute "
          src="/viewers-national.png"
        ></img>
        <video
          onMouseEnter={(event) => event.target.play()}
          onMouseOut={(event) => {
            event.target.currentTime = 0;
            event.target.pause();
          }}
          className={state5}
          src="/national.mp4"
        ></video>
      </div>
    </div>
  );
}
