import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
    
        default:
            return state;
    }
};

export default rootReducer;