import React from "react"
// import "../../App.css"
// import "../css/browse.css"
import "../css/header.css"
import { Link } from "react-router-dom"
// import GetMovies from "../fetchMovieData/fetchMovies"
import findMovie from "../fetchMovieData/findMovie"
// {GetMovies, findMovie}

function Header() {
	// GetMovies()

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
					<form id="form" onSubmit={findMovie}>
						<input type="text" id="search" placeholder="Search" className="search" onSubmit={findMovie}/>
					</form>
				</div>
			</header>
		</>
	)
}

export default Header
