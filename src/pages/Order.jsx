
import React, { useEffect, useState } from 'react';

const Order = () => {
  const [cartItem, setCartItem] = useState(null);
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem('cartItem');
    if (item) {
      setCartItem(JSON.parse(item));
    }
  }, []);

  if (!cartItem) {
    return <div>لا يوجد طلبات</div>;
  }

  const handlePay = () => {
    // إضافة الطلب إلى قائمة الطلبات
    const newOrders = [...orders, cartItem];
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
          السعر: {cartItem.price} $
        </p>
        <p style={{ color: '#555', marginBottom: '8px' }}>العنوان: {cartItem.address}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px', color: '#444' }}>
          <span>الغرف: {cartItem.bedrooms}</span>
          <span>الحمامات: {cartItem.bathrooms}</span>
          <span>المساحة: {cartItem.area} قدم</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px', color: '#444' }}>
          <span>السنة: {cartItem.yearBuilt}</span>
          <span>الطابق: {cartItem.floor}</span>
          <span>موقف: {cartItem.parking}</span>
        </div>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '12px' }}>{cartItem.description}</p>
        <button
          style={{ marginTop: '18px', padding: '10px 24px', background: '#43b649', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
          onClick={handlePay}
        >
          الدفع الآن
        </button>
        {showMsg && (
          <div style={{ marginTop: '18px', color: '#43b649', fontWeight: 'bold', fontSize: '18px' }}>
            تم الدفع بنجاح! تم إضافة الطلب إلى لوحة التحكم.
          </div>
        )}
      </div>
      {/* عرض الطلبات في لوحة التحكم */}
      {orders.length > 0 && (
        <div style={{ width: '100%', maxWidth: '600px', background: '#f9f9f9', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
          <h2 style={{ marginBottom: '16px', color: '#1976d2' }}>الطلبات في لوحة التحكم</h2>
          {orders.map((order, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
              <strong>{order.title || order.name}</strong> - {order.price} $
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;