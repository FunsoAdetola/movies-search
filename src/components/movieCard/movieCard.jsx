import React from "react";
// import Home from "./home";
import "./movieCard.css";


function MovieCard({movie}){
    return <div className="card" key={movie.id} >
    <img className="card-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + ' poster'}
        />
    <div className="card-content">
    <h3 className="card-title">{movie.title}</h3>
    </div>
    
</div>

}

export default MovieCard;