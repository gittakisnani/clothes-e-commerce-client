import Content from "./components/Content";
import ProductPage from "./components/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from "./components/Layout";
import HeaderLayout from "./components/HeaderLayout";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetCode from "./pages/ResetCode";
import NewPassword from "./pages/ReCreatePassword";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<LoginPage />} /> 
        <Route path="register" element={<RegistrationPage />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetcode" element={<ResetCode />} />
        <Route path="newpassword" element={<NewPassword />} />
        <Route path="settings" element={<Settings />} />
        <Route element={<HeaderLayout />}>
          <Route index element={<Content />} />
          <Route path="product/:id" element={<ProductPage back />} />
          <Route path="product/new" element={<AddProductPage />} />
          <Route path="product/edit" element={<EditProductPage />} />
        </Route>
      </Route>
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
  </Routes>
  );
}

export default App;
