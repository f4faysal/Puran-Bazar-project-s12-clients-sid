import React from "react";

const ItemCard = ({ products , srtSookingItem}) => {
  const {
    short_description,
    title,
    featured_image,
    price,
    status,
    sell_price,
    year_of_purchase,
    condition_type,
  } = products;

  // console.log(status[0]);

  return (
    <div className="card w-52   bg-base-100 shadow-xl indicator ">
      <span className="indicator-item badge badge-secondary">{status ? status[0] : "New"}</span>
      <div className="w-full h-full">
        <figure className="px-3 pt-2 w-46 h-36">
          <img src={featured_image} alt="Shoes" className="rounded  h-full " />
        </figure>
        <div className=" card p-2 items-center text-center h-64 flex justify-between  ">
          <div>
          <h2 className="text-[18px] font-semibold">
            {title} <br />
            (Pre one)
          </h2>
          <p>{short_description}</p>

          <p className="line-through text-red-700 text-sm">
            Price: {price ? price : "0000" } <span className="">৳</span>
          </p>
          <p className="font-semibold text-xl ">
          Sell Price: {sell_price} <span className="text-xl">৳</span>
          </p>

          <p className="text-sm">Use : {year_of_purchase} Month</p>
          <p className="mb-2 text-sm">Quality : {condition_type}</p>
          </div>

          <div className="card-actions ">
            <label onClick={()=>srtSookingItem(products)} htmlFor="booking-modal" className="btn btn-sm btn-primary text-white">
              Buy Now
            </label>
    
          </div>
        </div>
      </div>

      <div>
      
      </div>
    </div>
  );
};

export default ItemCard;
