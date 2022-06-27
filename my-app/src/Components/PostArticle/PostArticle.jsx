import './postArticle.css'
import Contents from './Contents/Contents'
import Author from './Author/Author'
import Title from './Title/Title'
import Category from '../Category/Category'
import Buttons from './Buttons/Buttons'
// import { useEffect, useState } from 'react'

export default function PostArticle(props) {
    console.log("postArticle",props.post)
    return (
    <div className='view'>
        <div className='max-width'>
            <section className='wrap-box'>
                <div className='inner'>
                    <Author />
                    {props.post.map((item,index)=> {
                        return <Category category={item.category} key={item.id}/>
                    })
                    }
                    <Category category={props.post}/>
                    <Title />
                    <Contents />
                    <Buttons />
                </div>
            </section>
        </div>
    </div>
)
}
