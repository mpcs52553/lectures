import React from 'react';

function MoviePoster(props) {
  const imgUrl = `http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`
  const altText = `Poster for ${props.movie.title}`
  return (
  <div className="col-sm-3 text-center mb-2 poster" data-movie-id={props.movie.id}>
    <img src={imgUrl}
        className="img-fluid"
        alt={altText}>
    </img>
    <p className="mt-2">
      {props.movie.release_date ? props.movie.release_date.substr(0, 4) : null}
      <span className="badge bg-primary mx-3">
      {props.movie.vote_average}
      </span>
      <a href="#" class="like_button">
        &hearts; 
        <span class="like_count">0</span>
      </a>
    </p>
  </div>
  )
}




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      likes: {},
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
      return <MoviePoster movie={movie_data}/>
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
