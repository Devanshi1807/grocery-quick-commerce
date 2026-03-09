import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// User pages
import Home from "./pages/user/Home";
import Cart from "./pages/user/Cart";
import Checkout from "./pages/user/Checkout";
import Orders from "./pages/user/Orders";
import UserDashboard from "./pages/user/UserDashboard";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageOrders from "./pages/admin/ManageOrders";
import ManageUsers from "./pages/admin/ManageUsers";

// Shopkeeper pages
import ShopDashboard from "./pages/shopkeeper/ShopDashboard";
import AddProduct from "./pages/shopkeeper/AddProduct";
import MyProducts from "./pages/shopkeeper/MyProducts";
import ShopOrders from "./pages/shopkeeper/ShopOrders";


// PROTECTED ROUTE
const ProtectedRoute = ({ children, role }) => {

  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};


function Layout() {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* Admin */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute role="admin">
              <ManageProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute role="admin">
              <ManageOrders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        {/* Shopkeeper */}

        <Route
          path="/shop"
          element={
            <ProtectedRoute role="shopkeeper">
              <ShopDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shop/add-product"
          element={
            <ProtectedRoute role="shopkeeper">
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shop/my-products"
          element={
            <ProtectedRoute role="shopkeeper">
              <MyProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shop/orders"
          element={
            <ProtectedRoute role="shopkeeper">
              <ShopOrders />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;