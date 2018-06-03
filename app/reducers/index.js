import { routerReducer as routing } from 'react-router-redux';
import { combineReduxClassReducers } from 'red-redux-class'

import blobby from './blobby/blobbyReducer';

const rootReducer = combineReduxClassReducers({
    blobbyReducer: blobby,
})

export default rootReducer;
