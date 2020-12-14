import * as type from '../types';

const initialState = {
    rentals: [],
    loading: false,
    error: null,
}

export default function rentals (state= initialState, action){
switch (action.type){
    case type.GET_RENTALS_REQUESTED:
        return {
            ...state,
            loading:true,
        }
    case type.GET_RENTALS_SUCCESS:
        return {
            ...state,
            loading:false,
            rentals: action.rentals
        }
    case type.GET_RENTALS_FAILED:
        return {
            ...state,
            loading:false,
            error: action.message
        }
        default:
            return state;
}

}