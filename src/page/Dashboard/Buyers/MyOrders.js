import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [deletingProdact, setDeletingProdact] = useState(null);
  const closeModal = () => {
    setDeletingProdact(null);
}


  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/bookings/${user.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });


  const handleDeleteBooking = (prodact) => {
    // fetch(`http://localhost:5000/product/${prodact._id}`, {
    //   method: "DELETE",
    //   headers: {
    //     authorization: `bearer ${localStorage.getItem("access-token")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       refetch();
    //       toast.success(`Booking ${prodact.title} deleted successfully`);
    //     }
    //   });
    // console.log("delete ", prodact);
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  console.log("bookings", bookings);

  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Prodact Name</th>
              <th>Beang</th>
              <th>Condition</th>
              <th>Price</th>
              <th>BookingDate</th>
              <th>Meeting Location</th>
              <th>Payment</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user.email &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={booking.featured_image} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>{booking.title}</td>
                  <td>{booking.category}</td>
                  <td>{booking.condition_type}</td>
                  <td className="font-semibold">{booking.sell_price}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.meeting_location}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {/* {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="text-green-500">Paid</span>
                    )} */}
                  </td>
                  <th> <label
                    // onClick={() => setDeletingProdact(produc)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label></th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deletingProdact && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingProdact.title}. It cannot be undone.`}
          successAction={handleDeleteBooking}
          successButtonName="Delete"
          modalData={deletingProdact}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
