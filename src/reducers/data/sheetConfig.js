import { SET_SHEET_CONFIG } from 'actions/data/sheetConfig';

const INITIAL_STATE = {
  sheetConfig: {
    apiKey: '',
    sheetId: ''
  }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_SHEET_CONFIG:
      return {
        ...state,
        sheetConfig: action.payload
      }

    default:
      return state
  }
}
