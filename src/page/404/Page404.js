import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/404.svg";

const Page404 = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      {/* <img className="w-1/12" src={logo} alt="" /> */}
      <h1 className="text-5xl text-slate-700 font-semibold">
        This Page Isn't Available
      </h1>
      <p className="text-1xl text-slate-500 font-semibold md:w-1/2 mt-7 text-center">
        The link may be broken, or the page may have been removed. Check to see
        if the link you're trying to open is correct.
      </p>
      <div className="text-1lx font-medium px-2 py-2 hover:bg-emerald-900  bg-emerald-700 rounded text-white  w-40 flex justify-center mt-7">
        <Link to="/">Go to News Feed</Link>
      </div>
    </div>
  );
};

export default Page404;
