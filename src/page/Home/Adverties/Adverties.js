import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import ItemCard from "../../../Components/Card/ItemCard";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import ItemModal from "../Categories/CategoriseItem/ItemModal";

const Adverties = () => {
  const { user } = useContext(AuthContext);
  const [bookingItem, srtBookingItem] = useState(null);

  const {
    data: advatices = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["advatices"],
    queryFn: async () => {
      try {
        const url = `http://localhost:5000/advatices/${user.email}`;
        // try cghat function handel to error
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        console.log("Adverties", data);
        return data;
      } catch (error) {
        console.log("errorerror", error);
      }
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log("data", advatices);
  return (
    <div>
      {advatices > 1 && (
        <div className="mb-5 mt-5 bg-gray-100 rounded-lg">
          <h1 className="text-center text-xl font-semibold text-secondary">
            Prodact Advatices
          </h1>
          <div className="hero  rounded p-5">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20 ">
              <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5  items-center gap-4 justify-center justify-items-center">
                {advatices ? (
                  advatices?.map((item) => (
                    <ItemCard
                      key={item._id}
                      products={item}
                      srtSookingItem={srtBookingItem}
                    ></ItemCard>
                  ))
                ) : (
                  <Spinner></Spinner>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Adverties;
