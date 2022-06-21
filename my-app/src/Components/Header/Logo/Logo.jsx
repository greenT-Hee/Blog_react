import LogoImg from '../../../assets/Logo.svg'
import "./logo.css"
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <h1>
        <Link to = "/">
            <img src={LogoImg} alt="myLogo" />
        </Link>  
    </h1>
)
}
