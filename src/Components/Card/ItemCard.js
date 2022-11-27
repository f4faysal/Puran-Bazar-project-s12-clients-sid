import React from "react";

const ItemCard = ({ products }) => {
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

  console.log(status, products);
  return (
    <div className="card w-52   bg-base-100 shadow-xl">
      <div className="w-full h-full">
        <figure className="px-3 pt-2">
          <img src={featured_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" card p-2 items-center text-center ">
          <h2 className="text-[18px] font-semibold">
            {title} <br />
            (Pre one)
          </h2>
          <p>{short_description}</p>

          <p className="line-through text-red-700 text-sm">
            Price: {price} <span className="">৳</span>
          </p>
          <p className="font-semibold text-xl ">
            Price: {sell_price} <span className="text-xl">৳</span>
          </p>

          <p className="text-sm">Use : {year_of_purchase} Month</p>
          <p className="mb-2 text-sm">Quality : {condition_type}</p>

          <div className="card-actions justify-end ">
            <button className="btn btn-sm btn-primary text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
