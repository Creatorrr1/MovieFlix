import React from "react"
// import "../../App.css"
import "./css/browse.css"
// import Header from './header/header'
import MovieList from "./showMovies"
import GetMovies from "./fetchMovieData/fetchMovies"

function Browse() {
	GetMovies()

	return (
		<>
			<MovieList />
		</>
	)
}

export default Browse
