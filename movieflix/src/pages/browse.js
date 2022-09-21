import React from "react"
// import "../../App.css"
import "./css/browse.css"
import MovieList from "./showMovies"

function Browse({query}) {

	return (
		<>
			<MovieList query={query}/>
		</>
	)
}

export default Browse
