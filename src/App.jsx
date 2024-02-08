import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import AddProduct from "./components/products/AddProduct";
import ProductList from "./components/products/ProductList";
import Header from "./components/layout/Header";
import { useState } from "react";

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
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
        
    </div>
  );
}
