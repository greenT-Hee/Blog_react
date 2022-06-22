import "./posts.css"
import Post from "../Post/Post"
import { useEffect , useState  } from "react"
// import { Data } from "../../data"

export default function Posts() {
  const [post, setPost] = useState([])

  useEffect(()=>{
    fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
    .then(res => {
      return res.json()
    })
    .then(data => {
        setPost(data.posts)
    })
  },[])
    return (
      <ul className="posts">
        {
          post.map(item => {
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
