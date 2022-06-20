import "./post.css"
import Category from "../Category/Category"
import Author from "../Author/Author"
// import Tuhmnail from "../../assets/post-img1.jpg"

export default function Post(props) {
  
  return (
    <li>
      <a href="post-view.html" className="post">
        <article>
          <img src={"../.." + props.thumbnailSrc} alt="썸네일" />
        </article>
        <div className="contents-wrap">
          <Category category={props.category}/>
          <h3>{props.title}</h3>
          <Author profileImg = {props.profileImg} created = {props.created}/>
          <p class="post-description">
            {props.contentsText}
          </p>
        </div>
      </a>
    </li>
  )
}
