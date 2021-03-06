import axios from 'axios';

const initialState = {
 problem: [],
 allProblems: [],
 solved: [],
 user: {},
 toggle: ''
}

let GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";
let GET_PROBLEMS = "GET_PROBLEMS";
let ADD_PROBLEM = "ADD_PROBLEM";
let GET_SOLVED_PROBLEMS = "GET_SOLVED_PROBLEMS";
let GET_USER = "GET_USER";
let HANDLE_TOGGLE_SCORECARD = 'HANDLE_TOGGLE_SCORECARD';
let HANDLE_TOGGLE_SUBMIT = 'HANDLE_TOGGLE_SUBMIT';
let HANDLE_TOGGLE_SPRINTS = 'HANDLE_TOGGLE_SPRINTS'


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
        case GET_USER + '_FULFILLED':
            return Object.assign( {}, state, {user: action.payload} );
        case HANDLE_TOGGLE_SCORECARD + '_FULFILLED' :
            return Object.assign( {}, state, {toggle: action.payload} );
        case HANDLE_TOGGLE_SUBMIT + '_FULFILLED':
            return Object.assign( {}, state, {toggle: action.payload} );
        case HANDLE_TOGGLE_SPRINTS + '_FULFILLED':
            return Object.assign( {}, state, {toggle: action.payload} );
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

export function getUser() {
    return {
      type: GET_USER,
      payload: axios.get('/api/getUser').then(res=> {
        return res.data[0]
      })
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

export function getSolvedProblems(user_id) {
  return {
    type: GET_SOLVED_PROBLEMS,
    payload: axios.get('/api/getSolvedProblems/' + user_id)
  }
}

export function handleToggleScoreCard() {
    console.log('hitting the reducer')
    return {
        type: HANDLE_TOGGLE_SCORECARD,
        payload: 'ScoreCard'

    }
}

export function handleToggleSubmit() {
    return {
        type: HANDLE_TOGGLE_SUBMIT,
        payload: 'Submit'
    }
}

export function handleToggleSprints() {
    return {
        type: HANDLE_TOGGLE_SPRINTS,
        payload: 'Sprints'
    }
}
