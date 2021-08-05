import React, { useEffect } from 'react';
import './Home.scss';

import axios from '../../axios/axios';

const Home = () => {
    useEffect(() => {
        axios.get('data.json')
        .then(response => console.log(response.data.results))
        .catch(error => console.log(error));
    }, []);
    
    return(
        <div className="home">
            Home
        </div>
    );
};

export default Home;