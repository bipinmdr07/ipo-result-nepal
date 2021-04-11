import { findIndex } from 'lodash';

import {
  FETCH_BOID_LIST_PENDING,
  FETCH_BOID_LIST_REJECTED,
  FETCH_BOID_LIST_FULFILLED,
  SET_BOID_LIST,
  SET_BOID_LIST_LOADING_STATE
} from 'actions/data/sheet';

import {
  FETCH_ALLOTMENT_RESULT_PENDING,
  FETCH_ALLOTMENT_RESULT_REJECTED,
  FETCH_ALLOTMENT_RESULT_FULFILLED
} from 'actions/data/ipo';

const INITIAL_STATE = {
  boidList: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOID_LIST_FULFILLED:
      return {
        ...state,
        boidList: action.payload
      }
    case FETCH_ALLOTMENT_RESULT_PENDING:
      const boid = action.payload?.data?.boid
      const boidIndex = findIndex(state.boidList, { BOID: boid })

      if (boid && boidIndex !== -1) {
        const dupBoidList = [...state.boidList]
        dupBoidList[boidIndex] = { ...dupBoidList[boidIndex], loading: true }
        return {
          ...state,
          boidList: dupBoidList
        }
      }
      return state;

    case FETCH_ALLOTMENT_RESULT_FULFILLED:
      const fetchedBoid = action.payload?.data?.boid
      const fetchedBoidIndex = findIndex(state.boidList, { BOID: fetchedBoid  })

      if (fetchedBoid && fetchedBoidIndex !== -1) {
        const dupBoidList = [...state.boidList]
        const { message, success } = action.payload.data
        dupBoidList[fetchedBoidIndex ] = { ...dupBoidList[fetchedBoidIndex ], loading: false, result: message, success}
        return {
          ...state,
          boidList: dupBoidList
        }
      }
      return state

    case FETCH_ALLOTMENT_RESULT_REJECTED:
      return {
        ...state,
        boidList: state.boidList.map((result) => ({ ...result, loading: false, error: true }))
      }

    case SET_BOID_LIST:
      return {
        ...state,
        boidList: action.payload
      }

    case SET_BOID_LIST_LOADING_STATE:
      return {
        ...state,
        boidList: state.boidList.map((boidData) => ({ ...boidData, loading: true }))
      }
      
    case FETCH_BOID_LIST_PENDING:
    case FETCH_BOID_LIST_REJECTED:
      return state;

    default:
      return state
  }
}
