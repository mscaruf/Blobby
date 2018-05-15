import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import demo from './demo/demoReducer';


const rootReducer = combineReducers({
    demo
});

export default rootReducer;
