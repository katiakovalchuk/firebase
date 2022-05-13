
import {SET_USER, REMOVE_USER} from '../types';

const user = localStorage.getItem('user');
let initialState = user ? JSON.parse(user) : {
    email: null,
    token: null,
    id: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER:
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;

        case REMOVE_USER:
            localStorage.removeItem('user');
            return initialState;

        default: return state;
    }
}

export default userReducer;
