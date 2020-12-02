import React, { Component } from 'react';

const SearchBox = ({Onsearch}) => {

    return ( 
        <input onChange={Onsearch}   className='pa3' type='search' placeholder='Search Robot' />
     );
}
 
export default SearchBox;