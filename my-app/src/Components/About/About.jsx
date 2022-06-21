import "./about.css"
// import { Data } from "../../data"
import { useState, useEffect } from "react"
import Headshot from '../../assets/profile.jpg'
import Categories from "../Categories/Categories"
import GithubIcon from "../../assets/Github.svg"
import FacebookIcon from "../../assets/Facebook.svg"
import InstaIcon from "../../assets/Instagram.svg"
import TwitterIcon from "../../assets/Twitter.svg"

export default function About() {
    const [about, setAbout] = useState([])

    useEffect(()=>{
        fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
        .then(res => {
        return res.json()
        })
        .then(data => {
        // console.log(data.blog)
        setAbout(data.users[0])
        })
    },[])
    return (
        <aside className="about">
            <h2>About Me</h2>
            <img src={Headshot} alt="user-profile" className="user-profile"/>
            <p className="user-name">{about.name}</p>
            <p className="user-description">{about.userInfo}</p>
            <h3>CATEGORIES</h3>
            <ul className="categories">
                <Categories />
            </ul>
            <h3>FOLLOW</h3>
            <ul className="sns">
                <li><a href="#"><img src={FacebookIcon} alt="Facebook" /></a></li>
                <li><a href="#"><img src={TwitterIcon} alt="Twitter" /></a></li>
                <li><a href="#"><img src={InstaIcon} alt="Instgram" /></a></li>
                <li><a href="#"><img src={GithubIcon} alt="Github" /></a></li>
            </ul>
        </aside>
    )
}
