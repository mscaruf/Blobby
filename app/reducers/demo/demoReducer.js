import { ReduxClassWrapper } from 'red-redux-class'
import DemoClass from './demoClass'

const initialState = new DemoClass({
    appName: 'No name',
})

function demoReducer(state = initialState, action) {
    const newState = state.new()
    newState.callRelatedAction(action);
    return newState;
}

export default ReduxClassWrapper(demoReducer)
