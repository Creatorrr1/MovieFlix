import React from "react"
import "./../App.css"
// import "./css/browse.css"
// import GetMovies from "../fetchMovieData/fetchMovies"
import "./css/home.scss"
import cinemaVid from "../videos/blue_cinema_screen_wide.mp4"

function Home() {
	// GetMovies()

	// window.onload = () => {
	//     document.getElementById("autoplay").play()
	// }

	return (
		<>
			<div className="home-container">
				<video src={cinemaVid} autoPlay loop muted id="autoplay" />
				<div className="home-two-row-grid">
					<h1 className="home-title">MovieFlix</h1>
					{/* <div className="search-container">
						<input type="text" placeholder="Search..." />
						<div className="search"></div>
					</div> */}
					<div className='main-search-container'>
						<input type="text" placeholder="Search..." className='main-search'/>
						{/* <div className="search"></div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
