import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ id, name, price }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div style={{
      border:"1px solid #eee",
      padding:"10px",
      borderRadius:"10px",
      width:"160px"
    }}>

      <h4>{name}</h4>
      <p>₹{price}</p>

      <button
        onClick={() => addToCart({ id, name, price })}
        style={{
          background:"#16a34a",
          color:"white",
          border:"none",
          padding:"6px 12px",
          borderRadius:"6px",
          width:"100%"
        }}
      >
        Add
      </button>

    </div>

  );
}

export default ProductCard;