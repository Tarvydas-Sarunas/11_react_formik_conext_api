import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import AddProduct from "./components/products/AddProduct";
import ProductList from "./components/products/ProductList";
import Header from "./components/layout/Header";

export default function App() {
  console.log('App susikure');
  return (
    <div className=''>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
        
    </div>
  );
}
