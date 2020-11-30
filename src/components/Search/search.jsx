import React, {useState, useEffect} from 'react';
import MovieCard from "../movieCard/movieCard";
import {Link} from "react-router-dom";
// import Home from "./home"; 

import "./Search.css";



export default function Search(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

const searchMovies = async (e) => {
    e.preventDefault();
    
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0f30d0df82738bba93006de504668e40&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
        const res = await fetch(url);
        const data  = await res.json();
        setMovies(data.results);
        console.log(data);
    }catch(err){
        console.error(err);
    }
}


    return <div className="form">
     <div className="search-form">
  <form className="form-inline" action="#cards" onSubmit={searchMovies}>
    <input id="search" className="form-control" name="query" type="text" 
    placeholder="...title of movie" value={query} onChange={(e) => setQuery(e.target.value)} />
    {/* <Link to="/moviecard"> */}
    <button className="search-btn" type="submit"><i class="fa fa-search"></i></button>
    {/* </Link> */}
    
  </form>
  </div>
 <div className="card-list">
    {movies.filter(movie => movie.poster_path).map(movie => (
        <Link  className="link" to={`/search/${movie.title}`}>
        <MovieCard movie={movie} key={movie.id} />
        </Link>
        ))}
  </div>    
 </div>
}
