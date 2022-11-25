import React from "react";
import { useLoaderData } from "react-router-dom";
import smartphone from "../../../../assets/smartphone.png";
import AllPageTopSection from "../../../../Components/AllPageTopSection/AllPageTopSection";

const CategoriseItem = () => {
  const categoris = useLoaderData();
  console.log(categoris);

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
      >
      </AllPageTopSection>
        

    </div>
  );
};

export default CategoriseItem;
