import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <header className="row mb-5 justify-content-between">
          <form className="col-sm-4">
            <input className="form-control" autoFocus name="search" type="text" placeholder="Search by title...">
            </input>
          </form>

          <p className="mt-2">
            <button className="btn btn-primary" >Top-Rated Movies</button>
            <button className="btn btn-primary ms-3">Now Playing</button>
          </p>
        </header>

        <div className="row" id="movies"> 
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
