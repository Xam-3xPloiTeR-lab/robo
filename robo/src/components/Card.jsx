import React from 'react';

function Card(props) {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={"https://robohash.org/" + props.id + "?200x200"} alt="Robo" />
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    );
}
 
export default Card;