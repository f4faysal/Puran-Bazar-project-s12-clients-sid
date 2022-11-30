import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const ItemModal = ({ bookingItem, refetch, srtBookingItem }) => {
  const { user } = useContext(AuthContext);

  const date = format(new Date(), "PP");

  console.log("date", date);
  const {
    short_description,
    title,
    featured_image,
    product_category_id,
    sell_price,
    year_of_purchase,
    _id,
    condition_type,
  } = bookingItem;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const meeting_location = form.meeting.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // console.log(booking);
    // [3, 4, 5].map((value, i) => console.log(value))

    const booking = {
      bookingDate: date,
      description: short_description,
      title: title,
      podact: _id,
      userNAme: name,
      category: product_category_id,
      email,
      phone,
      meeting_location,
      sell_price,
      featured_image,
      condition_type,
    };
    console.log(booking, bookingItem);

    fetch("https://puran-bazar-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("D==>", data);
        if (data.acknowledged) {
          srtBookingItem(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  // TODO: send data to the server
  // and once data is saved then close the modal
  // and display success toast

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <h3 className="text-sm font-bold"> Use {year_of_purchase} Mont</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <label className="text-sm px-2">price</label>
            <input
              type="text"
              disabled
              value={sell_price}
              className="input w-full input-bordered "
            />
            {/* <select name="slot" className="select select-bordered w-full">
              {status.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))} 
            </select> */}
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="meeting"
              type="text"
              placeholder="Meeting location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
