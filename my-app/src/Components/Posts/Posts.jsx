import "./posts.css"
import Post from "../Post/Post"
import { Data } from "../../data"

export default function Posts() {
  return (
    <ul className="posts">
      {
        Data.posts.map(item => {
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
