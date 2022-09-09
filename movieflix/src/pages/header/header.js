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
			{/* <h1>hello</h1> */}
			<header>
				<div className='grid-in-grid2-use gap-sm'>
					{/* <button>Home</button> */}
					<Link to="/" className="link">
                		<div className="nav-text">Home</div>
              		</Link>
					<Link to="/browse" className="link">
                		<div className="nav-text">Browse</div>
              		</Link>
					{/* <button>Browse</button> */}
				<form id="form">
					<input type="text" id="search" placeholder="Search" className="search" />
				</form>
				</div>
			</header>
		</>
	)
}

export default Header