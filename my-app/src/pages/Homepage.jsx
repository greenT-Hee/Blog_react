import Header from "../Components/Header/Header"
import Banner from "../Components/Banner/Banner"
import Main from "../Components/Main/Main"
import Footer from "../Components/Footer/Footer"

export default function Homepage(props) {
  return (
    <>
        <Header isLogin={props.isLogin} handleLogin = {props.handleLogin}/>
        <Banner />
        <Main post = {props.post}/>
        <Footer />
    </>
  )
}
