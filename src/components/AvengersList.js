import React from 'react';
import Avengers from '../data';
import avengers from '../data';
import {Link} from 'react-router-dom';
function AvengersList (){
    return(
        <div className="characters-list-wrapper">
        {avengers.map(avenger=> {
            return (
                <div className="character-card" key={avenger.id}> 
                <img src={avenger.thumbnail}
                 alt= {avenger.name}
                 /> 
                 <h2> <Link to={`/avengers/${avenger.id}`}> {avenger.name} </Link> </h2>
                 <p> ({avenger.nickname}) </p>
                </div>
            )
        })}
        
        </div>
    );
}

export default AvengersList;