import React from 'react';
import './Filter.scss';

import { useDispatch, useSelector } from 'react-redux';
import { sortUsers } from '../../store/actions/actions';

const Filter = (props) => {
    const dispatch = useDispatch();
    const filteredUsers = useSelector(state => state.filteredUsers);

    const sortUsersByName = (event) => {
        console.log(event.target.value);
        dispatch(sortUsers(filteredUsers, event.target.value));
    }

    return (
        <div className="filter">
            <p>Filter 9 of 25 users</p>
            <div className="filter__dropdown">
                <span>Sort by</span>
                <select name="options" onChange={(event) => sortUsersByName(event)}>
                    <option value="name">Name</option>
                    <option value="last-name">Last Name</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;