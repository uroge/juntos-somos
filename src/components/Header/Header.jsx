import React from 'react';
import './Header.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">   
            <Link to="/" className="header__logo">
                <Logo />
            </Link>
            <SearchBar />
        </div>
    );
};

export default Header;