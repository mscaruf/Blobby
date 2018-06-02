import { ReduxClass } from 'red-redux-class'
import BaseClass from '../base/baseClass'

class BlobbyClass extends BaseClass {
    constructor(initialState) {
        super(initialState)
    }

    addBlobbyToList(blobby) {
        let blobbyList = this.get('blobbyList');
        blobbyList.push(blobby);
        this.set('blobbyList', blobbyList)
    }
}

export default BlobbyClass
