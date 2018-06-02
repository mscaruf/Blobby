import { routerReducer as routing } from 'react-router-redux';
import { combineReduxClassReducers } from 'red-redux-class'

import demo from './demo/demoReducer';
import blobby from './blobby/blobbyReducer';

const rootReducer = combineReduxClassReducers({
    demoReducer: demo,
    blobbyReducer: blobby,
})

export default rootReducer;
