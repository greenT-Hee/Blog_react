import "./about.css"
import { Data } from "../../data"
import Categories from "../Categories/Categories"

export default function About() {
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src="" alt="user-profile" />
            <p className="user-name">chilli</p>
            <p className="user-description">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <h3>CATEGORIES</h3>
            <ul className="categories">
                <Categories />
            </ul>
            <h3>FOLLOW</h3>
            <ul className="sns">
                <li><a href="#"><img src="" alt="Facebook" /></a></li>
                <li><a href="#"><img src="" alt="Twitter" /></a></li>
                <li><a href="#"><img src="" alt="Instgram" /></a></li>
                <li><a href="#"><img src="" alt="Github" /></a></li>
            </ul>
        </aside>
    )
}
