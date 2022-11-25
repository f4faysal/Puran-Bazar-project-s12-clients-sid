import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";



const ExpCard = ({ categorie }) => {
  const [extaDetles, srtExtaDetles] = useState(false);
  const { logo, _id ,slug} = categorie;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <Link
        to={`/categoriseItem/${slug}`}
        className="block relative h-32 w-40 rounded overflow-hidden  bg-[#def4fa] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300" 
      >
        <img
          alt="e-commerce "
          className="  object-contain  w-full h-full block p-10"
          src={logo}
        />
      </Link>

      {extaDetles ? (
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            Dhaka
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Hiking In the Mountains
          </h2>
          <p className="mt-1">$50 per person</p>
          <div className="flex mt-1">
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" /> <span>33</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpCard;
