import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const Payment = () => {
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;
  // Function to initiate payment
  const initiatePayment = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/pay/${100}`);  // Example amount of 500

      // Redirect the user to the payment page
      window.location.href = data.checkoutPageUrl;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <h2>PhonePe Payment</h2>
      <button onClick={initiatePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
