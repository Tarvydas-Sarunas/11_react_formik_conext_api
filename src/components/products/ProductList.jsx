import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductList() {

  // 'https://dummyjson.com/products'

const [mainProductsArr, setmainProductsArr] = useState([])

useEffect(() => {
  axios.get('https://dummyjson.com/products')
  .then((resp) => {
    console.log('resp ===', resp)})
  .catch(error => {
  console.warn('ivyko klaida:', error);
  })
}, [])


  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default ProductList
