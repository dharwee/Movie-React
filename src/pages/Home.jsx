import MovieCard from "../components/MovieCard.jsx";


export default function Home(){
    const movies=[
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"The Matrix", release_date:"1998"},
        {id:3, title:"The Wild Robot", release_date:"2024"}
    ];
    return(
        <div className="home">

            <div className="movie-grid">

            {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>
        ))}
        </div>

    </div>

    );
}
