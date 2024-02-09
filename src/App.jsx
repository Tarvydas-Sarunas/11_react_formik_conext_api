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
import SingleProductPage from "./pages/SingleProductPage";
import AuthContext from "./store/AuthContext";

export default function App() {
  console.log('App susikure');

  const tokenFromStorage = localStorage.getItem('userToken')
  const [token, setToken] = useState(tokenFromStorage || '')
  const [email, setEmail] = useState('')

const isUserLoggedIn = Boolean(token)

function handleLogin(gotToken, gotEmail) {
  setToken(gotToken)
  localStorage.setItem('userToken', gotToken);
  setEmail(gotEmail)
  localStorage.setItem('userEmail', gotEmail);
}

function handleLogout() {
  setToken('')
  localStorage.removeItem('userToken');
  localStorage.removeItem('userEmail');
}

const ctxValue = {
  isUserLoggedIn: isUserLoggedIn,
  logout: handleLogout,
}

  return (
    <AuthContext.Provider value={ctxValue}>
    <div className=''>
      <Header isUserLoggedIn={isUserLoggedIn}  onLogout={handleLogout} onEmail={email} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/login" element={ !isUserLoggedIn ? <AuthPage onLogin={handleLogin}/> : <Navigate to={'/products'} />  } />
        <Route path="/products" element={<ProductPage />} />
        {/* protected routes */}
        <Route path="/products/add" element={ isUserLoggedIn ? <AddProductPage /> : <Navigate to={'/unauthorized'} />} />
        <Route path="/products/:prodId" element={<SingleProductPage />} />
        <Route path="/unauthorized" element={<UnAuthorizedPage />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}
