import axios from 'axios';

const initialState = {

 user: {},
 problem: [],
 allProblems: [],
 solved: []

}

let GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";
let GET_PROBLEMS = "GET_PROBLEMS";
let ADD_PROBLEM = "ADD_PROBLEM";
let GET_SOLVED_PROBLEMS = "GET_SOLVED_PROBLEMS";
let GET_USER_INFO = "GET_USER_INFO";
let GET_USER_INFO_FULFILLED = 'GET_USER_INFO_FULFILLED'

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
        case GET_USER_INFO_FULFILLED:
              console.log( 'this is action.payload', action.payload.data)
                return Object.assign( {}, state, {user: action.payload.data} );
        default:
            return state
    }
}

export function getUserInfo() {
  console.log(1111, "Got here")
    return {
      type: GET_USER_INFO,
      payload: axios.get('/auth/me').then(res => {
        console.log('.then', res )
        return res.data
      })
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

export function addProblem(name, instructions, testUrl) {
    return {
        type: ADD_PROBLEM,
        payload: axios.post('/api/addProblem', {
            name,
            instructions,
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
