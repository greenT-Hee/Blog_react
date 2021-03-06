import React from 'react'
import './logout.css'
import logoutImg from '../../../assets/icon-logout.svg'

function Logout(props) {
  return (
    <li id="logout" onClick={props.handleLogin}>
      <button className='button white'>
        <img src={logoutImg} alt="로그아웃이미지" />
        <span>Logout</span></button>
    </li>
  )
}

export default Logout