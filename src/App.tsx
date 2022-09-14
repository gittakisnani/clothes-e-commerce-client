import { useEffect, useState } from "react";
import Content from "./components/Content";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import ProductPage from "./components/ProductPage";
import useWindowSize from "./hooks/useWindowSize";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import HeaderLayout from "./components/HeaderLayout";
import AddProductPage from "./pages/AddProductPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<LoginPage />} /> 
        <Route path="register" element={<RegistrationPage />} />
        <Route path="" element={<HeaderLayout />}>
          <Route index element={<Content />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="product/new" element={<AddProductPage />} />
        </Route>
      </Route>
  </Routes>
  );
}

export default App;
