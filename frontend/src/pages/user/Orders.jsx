import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import PageHeader from "../../components/PageHeader";

function Orders() {

  const { orders } = useContext(CartContext);

  return (
    <div className="container">

      <PageHeader title="My Orders" />

      <h2 className="page-title">My Orders</h2>

      {orders.length === 0 ? (
        <div className="card">
          <p>No orders yet 📦</p>
        </div>
      ) : (

        orders.map((order) => (
          <div
            key={order.id}
            className="card"
            style={{ marginBottom: "20px" }}
          >

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Order ID: {order.id}</h4>
              <span className="order-status">{order.status}</span>
            </div>

            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Time Slot:</strong> {order.timeSlot}</p>
            <p><strong>Payment:</strong> {order.payment}</p>

            <h4 style={{ marginTop: "10px" }}>Items:</h4>

            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} × {item.quantity}
                <span style={{ float: "right" }}>
                  ₹{item.price * item.quantity}
                </span>
              </p>
            ))}

            <div className="total-box">
              Total: ₹{order.total}
            </div>

          </div>
        ))

      )}

    </div>
  );
}

export default Orders;