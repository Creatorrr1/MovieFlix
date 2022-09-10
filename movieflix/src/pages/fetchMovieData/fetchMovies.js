function GetMovies() {
	const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
	const IMGPATH = "https://image.tmdb.org/t/p/w1280"
	const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

	const main = document.getElementById("main")
	const form = document.getElementById("form")
	const search = document.getElementById("search")
	// initially get fav movies
	getMovies(APIURL)

	async function getMovies(url) {
		const res = await fetch(url)
		const resData = await res.json()

		console.log(resData)

		showMovies(resData.results)
	}

	const emptyMain = () => {
	    const alteredMain = document.getElementById("main").innerHTML = ""
	    return alteredMain
	}

	function showMovies(movies) {
		// clear main
		//   main.innerHTML = ""
		//   document.getElementById("main").innerHTML = ""
		emptyMain()
		const addToMain = document.getElementById("main")

        // const renderMovie = (movie) => {
		// 	const { poster_path, title, vote_average, overview } = movie
		// 	const movieHtml = `
        //         <img
        //             src="${IMGPATH + poster_path}"
        //             alt="${title}"
        //         />
        //         <div className="movie-info">
        //             <h3>${title}</h3>
        //             <span className="${getClassByRate(vote_average)}">${vote_average}</span>
        //         </div>
        //         <div className="overview">
        //             <h3>Overview:</h3>
        //                 ${overview}
        //          </div>
        //         `
        //         return movieHtml
		// }

        // renderMovie(movie)

		movies.forEach((movie) => {
			const { poster_path, title, vote_average, overview } = movie

            // call render(movie) here if you want to use dangerouslySetHtml

			const movieEl = document.createElement("div")
			movieEl.classList.add("movie")

			movieEl.innerHTML = `
              <img
                  src="${IMGPATH + poster_path}"
                  alt="${title}"
              />
              <div className="movie-info">
                  <h3>${title}</h3>
                  <span className="${getClassByRate(vote_average)}">${vote_average}</span>
              </div>
              <div className="overview">
                  <h3>Overview:</h3>
                  ${overview}
              </div>
          `

			addToMain.appendChild(movieEl)
		})

		function getClassByRate(vote) {
			if (vote >= 8) {
				return "green"
			} else if (vote >= 5) {
				return "orange"
			} else {
				return "red"
			}
		}

		//   form.addEventListener("submit", (e) => {
		//       e.preventDefault();

		//       const searchTerm = search.value;

		//       if (searchTerm) {
		//           getMovies(SEARCHAPI + searchTerm);

		//           search.value = "";
		//       }
		//   });
	}
    
    // const findMovie = (e) => {
    //     e.preventDefault()
    //     const search = document.getElementById("search")
    //     const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
    
    //     const searchTerm = search.value
    
    //     if (searchTerm) {
    //         GetMovies.getMovies(SEARCHAPI + searchTerm)
    
    //         search.value = ""
    //     }
    // }
}
const findMovie = (e) => {
    e.preventDefault()
    const search = document.getElementById("search")
	const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

    const searchTerm = search.value

    if (searchTerm) {
        GetMovies.getMovies(SEARCHAPI + searchTerm)

        search.value = ""
    }
}

module.exports = GetMovies
