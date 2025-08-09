import "../../../style/Dashboard.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function AddProducts() {
  // user information
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [area, setArea] = useState(0);
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  // when submit the accept is true to check the label
  const [accept, setAccept] = useState(false);
  const cookie = new Cookies();

  // when the user enter the right information the website will go to home page
  const nav = useNavigate();

  // when user click on Add new to button turn on this function
  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    try {
      let res = await axios.post(
        "http://localhost:5000/admin/add-product",
        {
          title: title,
          description: description,
          category: category,
          status: status,
          images: images[0].split(","),
          price: price,
          quantity: quantity,
          bedrooms: bedroom,
          bathrooms: bathroom,
          area: area,
          type: type,
          location: location,
        },
        {
          headers: {
            "x-auth-token": cookie.get("Bearer"),
          },
        }
      );
      nav("/dashboard/products");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="add-user">
      <form action="" className="logForm">
        <h3>Add New Product</h3>

        <label htmlFor="Title">Product Title</label>
        <input
          type="text"
          id="Title"
          placeholder="Enter The Title of Product"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title.length < 2 && accept && (
          <p className="errorMessage">The Title of Product is required</p>
        )}

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter The Description of Product"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description === "" && accept && (
          <p className="errorMessage">This Field is required</p>
        )}
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          id="Address"
          placeholder="Enter The Address of Product"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {location === "" && accept && (
          <p className="errorMessage">This Field is required</p>
        )}
        <label htmlFor="Status">Status</label>
        <input
          type="text"
          id="Status"
          placeholder="Enter The Status of Product"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        {status === "" && accept && (
          <p className="errorMessage">This Field is required</p>
        )}
        <label htmlFor="Type">Type</label>
        <input
          type="text"
          id="Type"
          placeholder="Enter The Type of Product"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        {type === "" && accept && (
          <p className="errorMessage">This Field is required</p>
        )}
        <label htmlFor="image">Image of Product</label>
        <input
          type="url"
          id="image"
          placeholder="Paste the URL of the Product Image Here"
          value={images}
          onChange={(e) => setImages([e.target.value])}
        />
        {images === "" && accept && (
          <p className="errorMessage">This Field is required</p>
        )}
        <div className="doubleInput">
          <div>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              placeholder="Enter Category of Product"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {category === "" && accept && (
              <p className="errorMessage">This Field is required</p>
            )}
          </div>
          <div>
            <label htmlFor="Area">Area</label>
            <input
              type="number"
              id="Area"
              placeholder="Enter Area"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
            />
            {area === "" && accept && (
              <p className="errorMessage">This Field is required</p>
            )}
          </div>
        </div>
        <div className="doubleInput">
          <div>
            <label htmlFor="Bathroom">number of Bathroom</label>
            <input
              type="number"
              id="Bathroom"
              value={bathroom}
              onChange={(e) => setBathroom(Number(e.target.value))}
            />
            {bathroom <= 0 && accept && (
              <p className="errorMessage">Bathroom must be greater than 0</p>
            )}
          </div>
          <div>
            <label htmlFor="Bedroom">number of Bedroom</label>
            <input
              type="number"
              id="Bedroom"
              value={bedroom}
              onChange={(e) => setBedroom(Number(e.target.value))}
            />
            {bedroom <= 0 && accept && (
              <p className="errorMessage">Bedroom must be greater than 0</p>
            )}
          </div>
        </div>
        <div className="doubleInput">
          <div>
            <label htmlFor="price">Price of Product</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            {price <= 0 && accept && (
              <p className="errorMessage">Price must be greater than 0</p>
            )}
          </div>
          <div>
            <label htmlFor="quantity">Quantity of Product</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            {quantity <= 0 && accept && (
              <p className="errorMessage">Quantity must be greater than 0</p>
            )}
          </div>
        </div>
        <button className={"btn-17"} onClick={submit}>
          <span className={"text-container"}>
            <span className={"text"}>Add New</span>
          </span>
        </button>
      </form>
    </div>
  );
}
