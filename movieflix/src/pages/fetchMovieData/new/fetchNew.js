import React from "react"
import "../../css/browse.css"
import { useState, useEffect } from "react"

export default function DisplayMovie() {
	const [movie, setMovie] = useState([])
	// const {foundMovie, setFoundMovie} = useState("")

	const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
	const IMGPATH = "https://image.tmdb.org/t/p/w1280"
	// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

	useEffect(() => {
		fetch(APIURL)
			.then((res) => res.json())
			.then((resData) => {
				console.log("movies raw resData not in state ->", resData.results)
				storeData(resData.results)
			})
	}, [])

	function storeData(data) {
		setMovie(data)
		return console.log("movies ->", movie)
	}

	function getClassByRate(vote) {
		if (vote >= 8) {
			return "green"
		} else if (vote >= 5) {
			return "orange"
		} else {
			return "red"
		}
	}

	return (
		<>
			{/* Array.prototype.forEach.call(movie, m => { */}
			{/* movie.forEach((m) => { */}
			{movie.map((m, index) => {
				const { poster_path, title, vote_average, overview } = m

				const imgPath = IMGPATH + poster_path

				return (
					<div className="movie" key={index}>
						<img src={imgPath} alt={title} />
						<div className="movie-info">
							<h3>{title}</h3>
							<span className={getClassByRate(vote_average)}>{vote_average}</span>
						</div>
						<div className="overview">
							<h3>Overview:</h3>
							{overview}
						</div>
					</div>
				)
			})}
		</>
	)
}

// module.exports = showMovies

// export default displayMovie

// Above useEffect
// function getMovies(url) {
//     return setQuery(url)
// }