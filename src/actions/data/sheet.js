import { createAction } from 'redux-actions';

import * as sheetService from 'services/sheet';

export const FETCH_BOID_LIST = 'FETCH_BOID_INFO';
export const FETCH_BOID_LIST_PENDING = 'FETCH_BOID_INFO_PENDING';
export const FETCH_BOID_LIST_REJECTED = 'FETCH_BOID_INFO_REJECTED';
export const FETCH_BOID_LIST_FULFILLED = 'FETCH_BOID_INFO_FULFILLED';

export const SET_BOID_LIST = 'SET_BOID_LIST';
export const SET_BOID_LIST_LOADING_STATE = 'SET_BOID_LIST_LOADING_STATE';

export const fetchBOIDList = createAction(FETCH_BOID_LIST, sheetService.fetchBOIDInfoFromSheet);

export const setBOIDList = createAction(SET_BOID_LIST);
export const setBOIDListLoadingState = createAction(SET_BOID_LIST_LOADING_STATE)
