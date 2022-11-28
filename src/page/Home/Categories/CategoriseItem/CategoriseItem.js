import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import smartphone from "../../../../assets/smartphone.png";
import AllPageTopSection from "../../../../Components/AllPageTopSection/AllPageTopSection";
import ExpCard from "../../../../Components/Card/ExpCard";
import ItemCard from "../../../../Components/Card/ItemCard";
import Spinner from "../../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../../contexts/AuthProvider";
import ItemModal from "./ItemModal";

const CategoriseItem = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [extaDetles, srtExtaDetles] = useState(true);
  const [bookingItem, srtBookingItem] = useState(null);
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

      {user && (
        <div className="w-full flex justify-center items-center">
          <ExpCard categorie={categoris} det={extaDetles}></ExpCard>
        </div>
      )}
      <div className=" text-secondary w-full mb-10 border flex justify-center gap-3 lg:flex-row  flex-col">
        <h1 className=" text-2xl border text-center">Pick Model</h1>
        {user ? (
          <p className="text-sm text-center">
            <span className="text-indigo-800 font-semibold border-double ">{user.email}</span>{" "}
            Welcome to Puran Bazar
          </p>
        ) : (
          <Link to={"/login"} className="btn btn-sm">
            {" "}
            Plz Sign in
          </Link>
        )}
      </div>
      <div>
        {user && (
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5  items-center gap-4 justify-center justify-items-center">
            {products?.map((item) => (
              <ItemCard
                key={item._id}
                products={item}
                srtSookingItem={srtBookingItem}
              ></ItemCard>
            ))}
          </div>
        )}
      </div>
      {bookingItem && (
        <ItemModal
          bookingItem={bookingItem}
          refetch={refetch}
          srtBookingItem={srtBookingItem}
        ></ItemModal>
      )}
    </div>
  );
};

export default CategoriseItem;
