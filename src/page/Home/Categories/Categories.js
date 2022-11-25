import React from "react";
import ExpCard from "../../../Components/Card/ExpCard";

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
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {
            categories.map((categorie , i) => <ExpCard key={i} categorie={categorie}></ExpCard>)
        }
      </div>
    </div>
  );
};

export default Categories;
