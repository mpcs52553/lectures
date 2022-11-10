function MoviePoster(props) {
  const imgUrl = `http://image.tmdb.org/t/p/w185/${props.movie.poster_path}`
  const altText = `Poster for ${props.movie.title}`
  const likeCount = props.likes[props.movie.id] || 0
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
        <a onClick={(e) => props.onLikeClicked(props.movie)} href="#" class="like_button">
          &hearts;
          <span class="like_count">{ likeCount }</span>
        </a>
      </p>
    </div>
  )
}

export default MoviePoster;