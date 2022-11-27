import React from "react";

const ItemCard = () => {

  return (
    <div className="card w-52 bg-base-100 shadow-xl">
      <figure className="px-3 pt-2">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className=" card p-2 items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
