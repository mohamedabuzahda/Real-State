import "../../../style/Dashboard.css";
import Cookies from "universal-cookie";
import { useEffect, useState} from "react";
import axios from "axios";

export default function Orders() {
  const cookie = new Cookies();
  const [openDetails, setOpenDetails] = useState(false);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [token, setToken] = useState(cookie.get("Bearer"));

  useEffect(() => {
    setToken(cookie.get("Bearer"));

    const fetchData = async () => {
      try {
        const ordersRes = await axios.get("http://localhost:5000/admin/get-orders", {
            headers: { "x-auth-token": token },
          })
          const usersRes = await axios.get("http://localhost:5000/admin/get-users", {
            headers: { "x-auth-token": token },
          })
        setOrders(ordersRes.data);
          setUsers(usersRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) fetchData();
  }, [token]);

  const findUser = (id)=> {
    return users.find((user) => user._id === id);
  };

  const handleDetails = (id) => {
    const selectedOrder = orders.find((o) => o._id === id);
    setOrder(selectedOrder);
    setOpenDetails(true);
  };

  return (
    <div className="User">
      <div className="title">
        <h3>ID</h3>
        <h3>Product Title</h3>
        <h3>Email</h3>
        <h3>Date</h3>
        <h3>Details</h3>
      </div>

      <div className="users">
        {orders.map((order, index) => (
          <div className="user" key={order._id}>
            <h3>{index + 1}</h3>
            <h3>{order.products?.[0]?.product?.title}</h3>
            <h3>{findUser(order.userId)?.email}</h3>
            <h3>
              {order.orderedAt &&
                new Date(order.orderedAt).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </h3>
            <h3
              onClick={() => handleDetails(order._id)}
              className="details-btn">
              Details
            </h3>
          </div>
        ))}
      </div>

      {openDetails && order && (
        <div className="details">
          <div className="orderDetails">
            <h1>Order Details</h1>

            <div className="order" key={order._id}>
              <h3>
                Order ID: <span>{order._id}</span>
              </h3>
              <h3>
                Product ID:{" "}
                <span>{order.products?.[0]?.product?._id }</span>
              </h3>
              <h3>
                Product Title:{" "}
                <span>{order.products?.[0]?.product?.title }</span>
              </h3>
              <h3>
                Product Location:{" "}
                <span>{order.products?.[0]?.product?.location }</span>
              </h3>
              <h3>
                Area:{" "}
                <span>
                  {order.products?.[0]?.product?.area } m<sup>2</sup>
                </span>
              </h3>
              <h3>
                Bedroom:{" "}
                <span>
                  {order.products?.[0]?.product?.bedrooms } bedrooms
                </span>
              </h3>
              <h3>
                Bathroom:{" "}
                <span>
                  {order.products?.[0]?.product?.bathrooms } bathrooms
                </span>
              </h3>
              <h3>
                Price:{" "}
                <span>{order.products?.[0]?.product?.price } $</span>
              </h3>
              <h3>
                User Name: <span>{findUser(order.userId)?.name }</span>
              </h3>
              <h3>
                User Email:{" "}
                <span>{findUser(order.userId)?.email }</span>
              </h3>
              <h3>
                Phone:{" "}
                <span>{order.phone || "+1111111111111 "}</span>
              </h3>
              <h3>
                Ordered At:{" "}
                <span>
                  {order.orderedAt
                    && new Date(order.orderedAt).toLocaleDateString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })
                  }
                </span>
              </h3>
              <h3>
                User Address: <span>{order.address }</span>
              </h3>
            </div>

            <button className={"btn-17"} onClick={() => setOpenDetails(false)}>
              <span className={"text-container"}>
                <span className={"text"}>Close</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
