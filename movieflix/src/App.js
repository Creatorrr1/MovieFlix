// import logo from './logo.svg';
import "./App.css"
import Browse from "./pages/browse.js"
import Header from "./pages/header/header"
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/browse" element={<Browse />} />
			</Routes>
		</div>
	)
}

export default App
