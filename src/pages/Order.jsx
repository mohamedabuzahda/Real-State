
import React, { useEffect, useState } from 'react';

const Order = () => {
  const [cartItem, setCartItem] = useState(null);
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [showMsg, setShowMsg] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

  useEffect(() => {
    const item = localStorage.getItem('cartItem');
    if (item) {
      setCartItem(JSON.parse(item));
    }
  }, []);

  if (!cartItem) {
    return <div>No items found</div>;
  }


  const handlePay = () => {
    if (!name || !phone) {
      alert("please enter your name and phone number");
      return;
    }
    
    const orderWithUser = { ...cartItem, name, phone };
    const newOrders = [...orders, orderWithUser];
    setOrders(newOrders);
    localStorage.setItem('orders', JSON.stringify(newOrders));
    setShowMsg(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: '12px', padding: '24px', maxWidth: '400px', background: '#fff', textAlign: 'center', marginBottom: '32px' }}>
        <img
          src={cartItem.mainImage}
          alt={cartItem.title}
          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
        />
        <h3 style={{ marginBottom: '8px' }}>{cartItem.title || cartItem.name}</h3>
        <p style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px' }}>
          Price: {cartItem.price} $
        </p>
        <p style={{ color: '#555', marginBottom: '8px' }}>Address: {cartItem.address}</p>
        
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
        />
        <input
          type="tel"
          placeholder="phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '15px' }}
        />
        <button
          style={{ marginTop: '8px', padding: '10px 24px', background: '#333', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
          onClick={handlePay}
        >
          Paynow
        </button>
        {showMsg && (
          <div style={{ marginTop: '18px', color: '#333', fontWeight: 'bold', fontSize: '18px' }}>
            Payment successful! The order has been added to the dashboard.
          </div>
        )}
      </div>
        </div>
  );
};

export default Order;
