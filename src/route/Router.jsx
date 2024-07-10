import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/front/Home";
import Register from "../pages/front/Register";
import Login from "../pages/front/Login";
import Cart from "../pages/front/Cart";
import Checkout from "../pages/front/Checkout";
import ProductDetails from "../pages/front/ProductDetails";
import Auth from "../pages/admin/Auth";
import DashBoard from "../pages/admin/dashboard/DashBoard";
import ProfileEdit from "../pages/admin/dashboard/ProfileEdit";
import Order from "../pages/admin/order/Order";
import OrderView from "../pages/admin/order/OrderView";
import Category from "../pages/admin/category/Category";
import AddCategory from "../pages/admin/category/AddCategory";
import EditCategory from "../pages/admin/category/EditCategory";
import Product from "../pages/admin/product/Product";
import AddProduct from "../pages/admin/product/AddProduct";
import EditProduct from "../pages/admin/product/EditProduct";
import User from "../pages/admin/users/User";
import AddUser from "../pages/admin/users/AddUser";
import EditUser from "../pages/admin/users/EditUser";
const Router = () => {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Register Page */}
        <Route path="/register" element={<Register />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        {/* Cart  Page */}
        <Route path="/cart" element={<Cart />} />
        {/* Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />
        {/* ProductDetails  Page */}
        <Route path="/product-details" element={<ProductDetails />} />
        {/* Admin Routes */}
        <Route path="/admin" element={<Auth />}>
          {/* Dashboard */}
          {/* Dashboard Page */}
          <Route path="" element={<DashBoard />} />
          {/* Profile Edit */}
          <Route path="profile-edit" element={<ProfileEdit />} />
          {/* Order Page */}
          {/* Order  */}
          <Route path="order" element={<Order />} />
          {/* Order View */}
          <Route path="order/view" element={<OrderView />} />
          {/* Category */}
          {/* Category Pages */}
          <Route path="category" element={<Category />} />
          {/* Category Add */}
          <Route path="category/add" element={<AddCategory />} />
          {/* Category Edit */}
          <Route path="category/edit" element={<EditCategory />} />
          {/* Products */}
          {/* Product Page */}
          <Route path="product" element={<Product />} />
          {/* Add Product Page */}
          <Route path="product/add" element={<AddProduct />} />
          {/* Edit Product Page */}
          <Route path="product/edit" element={<EditProduct />} />
          {/* User */}
          {/* User Page */}
          <Route path="user" element={<User />} />
          {/* AddUser Page */}
          <Route path="user/add" element={<AddUser />} />
          {/* EditUser Page */}
          <Route path="user/edit" element={<EditUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
