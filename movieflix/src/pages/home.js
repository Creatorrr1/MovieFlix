import React from "react"
import "./../App.css"
// import "./css/browse.css"
import "./css/home.scss"
import cinemaVid from "../assets/videos/blue_cinema_screen_wide.mp4"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home({setQuery, query}) {
	const [search, setSearch] = useState("")
	
	// window.onload = () => {
	//     document.getElementById("autoplay").play()
	// }

	const navigate = useNavigate()

	const findMovie = (e) => {
        e.preventDefault()
        console.log("in the find movie func")
        const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

        if(search !== "" || search !== null) {
            setQuery(SEARCHAPI + search)
            console.log("here is the search : ", query)
            setSearch("")
			return navigate("/browse")
        }
    }

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
    
        // Logic makes request.
    
        setSearch(searchValue);
      };

	return (
		<>
			<div className="home-container">
				<video src={cinemaVid} autoPlay loop muted id="autoplay"/>
				<div className="home-two-row-grid">
					<h1 className="home-title">MovieFlix</h1>
					{/* <div className="search-container">
						<input type="text" placeholder="Search..." />
						<div className="search"></div>
					</div> */}
					<div className='main-search-container'>
                        <form onSubmit={findMovie}>
							<input type="text" placeholder="Search..." className="main-search" value={search} onChange={handleSearchChange} 
                        // onSubmit={GetMovies.findMovie}
                        />
                        </form>
						{/* <div className="search"></div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
