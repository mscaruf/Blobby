import { ReduxClass } from 'red-redux-class'
import _ from 'lodash'

class BaseClass extends ReduxClass {
    constructor(initialState) {
        super(initialState)
    }

    callRelatedAction(action){
        if (_.has(this.__proto__, _.camelCase(action.type))){
            this[_.camelCase(action.type)](...action.args)
        }
    }
}

export default BaseClass
