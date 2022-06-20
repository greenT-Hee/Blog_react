import './postArticle.css'
import Contents from './Contents/Contents'

export default function PostArticle() {
  return (
    <div className='View'>
        <div className='max-width'>
            <section className='wrap-box'>
                <div className='inner'>
                    {/* author */}
                    <dl className='author-wrap'>
                        <dt className='a11y-hidden'>Author</dt>
                        <dd className='author'>
                            <img src="" alt="프로필사진" />
                            chilli
                        </dd>
                        <dt className='a11y-hidden'></dt>
                        <dd className='created'>2022.05.25</dd>
                    </dl>

                    {/* category */}
                    <dl className='category'>
                        <dt className='a11y-hidden'>Category</dt>
                        <dd>Life</dd>
                        <dd>Style</dd>
                    </dl>

                    <div className='title-wrap'>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <button className='btn-like'>Like</button>
                    </div>
                    <hr />
                    
                    <Contents />

                    <div className='btn-group'>
                        <a href="#" className='btn-modify'>
                            <span className='a11y-hidden'>modify</span>
                        </a>
                        <button className='btn-delete'>
                            <span className='a11y-hidden'>delete</span>
                        </button>
                    </div>
                    <a href="./" className='btn-back'>
                        <span className='a11y-hidden'>back</span>
                    </a>
                </div>
            </section>
        </div>
    </div>
  )
}
