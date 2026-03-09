import React from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>Admin Dashboard 🛠</h1>
        <p>Welcome {user?.name || "Admin"}! Manage the platform here.</p>
      </div>

      <div className="dashboard-cards">

        <Link to="/admin/products" className="dashboard-card">
          <h2>📦 Manage Products</h2>
          <p>Add, edit, or remove products</p>
        </Link>

        <Link to="/admin/orders" className="dashboard-card">
          <h2>🧾 Manage Orders</h2>
          <p>View and update order status</p>
        </Link>

        <Link to="/admin/users" className="dashboard-card">
          <h2>👥 Manage Users</h2>
          <p>View registered customers</p>
        </Link>

        <Link to="/admin/shops" className="dashboard-card">
          <h2>🏪 Manage Shopkeepers</h2>
          <p>Approve and manage vendors</p>
        </Link>

      </div>

    </div>
  );
};

export default AdminDashboard;