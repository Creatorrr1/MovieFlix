import React from "react"
// import "../../App.css"
// import "../css/browse.css"
import "../css/header.css"
import { Link } from "react-router-dom"
// import { useState } from 'react'

function Header({ query ,setQuery }) {
    // const [search, setSearch] = useState(false)
	// const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

	// const findMovie = (e) => {
	// 	e.preventDefault()
    //     const {value} = e

    //     if(value !== "" || null) {
    //         setSearch(true)
    //     } else {
    //         setQuery(APIURL)
    //     }
    //     // const searches = document.getElementById("search")
    //     if(search) {

    //         const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
            
    //         const searchTerm = value
            
    //         if (searchTerm) {
    //             setQuery(SEARCHAPI + searchTerm)
    //             return value = "" && setSearch(false)
    //         }
    //     }
	// }

    const findMovie = ("submit", (e) => {
        e.preventDefault()
        console.log("in findMovie")
        const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
        console.log("in the find movie func")

        const {search} = e
        const searchTerm = search.target.value
        console.log(searchTerm)

        if(searchTerm !== "") {
            setQuery(SEARCHAPI + searchTerm)
            console.log("here is the after search : ", query)
            search.value = ""
        }
    })

	//  function getMovies(url) {
	//     const res = fetch(url)
	//     const resData = res.json()

	//     console.log(resData)

	//     // showMovies(resData.results)
	//     setFoundMovie(resData.results)
	// }

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
					<form
						id="form"
						// onSubmit={findMovie}
					>
						<input type="text" id="search" placeholder="Search" className="search" onSubmit={findMovie} />
					</form>
				</div>
			</header>
			{/* { foundMovie !== "" && foundMovie.forEach((m) => {
                const { poster_path, title, vote_average, overview } = m

                // const im = "https://image.tmdb.org/t/p/w1280"
                
                const imgPath = IMGPATH + poster_path
            
                return (<div className='movie'>
                    <img src={imgPath} alt="${title}"/>
                    <div className="movie-info">
                        <h3>${title}</h3>
                        <span className="${getClassByRate(vote_average)}">${vote_average}</span>
                    </div>
                    <div className="overview">
                        <h3>Overview:</h3>
                        ${overview}
                    </div>
                </div>
                )
            })  
            } */}
		</>
	)
}

export default Header
