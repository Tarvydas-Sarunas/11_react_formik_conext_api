import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
      <ul>
        {mainProductsArr.map((pObj) => <li key={pObj.id}>{pObj.title}</li>)}
        
      </ul>
    </div>
  )
}

export default ProductList
