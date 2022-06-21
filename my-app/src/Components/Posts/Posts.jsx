import "./posts.css"
import Post from "../Post/Post"
import { useEffect , useState  } from "react"
// import { Data } from "../../data"

export default function Posts() {
  const [dummy, setDummy] = useState([])

  useEffect(()=>{
    fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
     setDummy(data.posts)
    })
  },[])
    return (
      <ul className="posts">
        {
          dummy.map(item => {
          return <Post 
            key = {item.id}
            thumbnailSrc = {item.thumbnail}
            title = {item.title}
            contentsText = {item.contents[0]["text"]}
            profileImg = {item.profileImg}
            created = {item.created}
            category = {item.category}
            />
          })
        }
      </ul>
    )
}
