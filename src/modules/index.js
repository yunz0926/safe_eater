import { combineReducers } from 'redux';
import admin_district from './admin_district';
import category from './category';

const rootReducer = combineReducers({admin_district, category,});

export default rootReducer;