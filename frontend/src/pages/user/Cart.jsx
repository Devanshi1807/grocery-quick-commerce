import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

function Cart() {

  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container">

      {/* Page Header */}
      <PageHeader title="My Cart" />

      <h2 className="page-title">My Cart</h2>

      {cart.length === 0 && (
        <div className="card">
          <p>Your cart is empty 🛒</p>
        </div>
      )}

      {cart.map((item, index) => (
        <div key={index} className="card">

          <h4>{item.product.name}</h4>
<p>₹{item.product.price}</p>

          <div className="qty-control">
            <button 
              className="qty-btn"
              onClick={() => decreaseQty(item.name)}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button 
              className="qty-btn"
              onClick={() => increaseQty(item.name)}
            >
              +
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeItem(item.product._id)}
          >
            Remove
          </button>

        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="total-box">
            Total: ₹{total}
          </div>

          <Link to="/checkout">
            <button className="primary-btn" style={{ marginTop: "15px" }}>
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}

    </div>
  );
}

export default Cart;