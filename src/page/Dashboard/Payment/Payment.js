import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M6ZsVJ6ltQ4sxjkgYFH84YbxOXi4gRY2G3a2WBMQQvW88FSMvnPJGDjSA7YL5y3jtfEOl301M9jtpRTUlKWEVEr003qpwUhgE"
);

const Payment = () => {
  const booking = useLoaderData();
  // const navigation = useNavigation();
  const {
    bookingDate,
    meeting_location,
    category,
    title,
    sell_price,
    featured_image,
    description,
    condition_type,
  } = booking;
  return (
    <div className="artboard phone-2">
      <h3 className="text-3xl">Payment for {title}</h3>
      <p className="text-xl">
        Please pay <strong>${sell_price}</strong> for your Catagory on{" "}
        {category} at {bookingDate}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
