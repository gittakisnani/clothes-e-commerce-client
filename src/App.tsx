import Content from "./components/Content";
import ProductPage from "./components/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Layout from "./components/Layout";
import HeaderLayout from "./components/HeaderLayout";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetCode from "./pages/ResetCode";
import NewPassword from "./pages/ReCreatePassword";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import { useState } from 'react'
import Modal from "./components/Modal";
import ProductModel from "./components/ProductModel";
import WishList from "./pages/WishList";
import MyCart from "./pages/MyCart";

export interface ModalState {
  icon: React.ReactElement | null
  text: string
  iconColor: 'text-green-500' | 'text-red-500' | Omit<string, 'text-green-500' | 'text-red-500'>
}

export interface Props {
  setModal: (value: boolean) => void
  setModalInfo: (value: ModalState) => void
}


function App() {
  const [modal, setModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const [modalInfo, setModalInfo] = useState<ModalState>({
    icon: null,
    text: '',
    iconColor: ''
  })

  return (
    <>
    {modal && <Modal setModal={setModal}>
        <div className='p-4 flex gap-2 text-xl items-center '>
          <span className={modalInfo.iconColor as string }>{modalInfo.icon}</span>
          {modalInfo.text}
        </div>
    </Modal>}

    {searchParams.has('product') && <ProductModel />}

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<LoginPage setModal={setModal} setModalInfo={setModalInfo} />} /> 
        <Route path="register" element={<RegistrationPage setModal={setModal} setModalInfo={setModalInfo} />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="resetcode" element={<ResetCode />} />
        <Route path="newpassword" element={<NewPassword />} />
        <Route path="settings" element={<Settings setModal={setModal} setModalInfo={setModalInfo} />} />
        <Route element={<HeaderLayout setModal={setModal} setModalInfo={setModalInfo} />}>
          <Route index element={<Content />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='mycart' element={<MyCart />} />
          <Route path="product/:id" element={<ProductPage back />} />
          <Route path="product/new" element={<AddProductPage setModal={setModal} setModalInfo={setModalInfo}  />} />
          <Route path="product/edit/:id" element={<EditProductPage setModal={setModal} setModalInfo={setModalInfo} />} />
        </Route>
      </Route>
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
  </Routes>
  </>
  );
}

export default App;
