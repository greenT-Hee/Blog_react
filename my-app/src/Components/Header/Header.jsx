import Profile from './Profile/Profile'
import Logo from './Logo/Logo'
import WriteButton from './WriteButton/WriteButton'
import Logout from './Logout/Logout'
import './header.css'


export default function Header() {
  return (
    <header>
      <div className='max-width'>
      <Logo />
      <ul>
          <Profile/>
          <WriteButton/>
          <Logout/>
      </ul>
      </div>
    </header>
  )
}
