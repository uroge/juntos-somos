import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    filteredUsers: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: [...action.payload],
                filteredUsers: [...action.payload]
            }

        case actionTypes.FILTER_USERS:
            return {
                ...state,
                filteredUsers: [...action.payload]
            }
        
        case actionTypes.SORT_USERS:
            return {
                ...state,
                filteredUsers: [...action.payload]
            }
        default:
            return state;
    }
};

export default rootReducer;