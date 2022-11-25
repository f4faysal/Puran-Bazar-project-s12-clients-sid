import React from "react";
import bannerImg from "../../../assets/banner.png";
import FIFA from "../../../assets/FIFA-THUMBNAIL-PHONE.jpg";
import thumbnail from "../../../assets/thumbnail.jpg";

const Offers = () => {
  return (
    <div>
      <div className="hero bg-primary rounded p-5">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20 ">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl text-[#def4fa]  font-bold">
              Puran <span className="text-secondary">Bazzar</span> Offers{" "}
            </h1>
            <p className="py-6">
              Buying & Selling is easier from our app too! To buy or sell on the
              go, download our app.
            </p>
            <div className="flex gap-7 w-1/3">
              
              <img className="w-3/4" src={FIFA} alt="" />
              <img className="w-3/4" src={thumbnail} alt="" />
              <img className="w-3/4" src={FIFA} alt="" />

              {/* <div className="h-full w-full">
                <div className="flex justify-end items-end ">
                  <div className="">
                    <img src={google} alt="" />
                  </div>
                  <div className="">
                    <img src={apple} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" flex-shrink-0 w-full max-w-sm ">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
