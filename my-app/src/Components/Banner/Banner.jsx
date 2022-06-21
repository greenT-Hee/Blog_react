import React from 'react'
import './banner.css'
import { useState, useEffect} from 'react'
// import { Data } from '../../data'

function Banner() {
  const [dummy, setDummy] = useState([])

  useEffect(()=>{
    fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
      // console.log(data.blog)
      setDummy(data.blog)
    })
  },[])
  return (
    <div className='banner'>
        <div className='max-width'>
            <div className='banner-contents'>
                <p className='sub-text'>{dummy.subTitle}</p>
                <p className='main-text'>{dummy.mainTitle}</p>
                <p className='description'>{dummy.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner