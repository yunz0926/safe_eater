import { createAction, handleActions } from 'redux-actions';

const SEARCH_DATA = 'data/SEARCH';

export const searchData = createAction(SEARCH_DATA, data => data);

const initialState = {
    searchedData: [],
};

export default handleActions({
    [SEARCH_DATA]: (state, {payload: data}) => ({
       ...state,
       searchedData: data,
    }),
}, initialState);