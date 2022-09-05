import React from "react"
import { useState } from "react"
// import "../../App.css"
import "./css/browse.css"
function Browse() {
	const [movies, setMovies] = useState("")

	const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
	const IMGPATH = "https://image.tmdb.org/t/p/w1280"
	const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

	getMovies(APIURL)

	async function getMovies(url) {
		const res = await fetch(url)
		const resData = await res.json()

		console.log(resData)

		setMovies(resData.results)
		// showMovies(resData.results)
	}

	const getClassByRate = (vote) => {
		if (vote >= 8) {
			return "green"
		} else if (vote >= 5) {
			return "orange"
		} else {
			return "red"
		}
	}

	const searchHandle = (e) => {
		e.preventDefault()
		const { value } = e.target

		const searchTerm = value

		if (searchTerm) {
			getMovies(SEARCHAPI + searchTerm)

			e.value = ""
		}
	}
    
	return (
		<>
			{/* <h1>hello</h1> */}
			<header>
				<form id="form">
					<input type="text" id="search" placeholder="Search" class="search" onSubmit={searchHandle} />
				</form>
			</header>
			<main id="main">
				{
					movies.forEach((movie, index) => {
						const { poster_path, title, vote_average, overview } = movie;
                        <div className="movie" key={index}>
							<img src={IMGPATH + poster_path} alt={title} />
							<div className="movie-info">
								<h3>${title}</h3>
								<span className={getClassByRate(vote_average)}>${vote_average}</span>
							</div>
							<div className="overview">
								<h3>Overview:</h3>${overview}
							</div>
						</div>
					})}
			</main>
		</>
	)
}

export default Browse
