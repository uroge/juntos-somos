import React from 'react';
import './SearchBar.scss';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const SearchBar = () => {
    return(
        <div className="search-bar">
           <SearchIcon className="search-bar__icon" />
           <input type="text" placeholder="Buscar aqui" />
        </div>
    );
};

export default SearchBar;