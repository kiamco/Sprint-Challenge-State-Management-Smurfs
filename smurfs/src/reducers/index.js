import { ADD_SMURF, FETCH_SMURF } from '../actions/index';

const initState = [];

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_SMURF:
            return [...state, action.payload]
        case FETCH_SMURF:
            return state = action.payload
        default:
            return
    }
}