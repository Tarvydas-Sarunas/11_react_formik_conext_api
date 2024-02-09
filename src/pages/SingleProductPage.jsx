import React from 'react'
import { useParams } from 'react-router-dom'
import useApiData from '../hooks/useApiData';

const singleProductsObj = {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}


export default function SingleProductPage() {
// pasiimti id currentPost

const {prodId} = useParams()
console.log('prodId ===', prodId);

// parsisiusti duomenis ir iskonsolinti sio producto informacija su useApiData
const [respObj, setRespObj] = useApiData(`https://dummyjson.com/products/${prodId}`)
console.log('respObj ===', respObj);
  return (
    <div className='container'>
      
      <h1 className='text-3xl mb-5'>{respObj.title}</h1>
      <img src={respObj.thumbnail} alt={respObj.title} />
      <p>Brand: {respObj.brand}</p>
      <p>Description: {respObj.description}</p>
      <p>Category: {respObj.category}</p>
      <p>Rating: {respObj.rating}</p>
      <p>Price: {respObj.price} €</p>
      
    </div>
  )
}
