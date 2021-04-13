import {
  FETCH_BOID_LIST_PENDING,
  FETCH_BOID_LIST_REJECTED,
  FETCH_BOID_LIST_FULFILLED
} from 'actions/data/sheet';

import {
  SET_SHEET_CONFIG_MODAL_STATUS
}  from 'actions/ui/sheet';

const INITIAL_STATE = {
  fetchingBOIDList: false,
  sheetConfigModalVisible: false
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

    case SET_SHEET_CONFIG_MODAL_STATUS:
      return {
        ...state,
        sheetConfigModalVisible: action.payload
      }

    default:
      return state;
  }
}
