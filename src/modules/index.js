import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import admin_district from './admin_district';
import category from './category';
import data from './data';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({admin_district, category, data});

export default persistReducer(persistConfig, rootReducer);