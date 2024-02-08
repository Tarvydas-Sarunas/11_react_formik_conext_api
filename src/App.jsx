import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import AddProduct from "./components/products/AddProduct";
import ProductList from "./components/products/ProductList";
import Header from "./components/layout/Header";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";

export default function App() {
  console.log('App susikure');

  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')

const isUserLoggedIn = Boolean(token)

function handleLogin(gotToken) {
  setToken(gotToken)
}

  return (
    <div className=''>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/login" element={ !isUserLoggedIn ? <AuthPage onLogin={handleLogin}/> : <Navigate to={'/products'} />  } />
        <Route path="/products" element={<ProductPage />} />
        {/* protected routes */}
        <Route path="/products/add" element={ isUserLoggedIn ? <AddProductPage /> : <Navigate to={'/unauthorized'} />} />
        <Route path="/unauthorized" element={<UnAuthorizedPage />} />
      </Routes>
        
    </div>
  );
}
