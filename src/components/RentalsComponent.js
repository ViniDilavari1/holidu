import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getRentals } from '../redux/actions/rentals';
import Card from './CardComponent';

const Rentals = () =>{  
    const dispatch = useDispatch();
    const rentals = useSelector(state => state.rentals.rentals);
    const loading = useSelector(state => state.rentals.loading);
    const error = useSelector(state => state.rentals.error);

    useEffect(()=>{
        dispatch(getRentals());
    }, [])
    return(
        <>
        {loading && <p>Loading...</p>}
        {rentals.length > 0 && rentals.map((rental)=>(
            <Card rental={rental} key={rental.id}/>
        ))}
        {rentals.length===0 && !loading && <p>No Rentals</p>}
        {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Rentals;