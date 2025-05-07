import React, { useState } from 'react';
import './Print.css';
import T1 from '../assets/prints/t1.jpg';
import T2 from '../assets/prints/t2.jpg';
import Cup1 from '../assets/prints/cup.jpg';
import Cup2 from '../assets/prints/cup2.jpeg';
import Cup3 from '../assets/prints/cup3.webp';
import Cap from '../assets/prints/cap.jpeg';
import Badge from '../assets/prints/badge.webp';
import B1 from '../assets/prints/bottle.webp';
import B2 from '../assets/prints/b1.jpg';
import B3 from '../assets/prints/b2.jpg';
import F1 from '../assets/prints/frame.png';
import P1 from '../assets/prints/plate.webp';

const products = [
  {
    category: 'T-Shirts',
    items: [
      { name: 'Classic Tee 1 side', price: '₹99', image: T1 },
      { name: 'Classic Tee 2 side', price: '₹129', image: T2 },
    ],
  },
  {
    category: 'Cups',
    items: [
      { name: 'Ceramic Mug 1 Image', price: '₹99', image: Cup1 },
      { name: '1 Image & Text', price: '₹119', image: Cup2 },
      { name: 'Ceramic Mug 2 Images', price: '₹129', image: Cup3 },
      { name: '2 Images & Text', price: '₹139', image: Cup3 },
    ],
  },
  {
    category: 'Caps',
    items: [
      { name: 'White Cap', price: '₹99', image: Cap },
    ],
  },
  {
    category: 'Bottles',
    items: [
      { name: 'Temperature Bottle 1 side', price: '₹319', image: B1 },
      { name: 'Temperature Bottle 2 sides', price: '₹349', image: B1 },
      { name: 'Aluminium Bottle 1 side', price: '₹189', image: B2 },
      { name: 'Aluminium Bottle 2 sides', price: '₹219', image: B3 },
    ],
  },
  {
    category: 'Photo Frames',
    items: [
      { name: 'Glass Frame', price: '₹199', image: F1 },
    ],
  },
  {
    category: 'Plates',
    items: [
      { name: 'Ceramic Plate', price: '₹199', image: P1 },
    ],
  },
  {
    category: 'Badges',
    items: [
      { name: 'Badge 44mm', price: '₹10 per piece', image: Badge },
      { name: 'Badge 58mm', price: '₹13 per piece', image: Badge },
    ],
  },
];

const Print = () => {
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts');
  const currentItems = products.find(p => p.category === selectedCategory)?.items || [];

  return (
    <div className="print-container">
      <h2 className="title">Product Showcase</h2>

      <div className="menu-buttons">
        {products.map(p => (
          <button
            key={p.category}
            onClick={() => setSelectedCategory(p.category)}
            className={selectedCategory === p.category ? 'active' : ''}
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
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <p>To place an order, contact us at <strong>+91 7093012101</strong></p>
        <a
          href="https://wa.me/917093012101"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Order via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Print;
