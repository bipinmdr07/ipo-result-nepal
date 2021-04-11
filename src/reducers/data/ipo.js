import {
  FETCH_SHARE_COMPANIES_PENDING,
  FETCH_SHARE_COMPANIES_REJECTED,
  FETCH_SHARE_COMPANIES_FULFILLED,
} from 'actions/data/ipo';

const INITIAL_STATE = {
  shareCompanies: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SHARE_COMPANIES_FULFILLED:
      return {
        ...state,
        shareCompanies: action.payload.body
      }

    case FETCH_SHARE_COMPANIES_PENDING:
    case FETCH_SHARE_COMPANIES_REJECTED:
      return state;

    default:
      return state;
  }
}
