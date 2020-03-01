import {LOGIN, DATA} from '../actions/types';

const initialState = {
   isLogged: false,
   email: '',
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isLogged: true
            };
        case DATA:
            return {
                ...state,
                email: action.payload
            };
        default:
            return state;
    }
}
