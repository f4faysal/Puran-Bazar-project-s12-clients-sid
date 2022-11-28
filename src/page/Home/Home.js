import React from "react";
import Adverties from "./Adverties/Adverties";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Offers from "./Offers/Offers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Adverties></Adverties>
      <Categories></Categories>
      <Offers></Offers>
    </div>
  );
};

export default Home;
