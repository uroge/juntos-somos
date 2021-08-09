import * as actionTypes from './actionTypes';

export const getUsers = users => {
    return {
        type: actionTypes.GET_USERS,
        payload: users
    }
};


export const getFilteredUsers = filteredUsers => {
    return {
        type: actionTypes.FILTER_USERS,
        payload: filteredUsers
    }
};

export const sortUsers = (filteredProducts, sort) => {
    const sortedUsers = filteredProducts.slice();
    if(sort === 'name') {
        sortedUsers.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
    } else {
        sortedUsers.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
    }

    return {
        type: actionTypes.SORT_USERS,
        payload: sortedUsers
    }
};