import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function ImgSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  // const [data, setData] = useState();

  return (
    <Slider
      className="   shadow-custom-slider   rounded-2xl relative mx-48 pt-10 "
      {...settings}
    >
      <img
        className=" border-[3px] border-gray-700 h-[calc((100vh_-_70px)/2)]  rounded-2xl w-full  "
        src="https://i.ibb.co/JcNDB3s/avengers.webp"
      />

      <img
        className=" border-[3px] border-gray-700  rounded-2xl w-full h-[calc((100vh_-_70px)/2)]"
        src="https://i.ibb.co/MRFDy0h/Rocketry-The-Nambi-Effect-2.jpg"
      />

      <img
        className="border-[3px] border-gray-700 rounded-2xl w-full h-[calc((100vh_-_70px)/2)]"
        src="https://i.ibb.co/7yqy10s/Jugjugg-Jeeyo-cover-image.jpg"
      />
      <img
        className=" border-[3px] border-gray-700 rounded-2xl  w-full h-[calc((100vh_-_70px)/2)]"
        src="/slider-scale.jpg"
      />
      {/* <div className=" shadow-custom-slider shadow-xl relative rounded-2xl h-[calc((100vh_-_70px)/2)] w-full  ">
        <img
          className="object- rounded-2xl w-full h-full"
          src="https://i.ibb.co/cC5VMsv/Bahubali-2-The-Conclusion-4.jpg"
        />
      </div> */}
    </Slider>
  );
}
