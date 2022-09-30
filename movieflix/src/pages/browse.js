import React from "react"
// import "../../App.css"
import "./css/browse.css"
import MovieList from "./showMovies"

function Browse({setQuery, query}) {

	return (
		<>
			<MovieList setQuery={setQuery} query={query}/>
		</>
	)
}

export default Browse
