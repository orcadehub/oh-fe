import React, { useState } from "react";
import "./Print.css";
import config from "../config";
import axios from "axios";
import T1 from "../assets/prints/t1.jpg";
import T2 from "../assets/prints/t2.jpg";
import Cup1 from "../assets/prints/cup.jpg";
import Cup2 from "../assets/prints/cup2.jpeg";
import Cup3 from "../assets/prints/cup3.webp";
import Cap from "../assets/prints/cap.jpeg";
import Badge from "../assets/prints/badge.webp";
import B1 from "../assets/prints/bottle.webp";
import B2 from "../assets/prints/b1.jpg";
import B3 from "../assets/prints/b2.jpg";
import F1 from "../assets/prints/frame.png";
import P1 from "../assets/prints/plate.webp";

const products = [
  {
    category: "T-Shirts",
    items: [
      {
        name: "Classic Tee 1 side",
        price: "₹99",
        image: T1,
        description:
          "Premium cotton T-shirt with vibrant print on the front side.",
      },
      {
        name: "Classic Tee 2 side",
        price: "₹129",
        image: T2,
        description:
          "Custom printed T-shirt with designs on both front and back.",
      },
    ],
  },
  {
    category: "Cups",
    items: [
      {
        name: "Ceramic Mug 1 Image",
        price: "₹99",
        image: Cup1,
        description: "Sturdy ceramic mug with your photo printed on one side.",
      },
      {
        name: "1 Image & Text",
        price: "₹119",
        image: Cup2,
        description: "Personalized mug with your photo and custom text.",
      },
      {
        name: "Ceramic Mug 2 Images",
        price: "₹129",
        image: Cup3,
        description: "Beautiful ceramic mug with two photo placements.",
      },
      {
        name: "2 Images & Text",
        price: "₹139",
        image: Cup3,
        description:
          "Fully personalized mug with two images and custom message.",
      },
    ],
  },
  {
    category: "Caps",
    items: [
      {
        name: "White Cap",
        price: "₹99",
        image: Cap,
        description: "Classic white cap with custom logo or text print.",
      },
    ],
  },
  {
    category: "Bottles",
    items: [
      {
        name: "Aluminium Bottle 1 side",
        price: "₹189",
        image: B2,
        description:
          "Durable aluminum bottle with print on one side – ideal for daily use.",
      },
      {
        name: "Temperature Bottle 1 side",
        price: "₹319",
        image: B1,
        description:
          "Smart temperature display bottle with one-side custom print.",
      },
      {
        name: "Aluminium Bottle 2 sides",
        price: "₹219",
        image: B3,
        description: "Printed aluminum bottle with designs on both sides.",
      },
      {
        name: "Temperature Bottle 2 sides",
        price: "₹349",
        image: B1,
        description:
          "Double-side printed smart temperature bottle – stylish and practical.",
      },
    ],
  },
  {
    category: "Photo Frames",
    items: [
      {
        name: "Glass Frame",
        price: "₹199",
        image: F1,
        description:
          "Elegant glass photo frame – perfect for gifting and home décor.",
      },
    ],
  },
  {
    category: "Plates",
    items: [
      {
        name: "Ceramic Plate",
        price: "₹199",
        image: P1,
        description:
          "Custom printed ceramic plate – great for decoration or gifting.",
      },
    ],
  },
  {
    category: "Badges",
    items: [
      {
        name: "Badge 44mm",
        price: "₹10 per piece",
        image: Badge,
        description:
          "Compact 44mm badges with full-color prints – ideal for events and branding.",
      },
      {
        name: "Badge 58mm",
        price: "₹13 per piece",
        image: Badge,
        description:
          "Larger 58mm badges – vibrant and professional for promotions or gifts.",
      },
    ],
  },
];

const Print = () => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? config.LOCAL_BASE_URL
      : config.BASE_URL;
  const [selectedCategory, setSelectedCategory] = useState("T-Shirts");
  const [quantities, setQuantities] = useState({});
  const currentItems =
    products.find((p) => p.category === selectedCategory)?.items || [];

  const handleQuantityChange = (index, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + delta),
    }));
  };

  const handlePayment = async (amount, productName, quantity) => {
    const userAddress = prompt("Enter your full delivery address:");
    if (!userAddress || userAddress.trim() === "") {
      alert("Address is required to proceed.");
      return;
    }

    try {
      const totalAmount = amount * quantity + 38; // ₹38 delivery charge
      const response = await axios.get(`${baseURL}/pay/${totalAmount * 100}`);

      if (response.data.checkoutPageUrl) {
        const orderDetails = {
          product: productName,
          quantity,
          address: userAddress,
          amount: totalAmount,
          orderId: response.data.merchantOrderId,
          date: new Date().toISOString(),
        };
        localStorage.setItem("latestOrder", JSON.stringify(orderDetails));
        window.location.href = response.data.checkoutPageUrl;
      }
    } catch (error) {
      console.error("Payment API error:", error);
    }
  };

  return (
    <div className="print-container">
      <h2 className="title">Product Showcase</h2>

      <div className="menu-buttons">
        {products.map((p) => (
          <button
            key={p.category}
            onClick={() => setSelectedCategory(p.category)}
            className={selectedCategory === p.category ? "active" : ""}
          >
            {p.category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {currentItems.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(index, -1)}>-</button>
              <span>{quantities[index] || 1}</span>
              <button onClick={() => handleQuantityChange(index, 1)}>+</button>
            </div>
            <button
              onClick={() =>
                handlePayment(
                  parseInt(item.price.replace(/[^\d]/g, ""), 10),
                  item.name,
                  quantities[index] || 1
                )
              }
              className="buy-now-button"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* COD Notice */}
      <div className="cod-notice">
        <p>
          <strong>Note:</strong> No Cash on Delivery available for printed
          products. Please proceed with prepaid payment options only.
        </p>
        <p>
          <strong>Note:</strong> ₹38 delivery charge applicable on every order.
        </p>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <p>
          To place an order, contact us at <strong>+91 7093012101</strong>
        </p>
        <a
          href="https://wa.me/917093012101"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Order via WhatsApp
        </a>
      </div>

      {/* Terms and Conditions */}
      <div className="terms-and-conditions">
        <h3>Terms & Conditions</h3>
        <ul>
          <li>All orders are non-refundable once confirmed.</li>
          <li>No returns accepted for personalized/custom printed products.</li>
          <li>
            We are not responsible for product damage, delay, or missing items
            during transit.
          </li>
          <li>
            Order carefully. Designs/images/texts once printed cannot be
            modified or replaced.
          </li>
          <li>
            Ensure your shipping address and contact number are accurate before
            order confirmation.
          </li>
          <li>
            Products are made to order; delivery time may vary between 3–7
            business days.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Print;
