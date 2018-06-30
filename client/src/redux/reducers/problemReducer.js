import axios from 'axios';

const initialState = {
 problem: [],
 allProblems: [],
 solved: []
}

let GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";
let GET_PROBLEMS = "GET_PROBLEMS";
let ADD_PROBLEM = "ADD_PROBLEM";
let GET_SOLVED_PROBLEMS = "GET_SOLVED_PROBLEMS";

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PROBLEM_BY_ID + '_FULFILLED':
            return Object.assign( {}, state, {problem: action.payload.data} );
        case GET_PROBLEMS + '_FULFILLED':
            return Object.assign( {}, state, {allProblems: action.payload.data} );
        case GET_SOLVED_PROBLEMS + '_FULFILLED':
            return Object.assign({}, state, {solved: action.payload.data});
        case ADD_PROBLEM + '_FULFILLED':
            return { ...state, problem: action.payload };
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

export function addProblem(name, instructions, testUrl, difficulty) {
    return {
        type: ADD_PROBLEM,
        payload: axios.post('/api/addProblem', {
            name,
            instructions,
            difficulty,
            testUrl
        }).then(response => {
            return response.data
        })
    }
}

export function getSolvedProblems() {
  const user_id = 3
  return {
    type: GET_SOLVED_PROBLEMS,
    payload: axios.get('/api/getSolvedProblems/' + user_id)
  }
}
