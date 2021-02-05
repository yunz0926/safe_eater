import { createAction, handleActions } from 'redux-actions';

const CHANGE_SI = 'admin_district/CHANGE_SI';
const CHANGE_SIDO = 'admin_district/CHANGE_SIDO';

export const changeSI = createAction(CHANGE_SI, si => si);
export const changeSIDO = createAction(CHANGE_SIDO, sido => sido);

const initialState = {
    si: "서울특별시",
    sido: "",
};

export default handleActions({
    [changeSI]: (state, {payload: si}) => ({
        ...state,
        si,
    }),
    [changeSIDO]: (state, {payload: sido}) => ({
        ...state,
        sido,
    }),
}, initialState);