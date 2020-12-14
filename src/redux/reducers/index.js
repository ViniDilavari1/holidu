 import {combineReducers} from 'redux';
 import rentals from './rentals'
 const rootReducer = combineReducers({
     rentals: rentals,
 }); //method to combine reducers

 export default rootReducer;