import React, { useEffect } from 'react';
import './Home.scss';

import axios from '../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions/actions';

import Users from '../../components/Users/Users';
import SortOptions from '../../components/SortOptions/SortOptions';

const Home = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('data.json')
        .then(response => {
            console.log(response.data.results);
            dispatch(getUsers(response.data.results.slice(0, 50)));
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    return(
        <div className="home">
            <SortOptions />
            <div className="home__users">
                <Users users={ users } />
            </div>
        </div>
    );
};

export default Home;