// import logo from './logo.svg';
import "./App.css"
import Browse from "./pages/browse.js"
import Header from "./pages/header/header"
import Home from "./pages/home"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"


function App() {
	const [query, setQuery] = useState("")

	return (
		<div className="App">
			<Header query={setQuery}/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/browse" element={<Browse setQuery={query}/>} />
			</Routes>
		</div>
	)
}

export default App
