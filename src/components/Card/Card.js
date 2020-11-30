import React, {useState, useEffect} from 'react';

import "./Card.css";





export default function Card({match}){
console.log(match);
useEffect(()=>{
    fetchMovie();
    
  },[]);
 
  const [movie, setMovie] = useState({});

 
  const fetchMovie = async ()=> {
      const fetchMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f30d0df82738bba93006de504668e40&language=en-US&query=${match.params.title}&page=1&include_adult=false`);
      const data = await fetchMovie.json(); 
      setMovie(data.results[0]);
      console.log(data);
      console.log(movie);
      
    }


    return <div className="card-page">
<div key={movie.id}>
 <div className="card1" >
 <div className="card1-image">
 <img 
    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
    alt={movie.title + ' poster'}
    />
 </div>

<div className="card1-content">
<h3 className="card1-title">{movie.title}</h3>
<div className="top"> 
<p><small>RELEASE DATE: {movie.release_date}</small></p>
<p><small>RATING: {movie.vote_average}</small></p>
</div>

<p className="card1--desc">{movie.overview}</p>
</div>
</div>

</div>
       </div>

}
