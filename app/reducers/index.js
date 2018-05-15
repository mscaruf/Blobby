import { routerReducer as routing } from 'react-router-redux';
import { combineReduxClassReducers } from 'red-redux-class'

import demo from './demo/demoReducer';

const rootReducer = combineReduxClassReducers({
    demoReducer: demo,
})

export default rootReducer;
