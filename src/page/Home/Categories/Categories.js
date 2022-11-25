import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../../../Components/Card/ExpCard";
import { AuthContext } from "../../../contexts/AuthProvider";

const categories = [
  {
    banner: null,
    deleted_at: null,
    description: "Apple",
    logo: "https://assets.swap.com.bd/brand/c4ca4238a0b923820dcc509a6f75849b/logo/iphone_logo.png",
    slug: "apple",
    title: "Apple",
  },
  {
    banner: null,
    deleted_at: null,
    description: "Samsung",
    logo: "https://assets.swap.com.bd/brand/c81e728d9d4c2f636f067f89cc14862c/logo/Samsung_logo.png",
    slug: "Samsung",
    title: "Samsung",
  },
  {
    banner: null,
    deleted_at: null,
    description: "Xiaomi",
    logo: "https://assets.swap.com.bd/brand/eccbc87e4b5ce2fe28308fd9f2a7baf3/logo/xiaomi-logo.png",
    slug: "xiaomi",
    title: "Xiaomi",
  },
  {
    banner: null,
    deleted_at: null,
    description: "Google",
    logo: "https://assets.swap.com.bd/brand/a87ff679a2f3e71d9181a67b7542122c/logo/google-logo.png",
    slug: "google",
    title: "Google",
  },
];

const Categories = () => {
  const { user } = useContext(AuthContext);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const url = "http://localhost:5000/categories";
        // try cghat function handel to error
        const res = await fetch(
          url
          // ,         {
          //       headers: {
          //         // authorization: `bearer ${localStorage.getItem("accessToken")}`,
          //       },
          //     }
        );
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
            to="/"
            className="text-sm btn btn-primary lg:text-xl font-semibold  text-white mt-2"
          >
            View all
          </Link>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse ">

          {categories.map((categorie, i) => (
            <ExpCard key={i} categorie={categorie}></ExpCard>
          ))
          
          }
          {
            console.log(categories)
          }
        </div>
      </div>
    </div>
  );
};

export default Categories;
