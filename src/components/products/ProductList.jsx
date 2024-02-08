import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Btn from '../ui/Btn'
import { Link } from 'react-router-dom'

const singleProductsObj = {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}

function ProductList() {

  // 'https://dummyjson.com/products'

const [mainProductsArr, setMainProductsArr] = useState([])
useEffect(() => {
  axios.get('https://dummyjson.com/products')
  .then((resp) => {
  const prodArr = resp.data.products
  setMainProductsArr(prodArr)
  })
  .catch(error => {
  console.warn('ivyko klaida:', error);
  })
}, [])


  return (
    <div>
      <ul className='grid grid-cols-3 gap-3 mt-8'>
        {mainProductsArr.map((pObj) => <li key={pObj.id} className='border'>
          <img src={pObj.thumbnail} alt={pObj.title} className='block h-56 w-full object-cover'/>
          <div className="info p-4">
          <h3 className='text-xl'>{pObj.title}</h3>
          <p>Price: {pObj.price.toFixed(2)} €</p>
          <Link className='text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-green-600 hover:text-white transition-colors mt-6 place-self-start inline-block' to={`/products/${pObj.id} `}>Read more</Link>
          </div>
          </li>)}
        
      </ul>
    </div>
  )
}

export default ProductList
