import "./author.css"

export default function Author({profileImg, created}) {
  return (
    <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author">
            <img src={profileImg} alt="프로필사진" />
            Chilli
        </dd>

        <dt className="a11y-hidden">Created</dt>
        <dd className="created">
            {created}
        </dd>
</dl>
  )
}
