import "./category.css"

export default function Category(props) {
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {props.category.map(item => {
                return  <dd key={item.id}>{item}</dd>
            })}
        </dl>
    )
}
