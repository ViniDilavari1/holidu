import {call, put, takeEvery} from 'redux-saga/effects';

const apiURL = 'https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien?filter=offers';

function getApi(){
    return fetch(apiURL, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => {throw error})
}

function * fetchRentals(action){
    try{
        const rentals = yield call(getApi);
        yield put({type: 'GET_RENTALS_SUCCESS', rentals : rentals.offers});
    }
    catch (e){
        yield put({type: 'GET_RENTALS_FAILED', message: e.message})
    }
}

function * rentalSaga() {
    yield takeEvery('GET_RENTALS_REQUESTED', fetchRentals);
}

export default rentalSaga;