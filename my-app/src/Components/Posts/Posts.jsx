import "./posts.css"
import Post from "../Post/Post"
// import { useEffect , useState  } from "react"
// import { Data } from "../../data"

export default function Posts(props) {
    return (
      <ul className="posts">
        {
          props.post.map(item => {
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
