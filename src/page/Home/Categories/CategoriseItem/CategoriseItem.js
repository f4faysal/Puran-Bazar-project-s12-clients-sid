import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import smartphone from "../../../../assets/smartphone.png";
import AllPageTopSection from "../../../../Components/AllPageTopSection/AllPageTopSection";
import ExpCard from "../../../../Components/Card/ExpCard";
import ItemCard from "../../../../Components/Card/ItemCard";
import Spinner from "../../../../Components/Spinner/Spinner";
import ItemModal from "./ItemModal";

const CategoriseItem = () => {
  const [extaDetles, srtExtaDetles] = useState(true);

  const [bookingItem, srtBookingItem] = useState("");
  const categoris = useLoaderData();

  console.log(categoris.slug);

  useEffect(() => {}, []);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const url = `http://localhost:5000/products/${categoris.slug}`;
        // try cghat function handel to error
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        console.log("hello", data);
        return data;
      } catch (error) {
        console.log("errorerror", error);
      }
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  // const [produc , setproducts] = useState(products)

  console.log("allprodact", products);

  return (
    <div>
      <AllPageTopSection
        heding={
          <>
            SELL YOUR <br /> <span className="text-primary">SMARTPHONE</span>
            <br /> FOR QUICK CASH
          </>
        }
        matchPhonot={smartphone}
        serchTogol={true}
      ></AllPageTopSection>
      <div className="w-full flex justify-center items-center">
        <ExpCard categorie={categoris} det={extaDetles}></ExpCard>
      </div>
      <div className="text-2xl text-secondary  mb-10">
        <h1 className="text-center border  ">Pick Model</h1>
      </div>
      <div>
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5  items-center gap-4 justify-center justify-items-center">
          {products?.map((item) => (
            <ItemCard
              key={item._id}
              products={item}
              srtSookingItem={srtBookingItem}
            ></ItemCard>
          ))}
        </div>
      </div>
      {bookingItem && (
        <ItemModal
          bookingItem={bookingItem}
          refetch={refetch}
          srtBookingItem ={srtBookingItem}
        ></ItemModal>
      )}
    </div>
  );
};

export default CategoriseItem;
