import React, { useState } from "react";


const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className="dashboard-container">
      <h1>➕ Add Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          onChange={handleChange}
          required
        />

        <button type="submit">Add Product</button>

      </form>
    </div>
  );
};

export default AddProduct;