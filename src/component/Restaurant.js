import React, { useState } from 'react';

export function Restaurant({ newRestaurantData }) {
  const [showAddress, setShowAddress] = useState(false);

  const toggleAddress = () => {
    setShowAddress(prev => !prev);
  }

  return (
    <div className='main-container'>
      <div className="card">
        <img src={newRestaurantData.restaurant_thumb} className="card-img-top" alt={newRestaurantData.restaurant_name} />
        <div className="card-body">
          <h5>{newRestaurantData.restaurant_name} 🍔</h5>

          {/* Toggle button for address */}
          <button onClick={toggleAddress}>Address</button>
          {showAddress && <p>📍 {newRestaurantData.address}</p>}

          <p>⭐ {newRestaurantData.average_rating} rating</p>
          <div className="card-footer">
            <p>💰 ₹{newRestaurantData.cost}/-</p>
            <button>➕ Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
