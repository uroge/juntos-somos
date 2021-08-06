import React, { useState } from 'react';
import './SortOptions.scss';

import { useDispatch, useSelector } from 'react-redux';
import { concatFilteredUsers, getFilteredUsers } from '../../store/actions/actions';

const SortOptions = (props) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const filteredUsers = useSelector(state => state.filteredUsers);

    const filterUsers = (event) => {
        const city = event.target.name.toLowerCase();
        let usersToAdd = [];

        if(event.target.checked) {
            usersToAdd = filteredUsers.filter(user => user.location.city === city);

            dispatch(getFilteredUsers(usersToAdd));
        } else {
            // When checkbox gets unchecked
        }
    };

    const filterByGender = (event) => {
        const gender = event.target.value;
        let usersToAdd = [];

        if(event.target.checked) {
            usersToAdd = users.filter(user => user.gender === gender);

            dispatch(getFilteredUsers(usersToAdd));
        }
    };

    return (
        <div className="sort">
            <h3 className="sort__header">By Gender</h3>
            <div className="sort__option">
                <input type="radio" name="gender" value="male" onChange={(event) => filterByGender(event)}/>
                <span>Male</span>
            </div>
            <div className="sort__option">
                <input type="radio" name="gender" value="female" onChange={(event) => filterByGender(event)} />
                <span>Female</span>
            </div>
            <h3 className="sort__header">By State</h3>
            <div className="sort__option">
                <input type="checkbox" name="Coronel Fabriciano" onChange={(event) => filterUsers(event)} />
                <span>Coronel Fabriciano</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" name="Nova Iguaçu" onChange={(event) => filterUsers(event)} />
                <span>Nova Iguaçu</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" name="Itaguaí" onChange={(event) => filterUsers(event)} />
                <span>Itaguaí</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" name="São João De Meriti" onChange={(event) => filterUsers(event)} />
                <span>São João De Meriti</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" name="Bento Gonçalves" onChange={(event) => filterUsers(event)} />
                <span>Bento Gonçalves</span>
            </div>
        </div>
    );
};

export default SortOptions;