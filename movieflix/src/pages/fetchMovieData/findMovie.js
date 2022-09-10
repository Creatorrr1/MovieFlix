import GetMovies from './fetchMovies.js'

const findMovie = (e) => {
    e.preventDefault()
    const search = document.getElementById("search")
	const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

    const searchTerm = search.value

    if (searchTerm) {
        console.log("in If Statement", SEARCHAPI + searchTerm)
        GetMovies.getMovies(SEARCHAPI + searchTerm)

        search.value = ""
    }
}


export default findMovie