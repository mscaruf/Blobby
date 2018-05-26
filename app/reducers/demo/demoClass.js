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

    fetchFromApi(response, args) {
        this.set('apiData', response)
    }

    sendToApi(response) {
        this.set('sendComplete', true);
    }
}

export default DemoClass
