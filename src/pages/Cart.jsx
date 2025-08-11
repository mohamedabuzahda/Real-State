import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const item = localStorage.getItem('cartItem');
    if (item) {
      setCartItem(JSON.parse(item));
    }
  }, []);

  if (!cartItem) {
    return <div>السلة فارغة</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: '12px', padding: '24px', maxWidth: '400px', background: '#fff', textAlign: 'center' }}>
        <img
          src={cartItem.mainImage}
          alt={cartItem.title}
          style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }}
        />
        <h3 style={{ marginBottom: '8px' }}>{cartItem.title || cartItem.name}</h3>
        <p style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px' }}>
          السعر: {cartItem.price} $
        </p>
        <button
          style={{ marginTop: '18px', padding: '10px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
          onClick={() => window.location.href = '/order'}
        >
          الذهاب إلى الطلب
        </button>
      </div>
    </div>
  );
};

export default Cart;