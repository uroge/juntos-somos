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
                users: [...action.payload]
            }

        case actionTypes.FILTER_USERS:
            return {
                ...state,
                filteredUsers: [...action.payload]
            }

        case actionTypes.CONCAT_USERS:   
            return {
                ...state,
                filteredUsers: [...action.payload, ...state.filteredUsers]
            }
        default:
            return state;
    }
};

export default rootReducer;