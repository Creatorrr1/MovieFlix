import React from "react"
// import "../../App.css"
// import "../css/browse.css"
import "../css/header.css"
import { Link } from "react-router-dom"
import GetMovies from "../fetchMovieData/fetchMovies"

function Header() {
	GetMovies()

	return (
		<>
			<header>
				<div className="grid-in-grid2-use gap-sm">
					<Link to="/" className="link">
						<div className="nav-text">Home</div>
					</Link>
					<Link to="/browse" className="link">
						<div className="nav-text">Browse</div>
					</Link>
					<form id="form">
						<input type="text" id="search" placeholder="Search" className="search" onSubmit={GetMovies.findMovie}/>
					</form>
				</div>
			</header>
		</>
	)
}

export default Header
