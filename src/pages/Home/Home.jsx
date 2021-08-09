import React, { useEffect, useState } from 'react';
import './Home.scss';

import axios from '../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions/actions';

import Users from '../../components/Users/Users';
import SortOptions from '../../components/SortOptions/SortOptions';
import Filter from '../../components/Filter/Filter';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(9);
    
    const users = useSelector(state => state.users);
    const filteredUsers = useSelector(state => state.filteredUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('data.json')
        .then(response => {
            console.log(response.data.results);
            setNumberOfUsers(response.data.results.slice(0, 50).length);
            dispatch(getUsers(response.data.results.slice(0, 50)));
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="home">
            <div className="home__sort">
                <SortOptions />
            </div>
            <div className="home__users">
                <Filter />
                <Users users={ currentUsers } />
                <Pagination usersPerPage={ usersPerPage } totalUsers={ users ? users.length : numberOfUsers } paginate={ paginate } />
            </div>
        </div>
    );
};

export default Home;