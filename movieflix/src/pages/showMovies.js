import React from "react"
import "./css/browse.css"
import DisplayMovie from './fetchMovieData/new/fetchNew'
function MovieList() {

	return (
		<>
			<main id="main">
                {/* <div className="movie" dangerouslySetInnerHTML={{_html:GetMovies}}></div> */}
				<DisplayMovie/>
            </main>
		</>
	)
}

export default MovieList
