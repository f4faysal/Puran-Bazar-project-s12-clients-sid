import React, { useState } from "react";

const AllPageTopSection = ({matchPhonot , heding , serchTogol}) => {
    const [showSerchbar , setShowSerchBar] = useState(true)
    
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center w-full ">
        <img src={matchPhonot} className="max-w-sm  " alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
           {heding}
          </h1>
        { showSerchbar ? <div className="form-control mt-8">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-primary text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div> : <></>}
        </div>
      </div>
    </div>
  );
};

export default AllPageTopSection;
