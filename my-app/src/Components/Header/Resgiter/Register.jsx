import './register.css'
import RegisterIcon from  '../../../assets/icon-register.svg'

export default function Register(props) {
    return (
        <li className="only-pc" 
            id="register" 
            // onClick={props.handleLogin}
        > 
            <a href="#" className="button gray">
                <img src={RegisterIcon} alt="등록" />
                <span>Register</span>
            </a>
        </li>
    )
}
