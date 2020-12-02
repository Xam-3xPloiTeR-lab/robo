import React from 'react';
import Card from './Card';

const Cards = ({Robot}) => {
    const cardarr = Robot.map( (us , i) => {
       return (<Card key={i} id={Robot[i].id} name={Robot[i].name} email={Robot[i].email} />)
       })
    return ( 
        <div>
        {cardarr}
        </div>
     );
}
 
export default Cards;