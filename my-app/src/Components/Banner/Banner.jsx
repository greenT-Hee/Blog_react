import React from 'react'
import './banner.css'
import { Data } from '../../data'

function Banner() {
  return (
    <div className='banner'>
        <div className='max-width'>
            <div className='banner-contents'>
                <p className='sub-text'>{Data.blog.subTitle}</p>
                <p className='main-text'>{Data.blog.mainTitle}</p>
                <p className='description'>{Data.blog.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner