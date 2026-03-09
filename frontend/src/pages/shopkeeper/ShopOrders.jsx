import React from "react";

const ShopOrders = () => {
  return (
    <div className="dashboard-container">
      <h1 className="page-title">🧾 Shop Orders</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#2001</td>
            <td>Amit</td>
            <td>₹350</td>
            <td className="order-status">Preparing</td>
          </tr>

          <tr>
            <td>#2002</td>
            <td>Rahul</td>
            <td>₹220</td>
            <td className="order-status">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShopOrders;