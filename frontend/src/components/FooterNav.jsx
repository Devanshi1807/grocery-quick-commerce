import { Link } from "react-router-dom";

function FooterNav() {

  return (
    <div className="footer-nav">

      <Link to="/" className="footer-item">Home</Link>
      <Link to="/orders" className="footer-item">My Orders</Link>
      <Link to="/profile" className="footer-item">Profile</Link>
      <Link to="/cart" className="footer-item">Cart</Link>

    </div>
  );
}

export default FooterNav;