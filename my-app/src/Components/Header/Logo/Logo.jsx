import LogoImg from '../../../assets/Logo.svg'
import "./logo.css"


export default function Logo() {
  return (
    <h1>
        <a href="#">
            <img src={LogoImg} alt="myLogo" />
        </a>  
    </h1>
)
}
