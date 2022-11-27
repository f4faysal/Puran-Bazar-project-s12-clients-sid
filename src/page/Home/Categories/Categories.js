import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../../../Components/Card/ExpCard";
import { AuthContext } from "../../../contexts/AuthProvider";

const Categories = () => {
  const { user } = useContext(AuthContext);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const url = "http://localhost:5000/categories";
        // try cghat function handel to error
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log("errorerror", error);
      }
    },
  });



  return (
    <div className="hero bg-primary mb-10">
      <div className="lg:hero-content lg:flex-col">
        <div className="flex flex-col lg:flex-row items-center w-full justify-between mt-2">
          <h1 className="text-2xl lg:text-3xl font-semibold text-white">
            Categories to Sell
          </h1>
          <Link
            to="/categories"
            className="text-[5px] btn btn-sm btn-secondary lg:text-xl font-semibold  text-white mt-2"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {categories?.map((categorie, i) => (
            <ExpCard key={i} categorie={categorie}></ExpCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
