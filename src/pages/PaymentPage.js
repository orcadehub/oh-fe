import React, { useState } from "react";
import axios from "axios";

const PaymentPage = () => {
  const [checkoutUrl, setCheckoutUrl] = useState("");

  // Function to initiate payment
  const initiatePayment = async () => {
    try {
      const { data } = await axios.get("http://localhost:3500/pay/10");  // Example amount of 500

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

export default PaymentPage;
