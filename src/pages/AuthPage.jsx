import React from 'react'
import Login from '../components/auth/Login'

export default function AuthPage({onLogin}) {
  return (
    <div className='container'>
      <Login onLogin={onLogin}/>
    </div>
  )
}
