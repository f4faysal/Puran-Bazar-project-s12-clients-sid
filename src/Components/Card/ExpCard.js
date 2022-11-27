import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const ExpCard = ({ categorie, det  }) => {
  const { logo, _id, slug, title } = categorie;
  
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center items-center flex-col">
      <Link
        to={`/categories/${slug}`}
        className="block relative h-32 w-40 rounded overflow-hidden  bg-[#def4fa] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300"
      >
        <img
          alt="e-commerce "
          className="  object-contain  w-full h-full block p-10"
          src={logo}
        />
      </Link>

      {det ? (
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> </h3> */}
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">total 99</p>
          <div className="flex mt-1">
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
            <StarIcon className="h3 w-3 text-green-500" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpCard;
