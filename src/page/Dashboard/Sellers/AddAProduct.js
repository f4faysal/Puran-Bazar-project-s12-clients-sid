import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddAProduct = () => {
  // const {user} = useContext(AuthProvider)
  const { user } = useContext(AuthContext);
  const condition = [{ type: "excellent" }, { type: "good" }, { type: "fair" }];

  console.log(user.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = "b44cfcd23ef7fd73c5884fdb49060a89"; //process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const url = "http://localhost:5000/categories";
        // try cghat function handel to error
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log("errorerror", error);
      }
    },
  });

  // const damo = (data) => {
  //   const addProduct = {
  //     title: data.name,
  //     product_category_id: data.category,
  //     number: data.number,
  //     short_description: data.description,
  //     condition_type: data.condition,
  //     year_of_purchase: data.purchase,
  //     sell_price: data.price,
  //     location: data.location,
  //   };
  //   console.log("faysal", addProduct);
  // };

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const addProduct = {
            title: data.name,
            product_category_id: data.category,
            number: data.number,
            short_description: data.description,
            condition_type: data.condition,
            year_of_purchase: data.purchase,
            sell_price: data.price,
            location: data.location,
            featured_image: imgData.data.url,
            seller :user.email,
            status : "unsold"

          };
          console.log(addProduct);

          //   save products information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(addProduct),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/my-product");
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-96 p-7 ">
      <h2 className="text-4xl">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)} className="">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product Title </span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product category</span>
          </label>
          <select
            {...register("category")}
            className="select input-bordered w-full max-w-xs"
          >
            {categories.map((t, i) => (
              <option key={1} value={t.slug}>
                {t.slug}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div> */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile number</span>
          </label>
          <input
            type="text"
            {...register("number", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.number && (
            <p className="text-red-500">{errors.number.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year of purchase Month</span>
          </label>
          <input
            type="text"
            {...register("purchase", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.purchase && (
            <p className="text-red-500">{errors.purchase.message}</p>
          )}
        </div>

        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year of purchase</span>
          </label>
          <input
            type="text"
            {...register("purchase", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.purchase && (
            <p className="text-red-500">{errors.purchase.message}</p>
          )}
        </div> */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Condition type</span>
          </label>
          <select
            {...register("condition")}
            className="select input-bordered w-full max-w-xs"
          >
            {condition.map((t, i) => (
              <option key={1} value={t.type}>
                {t.type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>

        <label className="btn btn-secondary w-full mt-4" htmlFor="my-modal">
          {" "}
          Add Prodact{" "}
        </label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />

        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Add A Product Final Confirmation
            </h3>
            <p className="py-4"></p>
            <div className="modal-action">
              <input type="submit" value="Confirm" htmlFor="" className="btn" />
              <label htmlFor="my-modal" className="btn">
                {" "}
                Cancel{" "}
              </label>
            </div>
          </div>
        </div>
      </form>

      <div>
        {/* The button to open modal */}

        {/* Put this part before </body> tag */}
      </div>
    </div>
  );
};

export default AddAProduct;
