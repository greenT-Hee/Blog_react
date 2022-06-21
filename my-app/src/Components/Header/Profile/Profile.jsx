import Headshot from '../../../assets/profile.jpg'
import './profile.css'


export default function Profile() {
  return (
    <li className='profile-img'>
        <a href='#'>
          <img src={Headshot} alt='Headshot'/>
        </a>
      </li>
  )
}
