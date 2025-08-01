import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/admin/Login";
import Signup from "./pages/admin/Signup";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffList from "./pages/admin/StaffList";
import CustomerData from "./pages/admin/CustomerData";
import FollowUp from "./pages/admin/FollowUp";
import ProductsPage from "./pages/admin/ProductsPage";
import AddProduct from "./pages/admin/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Promotion from "./pages/admin/Promotion";
import Category from "./pages/admin/Category";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  return (
    <div className="max-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="staff" element={<StaffList />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="customers" element={<CustomerData />} />
            <Route path="followup" element={<FollowUp />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="category" element={<Category />} />
          </Route>

          {/* Redirect to login by default */}
          <Route path="*" element={<Login />} />
        </Routes>
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;