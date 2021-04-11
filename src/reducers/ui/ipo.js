import {
  FETCH_SHARE_COMPANIES_PENDING,
  FETCH_SHARE_COMPANIES_REJECTED,
  FETCH_SHARE_COMPANIES_FULFILLED
} from 'actions/data/ipo';

const INITIAL_STATE = {
  fetchingShareCompanies: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_SHARE_COMPANIES_PENDING:
      return {
        ...state,
        fetchingShareCompanies: true
      }
    case FETCH_SHARE_COMPANIES_REJECTED:
    case FETCH_SHARE_COMPANIES_FULFILLED:
      return {
        ...state,
        fetchingShareCompanies: false
      }
    default:
      return state;
  }
}
