import React from "react";
import { Link } from "react-router-dom";


const ShopDashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🏪 Shopkeeper Dashboard</h1>
        <p>Welcome {user?.name || "Shopkeeper"}! Manage your grocery store.</p>
      </div>

      <div className="dashboard-cards">

        <Link to="/shop/add-product" className="dashboard-card">
          <h2>➕ Add Product</h2>
          <p>Add new grocery items</p>
        </Link>

        <Link to="/shop/my-products" className="dashboard-card">
          <h2>📦 My Products</h2>
          <p>View and manage inventory</p>
        </Link>

        <Link to="/shop/orders" className="dashboard-card">
          <h2>🧾 Shop Orders</h2>
          <p>View customer orders</p>
        </Link>

      </div>
    </div>
  );
};

export default ShopDashboard;