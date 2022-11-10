import React from 'react';
import MoviePoster from './MoviePoster'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      likes: { },
    }
  }

  showNowPlaying = async (e) => {
    const url = this.urlForMovies("now_playing")
    const httpResponse = await fetch(url)
    const data = await httpResponse.json();
    console.log(data)
    // this.state.movies = data.results
    this.setState({ movies: data.results.filter(movie => movie.vote_average >= 6.0) })
  }

  handleLikeClick = (movie) => {
    console.log("The like button was clicked.")
    let likeData = this.state.likes
    likeData[movie.id] = (likeData[movie.id] || 0) + 1
    this.setState({ likes: likeData })
  }

  showTopRatedMovies = async (e) => {
    const url = this.urlForMovies("top_rated")
    const httpResponse = await fetch(url)
    const data = await httpResponse.json();
    console.log(data)
    // this.state.movies = data.results
    this.setState( { movies: data.results.filter(movie => movie.vote_average >= 6.0) })
  }
  render() {

    const posters = this.state.movies.map(movie_data => {
      return <MoviePoster onLikeClicked={this.handleLikeClick} likes={this.state.likes} movie={movie_data}/>
    })

    return (
      <div>
        <header className="row mb-5 justify-content-between">
          <form className="col-sm-4">
            <input className="form-control" autoFocus name="search" type="text" placeholder="Search by title...">
            </input>
          </form>

          <p className="mt-2">
            <button onClick={this.showTopRatedMovies} className="btn btn-primary" >Top-Rated Movies</button>
            <button onClick={this.showNowPlaying} className="btn btn-primary ms-3">Now Playing</button>
          </p>
        </header>

        <div className="row" id="movies"> 
          { posters }
        </div>
      </div>
    )
  }

  urlForMovies(resource) {
    const apiKey = "api_key=bde024f3eb43f597aafe01ed9c9098c6"
    const language = "language=en-US"
    const region = "region=US"
    const filter = "include_adult=false"
    const base_url = `https://api.themoviedb.org/3/movie/${resource}`
    return `${base_url}?${apiKey}&${language}&${region}&${filter}`
  }

}

export default App;
