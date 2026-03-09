import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import CategorySection from "../../components/CategorySection";
import ProductSection from "../../components/ProductSection";
import FooterNav from "../../components/FooterNav";
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    // Redirect to login if token not found
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProducts = async () => {

      try {

        const res = await axios.get("http://localhost:5000/api/products");

        setProducts(res.data.products);

      } catch (error) {

        console.log("Error fetching products:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, [navigate]);

  return (
    <div style={{ background: "#fafafa", paddingBottom: "60px" }}>

      {/* Top Blue Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #2563eb, #3b82f6)",
          color: "white",
          padding: "30px 20px",
          borderRadius: "0 0 25px 25px",
          marginBottom: "20px"
        }}
      >
        <h2 style={{ fontWeight: "600" }}>
          Vikas General Store 🛒
        </h2>

        <p style={{ marginTop: "5px", fontSize: "14px" }}>
          Groceries delivered fast to your doorstep
        </p>
      </div>

      <div className="container">

        <SearchBar />

        <div style={{ marginTop: "25px" }}>
          <CategorySection />
        </div>

        <div style={{ marginTop: "30px" }}>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <ProductSection products={products} />
          )}

        </div>

      </div>

      <FooterNav />

    </div>
  );
}

export default Home;