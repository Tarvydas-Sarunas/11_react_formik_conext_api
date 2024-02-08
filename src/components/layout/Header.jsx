import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({isUserLoggedIn}) {
  return (

    <header className='bg-slate-300'>
      <div className="container flex justify-between items-center">
      <Link to={'/'}>
        <h2 className='text-3xl p-3 leading-none'>Logo</h2>
      </Link>
      <nav>
        {isUserLoggedIn && <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products/add'}>Add Products</NavLink>}
        <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products'}>Products</NavLink>
        {!isUserLoggedIn && <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/login'}>Login</NavLink>}
        {isUserLoggedIn && <button className='text-lg p-3 hover:bg-slate-700 hover:text-white'>Logout</button>}
      </nav>
      </div>
    </header>
  )
}
