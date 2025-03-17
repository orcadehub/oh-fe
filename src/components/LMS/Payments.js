import React from "react";

const Payments = ({ user }) => {
  return (
    <div className="payments-container">
      <h2>Payment History</h2>
      {user.payments.length > 0 ? (
        user.payments.map((payment) => <p key={payment.id}>₹{payment.amount} - {payment.status}</p>)
      ) : (
        <p>No payment history found.</p>
      )}
    </div>
  );
};

export default Payments;
