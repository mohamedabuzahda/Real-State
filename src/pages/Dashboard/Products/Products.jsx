import "../../../style/Dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import trash from "../../../images/Dashboard-image/icons8-trash-48.png";

export default function DashboardProducts() {
  // products used to store all data of products
  const [products, setProducts] = useState([]);
  // when delete the deleteProduct will be false and the function of showData will be turn on
  const [deleteProduct, setDeleteProduct] = useState(false);

  const cookies = new Cookies();
  const [token, setToken] = useState(cookies.get("Bearer"));

  useEffect(() => {
    setToken(cookies.get("Bearer"));
    // show all products
    const showData = async () => {
      try {
        let res = await axios.get("http://localhost:5000/admin/get-products", {
          headers: {
            "x-auth-token": token,
          },
        });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    showData();
  }, [deleteProduct]);

  // handleDelete used to delete product when click on trash
  async function handleDelete(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;
    try {
      let res = await axios.delete(
        `http://localhost:5000/api/delete-product/${id}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log(res);
      setDeleteProduct((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="User">
      <div className="title">
        <h3>ID</h3>
        <h3>image</h3>
        <h3>name</h3>
        <h3>area</h3>
        <h3>Price</h3>
        <h3>Options</h3>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={product._id}>
            <h3>{index + 1}</h3>
            <h3
              style={{
                backgroundImage: `url(${product.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              {" "}
            </h3>
            <h3>{product.title}</h3>
            <h3>
              {product.area} m<sup style={{ fontSize: "10px" }}>2</sup>
            </h3>
            <h3>{product.price} $</h3>
            <h3 className="fa-trash">
              <img
                src={trash}
                alt="delete icon"
                onClick={() => handleDelete(product._id)}
              />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
