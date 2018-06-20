import axios from 'axios';

const initialState = {

 problem: [],
 allProblems: []

}

let GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";
let GET_PROBLEMS = "GET_PROBLEMS";

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PROBLEM_BY_ID + '_FULFILLED':
            return Object.assign( {}, state, {problem: action.payload.data} );
        case GET_PROBLEMS + '_FULFILLED':
            return Object.assign( {}, state, {allProblems: action.payload.data} );
        default:
            return state
    }
}

export function getProblemByID(id) {
    return {
      type: GET_PROBLEM_BY_ID,
      payload: axios.get('/api/getProblem/' + id)
    }
}

export function getProblems() {
    return {
      type: GET_PROBLEMS,
      payload: axios.get('/api/getProblems/')
    }
}
