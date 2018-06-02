import { ReduxClassWrapper } from 'red-redux-class'
import BlobbyClass from './blobbyClass'

const initialState = new BlobbyClass({
    blobbyList: [{
        name: 'Sucker',
        gender: 'male',
        age: 6000,
        description: 'Typical sucker from Blobby Land'
    }]
})

function blobbyReducer(state = initialState, action) {
    const newState = state.new()
    newState.callRelatedAction(action);
    return newState;
}

export default ReduxClassWrapper(blobbyReducer)
