import { Link } from 'react-router-dom'
import useApiData from '../../hooks/useApiData'
import ProductItem from './ProductItem'

const singleProductsObj = {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}


function ProductList() {

  // 'https://dummyjson.com/products'

const [respObj, setRespObj, isLoading, errorHappened] = useApiData('https://dummyjson.com/products')

if (errorHappened.status === 404) {
  // set error
}
const mainProductsArr = respObj.products || []

if(isLoading) return <h2>Is loading...</h2>

  return (
    <div>
      <ul className='grid grid-cols-3 gap-3 mt-8'>
        {mainProductsArr.map((pObj) => <ProductItem key={pObj.id} item={pObj}/> )}
      </ul>
    </div>
  )
}

export default ProductList
