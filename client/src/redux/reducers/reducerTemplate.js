import axios from 'axios';

const initialState = {
 test: null

}

const TEMPLATE = "TEMPLATE";

function reducer(state = initialState, action){
    switch(action.type) {
        case TEMPLATE + '_FULFILLED':
            return Object.assign( {}, state, {test: test} );
        default:
            return state
    }
  }

  export function template() {
    return {
      type: TEMPLATE,
      payload: axios.get('api/template')
    }
  }
