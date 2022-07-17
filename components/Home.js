import React from "react";
import Famous from "./Famous";
import ImgSlider from "./ImgSlider";
import Tiles from "./Tiles";
//#040714
export default function Home({data}) {
  return (
    <div className="z-1 text-white pb-20 min-h-full ">
      <ImgSlider />
      <Famous />
      <Tiles title="Recommended for You"  data ={data}/>
      <Tiles title="New to Platform" data ={data} />
      <Tiles title="Original"  data ={data}/>
      <Tiles title="Trending" data ={data} />
    </div>
  );
}
