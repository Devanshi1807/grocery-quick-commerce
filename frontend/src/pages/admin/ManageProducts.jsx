import React from "react";


const ManageProducts = () => {
  return (
    <div className="dashboard-container">
      <h1>📦 Manage Products</h1>

      <button className="add-btn">Add New Product</button>

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
          <tr>
            <td>Milk</td>
            <td>₹50</td>
            <td>120</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Bread</td>
            <td>₹40</td>
            <td>80</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;