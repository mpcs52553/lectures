class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      movies: [
        {
          title: "The Mandalorian",
          posterUrl: "https://image.tmdb.org/t/p/w440_and_h660_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
          description: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter."
        },
        {
          title: "Apollo 13",
          posterUrl: "https://image.tmdb.org/t/p/w440_and_h660_face/oYUZHYMwNKnE1ef4WE5Hw2a9OAY.jpg",
          description: "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1970, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy."
        },
        {
          title: "Force Awakens",
          posterUrl: "https://image.tmdb.org/t/p/w440_and_h660_face/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
          description: "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers."
        },
        {
          title: "Toy Story",
          posterUrl: "https://image.tmdb.org/t/p/w440_and_h660_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
          description: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences."
        }
      ]
    }
  }
  render() {
    return (
      this.state.movies.map(function(movie_data) {
        return (
          <section className="col-sm-3 pt-3">
            <h2 className="pb-3">{movie_data.title}</h2>
            <img src={movie_data.posterUrl}></img>
            <p className="mt-3">{movie_data.description}.
            </p>
          </section>
        )
      })
    )
  }
}

