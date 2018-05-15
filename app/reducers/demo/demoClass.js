import { ReduxClass } from 'red-redux-class'
import BaseClass from '../base/baseClass'

class DemoClass extends BaseClass {
    constructor(initialState) {
        super(initialState)
    }

    setAppName(appName) {
        this.set('appName', appName)
    }

    getAppName() {
        return this.appName
    }
}

export default DemoClass
