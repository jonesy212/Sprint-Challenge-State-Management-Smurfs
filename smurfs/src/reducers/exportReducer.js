import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
} from '../actions/index'

const initialState = {
    value: [],
    loading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START: 
            return{ 
                ...state,
                loading: true,
                error: ''
            };

        case FETCH_DATA_SUCCESS: 
            return{ 
                ...state,
                value: action.payload,
                loading: false,
                error: ''
            };

        case FETCH_DATA_ERROR: 
            return{ 
                ...state,
                error: 'You are NOT WELCOME HERE!!',
            };
            default:
                return state
        }
}