import writeBtn from '../../../assets/icon-modify-white.svg'
import "./writeButton.css"

export default function WriteButton() {
  return (
    <li id='writeBtn'>
        <a className='button'  href="#">
            <img src={writeBtn} alt="" />
            <span>Write</span>
        </a>
    </li>
  )
}
