import React from "react"
// import "../../App.css"
import "./css/browse.css"
import GetMovies from "./fetchMovieData/fetchMovies"
function MovieList() {
	GetMovies()

	return (
		<>
			<main id="main"></main>
		</>
	)
}

export default MovieList
