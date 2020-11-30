// import React, {useState} from "react";
// import MovieCard from "../movieCard/movieCard";
// import Search from "./Search/search";
// import { Link} from "react-router-dom";



// const MovieList = ()=> {

//         const [query, setQuery] = useState('');
//     const [movies, setMovies] = useState([]);

// const searchMovies = async (e) => {
//     e.preventDefault();
    
    
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=0f30d0df82738bba93006de504668e40&language=en-US&query=${query}&page=1&include_adult=false`;
    
//     try {
//         const res = await fetch(url);
//         const data  = await res.json();
//         setMovies(data.results);
//         console.log(data);
//     }catch(err){
//         console.error(err);
//     }
// }


//     return  <div className="card-list">
//     {movies.filter(movie => movie.poster_path).map(movie => (
//         <MovieCard movie={movie} key={movie.id} />
//         ))}
//   </div>   
// };


// export default MovieList;