import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({isUserLoggedIn, onLogout, onEmail}) {
  return (

    <header className='bg-slate-300'>
      <div className="container flex justify-between items-center">
      <Link to={'/'}>
        <h2 className='text-3xl p-3 leading-none'>Logo</h2>
      </Link>
      <nav className='flex items-center'>
        <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/'}>Home</NavLink>
        <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products'}>Products</NavLink>
        {isUserLoggedIn && <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/products/add'}>Add Products</NavLink>}
        {!isUserLoggedIn && <NavLink className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/auth/login'}>Login</NavLink>}
        
        {isUserLoggedIn && (
        <>
        <Link to={'/auth/login'} onClick={onLogout} className='text-lg p-3 hover:bg-slate-700 hover:text-white'>Logout</Link>
        <p className='text-base hover:bg-slate-700 hover:text-white px-1 p-3'>{onEmail}</p>
        </>
        )}
      </nav>
      </div>
    </header>
  )
}
