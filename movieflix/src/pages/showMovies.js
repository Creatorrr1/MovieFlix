import React from "react"
import "./css/browse.css"
import DisplayMovie from './fetchMovieData/new/fetchNew'

function MovieList({query}) {

	return (
		<>
			<main id="main">
                {/* <div className="movie" dangerouslySetInnerHTML={{_html:GetMovies}}></div> */}
				<DisplayMovie query={query}/>
            </main>
		</>
	)
}

export default MovieList
