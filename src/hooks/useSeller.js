import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setisSeller] = useState(false);
  const [isSellerLoading, setisSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/account-type/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Sellar => ", data);
          setisSeller(data.isSeller);
          setisSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
