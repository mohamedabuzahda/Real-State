import "../../style/Dashboard.css";
import { Link, Outlet } from "react-router-dom";
import users from '../../images/Dashboard-image/icons8-users-50.png'
import addUser from '../../images/Dashboard-image/icons8-add-user-50.png'
import products from '../../images/Dashboard-image/icons8-products-50.png'
import addProducts from '../../images/Dashboard-image/icons8-add-properties-50.png'
import reservations from "../../images/Dashboard-image/icons8-reserve-50.png";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="leftSide">
        <Link to="/dashboard/users">
          <img src={users} alt="users icon" />
          <span> Users</span>
        </Link>
        <Link to="/dashboard/add-user">
          <img src={addUser} alt="add user icon" />
          <span> Add User</span>
        </Link>
        <Link to="/dashboard/products">
          <img src={products} alt="products icon" />
          <span> Products</span>
        </Link>
        <Link to="/dashboard/add-products">
          <img src={addProducts} alt="add products icon" />
          <span> Add Products</span>
        </Link>
        <Link to="/dashboard/orders">
          <img src={reservations} alt="reservations icon" />
          <span> Reservations</span>
        </Link>
      </div>
      <div className="rightSide" style={{ position: "relative" }}>
        <Outlet />
      </div>
    </div>
  );
}
