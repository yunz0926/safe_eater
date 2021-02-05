import { createAction, handleActions } from 'redux-actions';

const CHANGE_CATEGORY = 'category/CHANGE_CATEGORY';

export const changeCategory = createAction(CHANGE_CATEGORY, category => category);

const initialState = {
    category: "전체"
};

export default handleActions({
    [CHANGE_CATEGORY]: (state, {payload: category}) => ({
        category,
    })
}, initialState);