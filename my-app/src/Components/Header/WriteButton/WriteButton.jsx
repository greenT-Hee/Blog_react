import writeBtn from '../../../assets/icon-modify-white.svg'
import "./writeButton.css"
import { useState } from 'react';

export default function WriteButton(props) {
  return (
    <li id='writeBtn'>
        <a className='button'  href="#">
            <img src={writeBtn} alt="" />
            <span>Write</span>
        </a>
    </li>
  )
}
