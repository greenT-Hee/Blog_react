import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import '../src/styles/reset.css'
import '../src/styles/global.css'
import PostView from "./pages/PostView";
import { useState, useEffect } from 'react'


function App() {
	const [post, setPost] = useState([])

	useEffect(()=>{
		fetch("https://greent-hee.github.io/Blog_react/my-app/public/data.json")
		.then(res => {
		return res.json()
		})
		.then(data => {
			setPost(data.posts)
		})
	},[])

	const [isLogin, setLogin] = useState(false)

	function handleLogin(){
		isLogin ? setLogin(false) : setLogin(true)
	}
	return(
		<BrowserRouter>
			<Route 
				path = "/"
				exact
				render={()=> 
					<Homepage 
						isLogin = {isLogin}
						handleLogin = {handleLogin}
						post = {post}
					/>
				}
			/>
			<Route 
				path = "/view"
				exact
				render = {
					() => 
						<PostView
						isLogin = {isLogin}
						handleLogin = {handleLogin}
						/>
				}
			/>
		</BrowserRouter>
		
	)
}

export default App;
