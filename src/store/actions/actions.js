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