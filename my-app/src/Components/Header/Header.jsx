import Profile from './Profile/Profile'
import Logo from './Logo/Logo'
import WriteButton from './WriteButton/WriteButton'
import Register from './Resgiter/Register'
import Logout from './Logout/Logout'
import Login from './Login/Login'
import './header.css'
import { useState } from 'react'



export default function Header(props) {
  return (
    <header>
      <div className='max-width'>
      <Logo />
      <ul>
        {props.isLogin ? 
            (
              <>
                <Profile/>
                <WriteButton/>
                <Logout handleLogin={props.handleLogin}/>
              </>
            )
            :
            (
              <>
                <WriteButton />
                <Login handleLogin={props.handleLogin}/>
                <Register/>
              </>
              )
          }
      </ul>
      </div>
    </header>
  )
}