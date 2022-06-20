import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import '../src/styles/reset.css'
import '../src/styles/global.css'
import PostView from "./pages/PostView";


function App() {
	return(
		<BrowserRouter>
			<Route 
				path = "/"
				exact
				component={Homepage}
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
