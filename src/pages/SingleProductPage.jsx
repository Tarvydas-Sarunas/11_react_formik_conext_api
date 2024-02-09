
import { useParams } from 'react-router-dom'
import useApiData from '../hooks/useApiData';
import Btn from '../components/ui/Btn';
import { useState } from 'react';

const singleProductsObj = {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]}


export default function SingleProductPage() {
// pasiimti id currentPost

const {prodId} = useParams()
console.log('prodId ===', prodId);

const [expandedImage, setExpandedImage] = useState(null);

  function handleThumbnailClick(imageUrl) {
    setExpandedImage(imageUrl);
  }

// parsisiusti duomenis ir iskonsolinti sio producto informacija su useApiData
const [currentObj, setcurrentObj, isLoading, ] = useApiData(`https://dummyjson.com/products/${prodId}`)
console.log('currentObj ===', currentObj);

function handleAddToCart() {
  console.log('handleAddToCart');
}

  return (
    <div className='container mt-10'>
      
      {isLoading && <h2>Loading...</h2>} 
<div className='grid grid-cols-2 gap-8'>
  <div className='left'>
  <img src={expandedImage || currentObj.thumbnail} alt={currentObj.title} />
    <ul className='grid grid-cols-3 gap-2'>
      {currentObj.images?.map((imgUrl) => <li key={imgUrl} className='cursor-pointer hover:scale-105 transition duration-500 cursor-pointer' onClick={() => handleThumbnailClick(imgUrl)}>
        <img src={imgUrl} alt={imgUrl} />
      </li>
      )}
    </ul>
  </div>
  <div className="right">
    <h1 className='text-3xl mb-5'>{currentObj.title}</h1>
    <p>Brand: {currentObj.brand}</p>
      <p>Category: {currentObj.category}</p>
    <p>Description: {currentObj.description}</p>
      <p>Rating: {currentObj.rating}</p>
      <p>Price: {currentObj.price} €</p>
<input className='border w-16 h-11 rounded-l-md border-slate-600 text-xl' type="number" defaultValue={1} />
      <Btn onClick={handleAddToCart}  className='rounded-l-none'>Add to cart</Btn>
  </div>
</div>
  
    </div>
  )
}
