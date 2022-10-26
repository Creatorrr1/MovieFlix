import React from "react"
// import "../../App.css"
// import "../css/browse.css"
import "../css/header.css"
import { Link } from "react-router-dom"
import { useState } from 'react'

function Header({ query ,setQuery }) {
    const [search, setSearch] = useState("")

    const findMovie = (e) => {
        e.preventDefault()
        console.log("in the find movie func")
        const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

        // const {search} = e.target.value
        // const searchTerm = search
        // console.log(searchTerm)

        if(search !== "" || search !== null) {
            setQuery(SEARCHAPI + search)
            console.log("here is the search : ", query)
            return setSearch("")
        }
    }

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
    
        // Logic makes request.
    
        setSearch(searchValue);
      };

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
						<input type="text" id="search" placeholder="Search" className="search" value={search} onChange={handleSearchChange}/>
					</form>
				</div>
			</header>
		</>
	)
}

export default Header
