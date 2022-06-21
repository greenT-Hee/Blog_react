import { Link } from 'react'
import './buttons.css'

export default function Buttons() {
    return (
        <>
            <div className='btn-group'>
                <a href="#" className='btn-modify'>
                    <span className='a11y-hidden'>modify</span>
                </a>
                <button className='btn-delete'>
                    <span className='a11y-hidden'>delete</span>
                </button>
            </div>
            <Link to ="/" className='btn-back'>
                <span className='a11y-hidden'>back</span>
            </Link>
        </>
    )
}
