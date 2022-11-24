import React from "react";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.jpg";
import img3 from "../../../assets/banner/3.jpg";



const Banner = () => {
  return (
    <div className="lg:mt-10 lg:mb-10">
      <div className="carousel w-full"  >
        <div id="item1" className="carousel-item w-full">
          <img src={img1} alt="" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} alt="" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
