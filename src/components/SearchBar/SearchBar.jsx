import React, { useState } from 'react';
import './SearchBar.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getFilteredUsers } from '../../store/actions/actions';

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const searchUsers = (event) => {
        setSearchTerm(event.target.value);
        if(users) {
            const filteredUsers = users.filter(user => user.name.first.includes(searchTerm.toLowerCase()));
            dispatch(getFilteredUsers(filteredUsers));
        }
    };

    return(
        <div className="search-bar">
           <SearchIcon className="search-bar__icon" />
           <input type="text" placeholder="Buscar aqui" onChange={(event) => searchUsers(event)} />
        </div>
    );
};

export default SearchBar;