import {
  FETCH_BOID_LIST_PENDING,
  FETCH_BOID_LIST_REJECTED,
  FETCH_BOID_LIST_FULFILLED
} from 'actions/data/sheet';

const INITIAL_STATE = {
  fetchingBOIDList: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_BOID_LIST_PENDING:
      return {
        ...state,
        fetchingBOIDList: true
      }

    case FETCH_BOID_LIST_REJECTED:
    case FETCH_BOID_LIST_FULFILLED:
      return {
        ...state,
        fetchingBOIDList: false
      }

    default:
      return state;
  }
}
