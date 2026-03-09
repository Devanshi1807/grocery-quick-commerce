import React from "react";


const ManageOrders = () => {
  return (
    <div className="dashboard-container">
      <h1>🧾 Manage Orders</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#1001</td>
            <td>Rahul</td>
            <td>₹450</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>#1002</td>
            <td>Amit</td>
            <td>₹230</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;