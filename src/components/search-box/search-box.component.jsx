import React from 'react';
import '../search-box/search-box.styles.css';

export const SearchBox = ({placeholder, handledChange}) => (

    <input className = 'search' type = 'search' placeholder = {placeholder} onChange={handledChange}/>
);