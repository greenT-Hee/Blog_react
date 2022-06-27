import "./footer.css"

export default function Footer() {
    const header = document.querySelector('header');
    return (
        <footer>
            <div className="max-width">
                <h2>©Weniv Corp.</h2>
                <button className="top-button">TOP</button>
            </div>
        </footer>
    )
}
