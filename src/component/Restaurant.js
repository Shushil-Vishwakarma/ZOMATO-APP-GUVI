import React, { useState } from 'react';

export function Restaurant({ newRestaurantData }) {

  const [address, setAddress] = useState(false);

  const toggle = () => {
    setAddress(prev => !prev)
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '18rem', margin: '10px' }}>
        <img src={newRestaurantData.restaurant_thumb} className="card-img-top" alt={newRestaurantData.restaurant_name} />
        <div style={{ padding: '1rem' }}>
          <h5>{newRestaurantData.restaurant_name} 🍔</h5>


          {/* Toggle button code */}
          <button onClick={toggle}>Address</button>
          {address ? <p>📍 {newRestaurantData.address} </p> : <p></p>}

          <p>⭐ {newRestaurantData.average_rating} rating</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>💰 ₹{newRestaurantData.cost}/-</p>
            <button>➕ Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
