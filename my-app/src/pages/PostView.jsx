import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ViewBanner from '../Components/Banner/ViewBanner'
import PostArticle from '../Components/PostArticle/PostArticle'
import { useEffect, useState } from 'react'

export default function PostView(props) {
  const [dummy, setDummy] = useState([])
	useEffect(()=>{
		fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
		.then(res => {
		return res.json()
		})
		.then(data => {
      setDummy(data.posts[0].category)
		})
	},[])

  return (
    <>
        <Header           
          isLogin={props.isLogin}
          handleLogin={props.handleLogin}
        />
        <ViewBanner/>
        <PostArticle 
          category={dummy}
        />
        <Footer />
    </>
  )
}
