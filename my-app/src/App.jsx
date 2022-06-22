import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import '../src/styles/reset.css'
import '../src/styles/global.css'
import PostView from "./pages/PostView";
import { useState } from 'react'


function App() {
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
					/>
				}
			/>
			<Route 
				path = "/view"
				exact
				component={PostView}
			/>
		</BrowserRouter>
		
	)
}

export default App;
