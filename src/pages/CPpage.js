import React from 'react';
import axios from 'axios';
import config from '../config';

const CPpage = () => {
  const customerData = {
    customerName: 'Prasanth',
    companyName: 'InfluexKonnect',
    invoiceAmount: 30000,
    taxAmount: 5400,
    description: 'Web development project including front-end, back-end, and deployment services.',
  };

  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;

  const handleViewDescription = () => {
    alert(`Description: ${customerData.description}`);
  };

  const handlePayment = async (amount, productName, quantity) => {
    

    try {
      const totalAmount = 400; // ₹38 delivery charge
      const response = await axios.get(`${baseURL}/pay/${totalAmount * 100}`);

      if (response.data.checkoutPageUrl) {
      
        window.location.href = response.data.checkoutPageUrl;
      }
    } catch (error) {
      console.error("Payment API error:", error);
    }
  };

  const totalAmount = customerData.invoiceAmount + customerData.taxAmount;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Customer Payment Page</h3>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <strong>Customer Name:</strong> {customerData.customerName}
                </li>
                <li className="list-group-item">
                  <strong>Company Name:</strong> {customerData.companyName}
                </li>
                <li className="list-group-item">
                  <strong>Invoice Amount:</strong> ₹{customerData.invoiceAmount.toLocaleString()}
                </li>
                <li className="list-group-item">
                  <strong>Tax Amount (18%):</strong> ₹{customerData.taxAmount.toLocaleString()}
                </li>
                <li className="list-group-item">
                  <strong>Total Payable:</strong> ₹{totalAmount.toLocaleString()}  = ₹{(totalAmount).toLocaleString()}
                </li>
              </ul>

              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary w-50 me-2" onClick={handleViewDescription}>
                  View Description
                </button>
                <button className="btn btn-success w-50" onClick={handlePayment}>
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPpage;
