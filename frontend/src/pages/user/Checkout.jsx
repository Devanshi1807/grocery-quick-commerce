import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

function Checkout() {

  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [payment, setPayment] = useState("COD");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch cart from backend
  const fetchCart = async () => {

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (data && data.items) {
        setCart(data.items);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Place Order
  const handleOrder = async () => {

    if (cart.length === 0) {
      alert("Your cart is empty 🛒");
      return;
    }

    if (!address || !timeSlot) {
      alert("Please fill all details");
      return;
    }

    try {

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          shippingAddress: address,
          timeSlot: timeSlot,
          paymentMethod: payment
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order Placed Successfully 🎉");
        navigate("/orders");
      } else {
        alert(data.message || "Order failed");
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="container">

      <PageHeader title="Checkout" />

      <h2 className="page-title">Checkout</h2>

      {cart.length === 0 ? (
        <div className="card">
          <p>Your cart is empty 🛒</p>
        </div>
      ) : (

        <div className="checkout-grid">

          {/* ORDER SUMMARY */}
          <div className="card">

            <h3 style={{ marginBottom: "10px" }}>Order Summary</h3>

            {cart.map((item) => (
              <p key={item.product._id}>
                {item.product.name} × {item.quantity}
                <span style={{ float: "right" }}>
                  ₹{item.product.price * item.quantity}
                </span>
              </p>
            ))}

            <div className="total-box">
              Total: ₹{total}
            </div>

          </div>

          {/* DELIVERY DETAILS */}
          <div>

            <div className="card">
              <label>Delivery Address</label>

              <textarea
                className="textarea"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows="3"
              />

            </div>

            <div className="card">

              <label>Select Time Slot</label>

              <select
                className="select"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
              >

                <option value="">Select</option>
                <option value="10am-12pm">10am - 12pm</option>
                <option value="12pm-2pm">12pm - 2pm</option>
                <option value="4pm-6pm">4pm - 6pm</option>

              </select>

            </div>

            <div className="card">

              <label>Payment Method</label>

              <select
                className="select"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >

                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>

              </select>

            </div>

            <button
              className="primary-btn"
              onClick={handleOrder}
              style={{ marginTop: "10px" }}
            >
              Place Order
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Checkout;