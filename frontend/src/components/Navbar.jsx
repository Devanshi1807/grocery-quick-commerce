import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart = [] } = useContext(CartContext); // default value

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h3 style={{ fontWeight: "600" }}>
          Vikas General Store
        </h3>
      </Link>

      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          position: "relative",
          fontSize: "18px"
        }}
      >
        🛒

        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-12px",
              background: "white",
              color: "#2563eb",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
              fontWeight: "600"
            }}
          >
            {totalItems}
          </span>
        )}
      </Link>

    </div>
  );
}

export default Navbar;