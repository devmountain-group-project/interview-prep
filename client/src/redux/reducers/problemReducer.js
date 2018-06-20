import axios from 'axios';

const initialState = {
  id: 1,
  problem: []

}

let GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PROBLEM_BY_ID + '_FULFILLED':
          console.log(33333,action.payload.data);
            return Object.assign( {}, state, {problem: action.payload.data} );
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
