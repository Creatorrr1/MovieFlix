import React from "react"
// import "../../App.css"
import "./css/browse.css"
import GetMovies from "./fetchMovieData/fetchMovies"
function MovieList() {
	GetMovies()

	return (
		<>
			<main id="main">
                {/* <div className="movie" dangerouslySetInnerHTML={{_html:GetMovies}}></div> */}
            </main>
		</>
	)
}

export default MovieList
