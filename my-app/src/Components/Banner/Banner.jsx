import React from 'react'
import './banner.css'
import { useState, useEffect} from 'react'
// import { Data } from '../../data'

function Banner() {
  const [banner, setBanner] = useState([])

  useEffect(()=>{
    fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
      // console.log(data.blog)
      setBanner(data.blog)
    })
  },[])
  return (
    <div className='banner'>
        <div className='max-width'>
            <div className='banner-contents'>
                <p className='sub-text'>{banner.subTitle}</p>
                <p className='main-text'>{banner.mainTitle}</p>
                <p className='description'>{banner.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner