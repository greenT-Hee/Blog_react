import './login.css'
import LoginIcon from  '../../../assets/icon-login.svg'
import { useState } from 'react'
import WriteButton from '../WriteButton/WriteButton'


export default function Login(props) {
    return (
        <li id="login" onClick={props.handleLogin}>
            <a href="#" className="button gray">
                <img src={LoginIcon} alt="로그인" />
                <span>Login</span>
            </a>
        </li> 
    )
}
