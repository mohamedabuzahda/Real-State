import "../../../style/Dashboard.css";
import trash from "../../../images/Dashboard-image/icons8-trash-48.png";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const cookie = new Cookies();
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(cookie.get("Bearer"));
  useEffect(() => {
    setToken(cookie.get("Bearer"));
    const showData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/get-users",
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    showData();
  }, [token, deleteProduct]);
  async function handleDelete(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      try {
        const res = await axios.delete(
          `http://localhost:5000/api/delete-user/${id}`,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );
        setDeleteProduct((prev) => !prev);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <div className="User">
      <div className="title">
        <h3>ID</h3>
        <h3>Name</h3>
        <h3>E-mail</h3>
        <h3>Options</h3>
      </div>
      <div className="users">
        {users &&
          users.map((user, index) => (
            <div className="user" key={user._id}>
              <h3>{index + 1}</h3>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              <h3 className="fa-trash">
                <img
                  src={trash}
                  alt="delete icon"
                  onClick={() => handleDelete(user._id)}
                />
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
}
