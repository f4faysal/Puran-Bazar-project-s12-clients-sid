import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [deletingSeller, setDeletingSeller] = useState(null);
  const closeModal = () => {
    setDeletingSeller(null);
  };

  const {
    data: seller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/seller`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteSeller = (s) => {
    fetch(`http://localhost:5000/users/seller/${s._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Seller  ${s.email} deleted successfully`);
        }
      });
    // console.log("delete Buyers  ", bookings);
  };

  const setVerify = (user) => {
    //   axios.put(`http://user/active/${user?.user?.email}`, {
    //     headers: {
    //   authorization: `bearer ${localStorage.getItem("access-token")}`,
    // },
    // })
    //     .then(res => {
    //         console.log(res);

    //     })
    // sev user in db and grt token

    fetch(`http://localhost:5000/user/active/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          refetch();
          toast.success(`The Seller  ${user.email} Verify successfully`);
        }
      });

    // {
    //   "acknowledged": true,
    //   "modifiedCount": 1,
    //   "upsertedId": null,
    //   "upsertedCount": 0,
    //   "matchedCount": 1
    // }
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  // console.log("users---------------->", users);

  return (
    <div>
      <h3 className="text-3xl mb-5">My Booking</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className=" font-bold ">
              <th></th>
              <th>Seller Name</th>
              <th>Seller email</th>
              <th>Status</th>
              <th>Accunt Type</th>
              <th>Verify Seller</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user.email &&
              seller?.map((s, i) => (
                <tr key={s._id}>
                  <td>
                    <div
                      className={`avatar ${s.status ? "online" : "offline"}`}
                    >
                      <div className="w-24 rounded-full">
                        <img src={s?.user?.photoURL} alt="" />
                        {console.log("zx", s.user)}
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{s.user?.displayName}</td>
                  <td>{s.email}</td>
                  <td className="font-bold">
                    {s.status ? (
                      <span className="text-green-600"> {s.status}</span>
                    ) : (
                      "unverifide"
                    )}
                  </td>
                  <td>{s.accountType}</td>
                  <td className="font-semibold">
                    <label
                      onClick={() => setVerify(s)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-secondary text-white"
                    >
                      Verify
                    </label>
                  </td>
                  <th>
                    {" "}
                    <label
                      onClick={() => setDeletingSeller(s)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </label>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingSeller && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingSeller.email}. It cannot be undone.`}
          successAction={handleDeleteSeller}
          successButtonName="Delete"
          modalData={deletingSeller}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
