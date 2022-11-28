import React from "react";

const Adverties = () => {


    

  return (
    <div className="mb-5 mt-5">
      <div className="hero  rounded p-5">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20 ">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5  items-center gap-4 justify-center justify-items-center">
            {/* {products?.map((item) => (
              <ItemCard
                key={item._id}
                products={item}
                srtSookingItem={srtBookingItem}
              ></ItemCard>
            ))} */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverties;
