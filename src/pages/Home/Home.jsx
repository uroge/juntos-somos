import React, { useEffect } from 'react';
import './Home.scss';

import axios from '../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions/actions';

import Users from '../../components/Users/Users';

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
            <Users users={users} />
        </div>
    );
};

export default Home;