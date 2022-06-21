import "./author.css"
import HeadShot from '../../../assets/profile.jpg'

export default function Author({profileImg, created}) {
  return (
    <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author">
            <img src={HeadShot} alt="프로필사진" />
            Chilli
        </dd>

        <dt className="a11y-hidden">Created</dt>
        <dd className="created">
            2022.05.25.
        </dd>
</dl>
  )
}
