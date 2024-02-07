import AddProduct from "./components/products/AddProduct";

export default function App() {
  console.log('App susikure');
  return (
    <div className=''>
      <div className="container">
      <h1 className='text-3xl font-bold underline'>Formik!</h1>
      </div>
      <hr />
      <AddProduct />
      
      
      
    </div>
  );
}
