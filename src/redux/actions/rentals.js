import * as type from '../types';


export function getRentals (rentals) { //action
return{
    type: type.GET_RENTALS_REQUESTED,
    payload: rentals
}
}
 