import React from "react";
import { Link} from "react-router-dom";
import Nav from "../nav";

import "./Home.css";


const Home = ()=> {
    return (
        <div className="home">
         <Nav />
        <div className="main">
     <div className="title">
     <h1 >Unlimited Movies, TV Shows and more</h1>
     </div>
            <Link to={`/search`}>
                <button className="start-button" type="submit">Click to continue</button>
            </Link>
        </div>
        </div>
    )
};


export default Home;