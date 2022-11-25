import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import smartphone from "../../../../assets/smartphone.png";
import AllPageTopSection from "../../../../Components/AllPageTopSection/AllPageTopSection";
import ExpCard from "../../../../Components/Card/ExpCard";

const CategoriseItem = () => {
  const [extaDetles, srtExtaDetles] = useState(true);

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
      ></AllPageTopSection>
      <div className="w-full flex justify-center items-center">
        <ExpCard categorie={categoris} det={extaDetles}>
          {" "}
        </ExpCard>
      </div>
    </div>
  );
};

export default CategoriseItem;
