import React from 'react';

import avengers from '../data';

function AvengerPage(props){
    const id= props.match.params.id;
    //console.log(avengers, id);
    const avenger= avengers.find(a=>  a.id.toString()===id);
    console.log(avenger);
    return(
        <div>
            <img 
                className ='character-image' 
                src= {avenger.img}
                alt= {avenger.name}/>
                <div className='character-info-wrapper'>
                <h1> {avenger.name}</h1>
                <h4> {avenger.nickname} </h4>
                <p> {avenger.description} </p>
                 </div>
        </div>
    )
}
export default AvengerPage;