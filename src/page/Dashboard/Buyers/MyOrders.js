import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/bookings/${user.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if(isLoading){
    return <Spinner></Spinner>
  }

  console.log("bookings", bookings);

  return <div>MyOrders MyOrders</div>;
};

export default MyOrders;
