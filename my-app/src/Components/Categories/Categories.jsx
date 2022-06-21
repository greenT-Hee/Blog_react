import './categories.css'
import { useState, useEffect } from 'react'

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
    .then(res=> {
      return res.json()
    })
    .then(data=> {
      // console.log(data.users[0].category)
      setCategories(data.users[0].category)
    })
  })
  return (
    <>
      {categories.map((item) => {
        return <li><a href="#">{item}</a></li>
      })}
    </>
  )
}
