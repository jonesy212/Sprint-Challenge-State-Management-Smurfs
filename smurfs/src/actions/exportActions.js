import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const smurfInfo = () => {
    return dispatch => {
    console.log(smurfInfo)
    dispatch({type: FETCH_DATA_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch({type: FETCH_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_DATA_ERROR, payload: error.response})
        })
    }
}