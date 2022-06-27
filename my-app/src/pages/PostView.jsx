import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ViewBanner from '../Components/Banner/ViewBanner'
import PostArticle from '../Components/PostArticle/PostArticle'

export default function PostView(props) {
  console.log("postView", props.post)
  return (
    <>
        <Header />
        <ViewBanner/>
        <PostArticle post={props.post}/>
        <Footer />
    </>
  )
}
