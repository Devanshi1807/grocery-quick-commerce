import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  // ==============================
  // GET CART FROM BACKEND
  // ==============================
  const fetchCart = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/cart",
        config
      );

      setCart(res.data.items);

    } catch (error) {
      console.log("Cart fetch error", error);
    }
  };

  useEffect(() => {
    if (token) fetchCart();
  }, []);

  // ==============================
  // ADD TO CART
  // ==============================
  const addToCart = async (product) => {

    try {

      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          productId: product.id,
          quantity: 1
        },
        config
      );

      fetchCart();

    } catch (error) {
      console.log("Add to cart error", error);
    }
  };

  // ==============================
  // REMOVE ITEM
  // ==============================
  const removeItem = async (productId) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/cart/remove/${productId}`,
        config
      );

      fetchCart();

    } catch (error) {
      console.log("Remove error", error);
    }
  };

  // ==============================
  // PLACE ORDER
  // ==============================
  const placeOrder = async (orderData) => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/orders",
        orderData,
        config
      );

      setOrders([...orders, res.data]);

      setCart([]);

    } catch (error) {
      console.log("Order error", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        placeOrder,
        orders
      }}
    >
      {children}
    </CartContext.Provider>
  );
}