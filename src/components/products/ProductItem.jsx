import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../ui/Btn'
import AuthContext from '../../store/AuthContext'

export default function ProductItem({item: pObj}) {

  // noriu pasiimti contexta
  const ctx = useContext(AuthContext)

  return (
    <li key={pObj.id} className='border'>
          <img src={pObj.thumbnail} alt={pObj.title} className='block h-56 w-full object-cover'/>
          <div className="info p-4">
          <h3 className='text-xl'>{pObj.title}</h3>
          <p>Price: {pObj.price.toFixed(2)} €</p>
          <Link className='text-lg border px-6 py-2 border-slate-600 rounded-md hover:bg-green-600 hover:text-white transition-colors mt-6 place-self-start inline-block' to={`/products/${pObj.id} `}>Read more</Link>
          
          {ctx.isUserLoggedIn && <Btn onClick={ctx.logout}>Logout</Btn>}
          </div>
          </li>)
}
