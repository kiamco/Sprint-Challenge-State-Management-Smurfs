import Axios from 'axios';
export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURF = 'FETCH_SMURF';

export const fetchSmurf = () => {
    return function(dispatch) {
        // setTimeout(()=> {}, 2000)
        Axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SMURF, payload: res.data });
            })
            .catch(err => console.log(err));
    }
}

export const addSmurf = (smurfObj) => {
    return function(dispatch) {
        Axios.post('http://localhost:3333/smurfs', smurfObj)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: ADD_SMURF,
                    payload: smurfObj
                });
            })
            .catch(err => { console.log(err) });


    }
}