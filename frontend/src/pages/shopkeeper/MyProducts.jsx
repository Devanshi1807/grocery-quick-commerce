import React, { useState } from "react";

const MyProducts = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Tomatoes", price: "₹30/kg", stock: 100 },
    { id: 2, name: "Potatoes", price: "₹25/kg", stock: 150 }
  ]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="dashboard-container">
      <h1 className="page-title">📦 My Products</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {products.length === 0 && (
        <p style={{ marginTop: "20px" }}>No products available.</p>
      )}
    </div>
  );
};

export default MyProducts;