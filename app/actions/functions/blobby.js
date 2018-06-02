import axios from 'axios';
import * as wrapper from '../wrapper'

export function addBlobbyToList(blobby) {
    return wrapper.emit("addBlobbyToList", new Array(blobby));
}
