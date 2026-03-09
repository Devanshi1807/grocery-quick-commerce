import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductSection() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products)) // ✅ FIX HERE
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  return (

    <div style={{ padding: "15px" }}>

      <h3>Popular Products</h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px"
        }}
      >

        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}

      </div>

    </div>

  );
}

export default ProductSection;