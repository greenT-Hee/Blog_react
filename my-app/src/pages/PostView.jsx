import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ViewBanner from '../Components/Banner/ViewBanner'
import PostArticle from '../Components/PostArticle/PostArticle'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PostView(props) {
console.log("postView",props.post)
  return (
    <>
        <Header           
          isLogin={props.isLogin}
          handleLogin={props.handleLogin}
        />
        <ViewBanner/>
        <PostArticle 
          post={props.post}
        />
        <Footer />
    </>
  )
}
