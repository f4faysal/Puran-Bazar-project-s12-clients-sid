import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const [deletingBuyers, setDeletingBuyers] = useState(null);
  const closeModal = () => {
    setDeletingBuyers(null);
  };

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`https://puran-bazar-server.vercel.app/users/user`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteBuyers = (u) => {
    fetch(`https://puran-bazar-server.vercel.app/users/user/${u._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`, 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Buyers  ${u.email} deleted successfully`);
        }
      });
    
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

 

  return (
    <div>
      <h3 className="text-3xl mb-5">My Booking</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Seller email</th>
              <th>Accunt Type</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user.email &&
              users?.map((u, i) => (
                <tr key={u._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={u?.user?.photoURL} alt="" />
                        {console.log("zx", u.user)}
                      </div>
                    </div>
                  </td>
                  <td>{u.user?.displayName}</td>
                  <td>{u.email}</td>
                  <td>{u.accountType}</td>
                  {/* <td className="font-semibold">{u.}</td> */}
                  <th>
                    {" "}
                    <label
                      onClick={() => setDeletingBuyers(u)}
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
      {deletingBuyers && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBuyers.email}. It cannot be undone.`}
          successAction={handleDeleteBuyers}
          successButtonName="Delete"
          modalData={deletingBuyers}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyers;
