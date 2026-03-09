import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password
        }
      );

      // Save user info
      localStorage.setItem("userInfo", JSON.stringify(res.data));

      alert("Login successful");

      // Redirect based on role
      if (res.data.role === "admin") {
        navigate("/admin");
      } 
      else if (res.data.role === "shopkeeper") {
        navigate("/shop");
      } 
      else {
        navigate("/"); // normal user
      }

    } catch (error) {

      alert(error.response?.data?.message || "Login failed");
      console.log(error);

    }
  };

  return (

    <div className="container">

      <h2 className="page-title">Login</h2>

      <div className="card">

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p style={{marginTop:"10px"}}>
          Don't have an account?
          <Link to="/register"> Sign Up</Link>
        </p>

      </div>

    </div>

  );
}

export default Login;