import './postArticle.css'
import Contents from './Contents/Contents'
import Author from './Author/Author'
import Title from './Title/Title'
import Category from './Category/Category'
import { Link } from 'react-router-dom'

export default function PostArticle() {
  return (
    <div className='view'>
        <div className='max-width'>
            <section className='wrap-box'>
                <div className='inner'>
                    <Author />
                    <Category />                    
                    <Title />
                    <Contents />
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
                </div>
            </section>
        </div>
    </div>
  )
}
