import * as actionTypes from './actionTypes';

export const getUsers = users => {
    console.log(users);
    return {
        type: actionTypes.GET_USERS,
        payload: users
    }
};