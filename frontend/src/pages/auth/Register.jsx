import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password
        }
      );

      alert("Account created successfully ✅");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message || "Registration failed"
      );

    }

  };

  return (

    <div className="container">

      <h2>Create Account</h2>

      <input
        type="text"
        placeholder="Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        onClick={handleRegister}
      >
        Sign Up
      </button>

      <p style={{marginTop:"10px"}}>
        Already have an account?  
        <Link to="/login"> Login</Link>
      </p>

    </div>
  );
}

export default Register;