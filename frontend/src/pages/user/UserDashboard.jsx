import React from "react";
import { Link } from "react-router-dom";


const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>Welcome {user?.name || "User"} 👋</h1>
        <p>Your grocery shopping dashboard</p>
      </div>

      <div className="dashboard-cards">

        <Link to="/" className="dashboard-card">
          <h2>🏪 Shop Groceries</h2>
          <p>Browse fresh products</p>
        </Link>

        <Link to="/cart" className="dashboard-card">
          <h2>🛒 Cart</h2>
          <p>View items in your cart</p>
        </Link>

        <Link to="/orders" className="dashboard-card">
          <h2>📦 My Orders</h2>
          <p>Track your orders</p>
        </Link>

        <Link to="/checkout" className="dashboard-card">
          <h2>💳 Checkout</h2>
          <p>Complete your purchase</p>
        </Link>

      </div>

    </div>
  );
};

export default UserDashboard;