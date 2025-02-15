import React from 'react';
import './App.css';
import honeyImage from './assets/honey3.jpg';
import honey2 from './assets/honey2.jpg';

function App() {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <h1>Pure Organic Honey</h1>
        <p>Experience the richness of nature with our 100% organic honey.</p>
        <img src={honeyImage} alt="Honey jar" />
      </section>
      
      <section className="product-info">
        <h2>Why Choose Our Honey?</h2>
        <img src={honey2} alt="Honey benefits" />
        <ul>
          <li>100% Natural & Organic</li>
          <li>Rich in Nutrients</li>
          <li>Sustainably Sourced</li>
          <li>Delicious & Healthy</li>
        </ul>
      </section>
      
      <section className="order-form">
        <h2>Order Your Honey</h2>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Quantity:</label>
        <input type="number" placeholder="Enter quantity" />
        <button type="submit">Place Order</button>
      </section>
    </div>
  );
}

export default App;
