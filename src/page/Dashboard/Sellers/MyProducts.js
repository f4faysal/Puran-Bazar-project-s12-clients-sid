import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const [deletingProdact, setDeletingProdact] = useState(null);
  const [adverties, setAdverties] = useState("Click Adverties");

  const closeModal = () => {
    setDeletingProdact(null);
  };

  // prodact fatch

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/product/${user.email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  
  // console.log(products);

  //prodact delete
  const handleDeletePodact = (prodact) => {
    fetch(`http://localhost:5000/product/${prodact._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Prodact ${prodact.title} deleted successfully`);
        }
      });
    console.log("delete ", prodact);
  };

  const advertiesHandel = (prodact) => {
    console.log("advertiesHandel", prodact);
    fetch(`http://localhost:5000/product/${prodact}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("acces-tsoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Advertie Prodact successful.");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2 className="text-3xl">Manage Advatice:</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Total Item </th>
              <th>Prodact img </th>
              <th>Tytle</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((produc, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={produc.featured_image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{produc.title}</td>
                <td>{produc.sell_price}</td>
                <td className="text-secondary">
                  {produc?.status !== "available" ? (
                    <label
                      onClick={() => advertiesHandel(produc._id)}
                      className={`btn btn-sm btn-secondary text-white`}
                    >
                      Unsold
                    </label>
                  ) : (
                    <label className={` text-green-800`}> Availabel </label>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeletingProdact(produc)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProdact && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProdact.title}. It cannot be undone.`}
          successAction={handleDeletePodact}
          successButtonName="Delete"
          modalData={deletingProdact}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
