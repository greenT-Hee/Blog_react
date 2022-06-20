import Profile from './Profile/Profile'
import Logo from './Logo/Logo'
import WriteButton from './WriteButton/WriteButton'
import Logout from './Logout/Logout'
import Login from './Login/Login'
import './header.css'
import Register from './Resgiter/Register'
import { useState } from 'react'



export default function Header() {
  return (
    <header>
      <div className='max-width'>
      <Logo />
      <ul>
          <Profile/>
          {/* <WriteButton/>
          <Logout/> */}
          <Login/>
          <Register />
      </ul>
      </div>
    </header>
  )
}
