import React from 'react';
import Search from "./Search/search";
// import Nav from "./nav";
import Home from "./Home/Home";
import Card from "./Card/Card";
// import MovieCard from "../movieCard/movieCard";
// import MovieList from "./MovieList/MovieList";
import "./App.css";

import {BrowserRouter as Router,Switch, Route } from "react-router-dom"




function App(){
    return (
        <Router>
         <div className="">
            {/* <Nav /> */}
           <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/search/:title" component={Card} />
            {/* <Route path="/moviecard" component={MovieCard} /> */}
            {/* <Route path="/card" component={Card} /> */}
            </Switch>
         </div>       
         </Router>
    );
 
}

export default App;