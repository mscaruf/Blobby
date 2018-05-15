import axios from 'axios';
import * as wrapper from '../wrapper'

export function fetchFromApi() {
    return wrapper.get("http://jsonplaceholder.typicode.com/posts/1", "FETCH_FROM_API");
}

export function setAppName(appName) {
    return wrapper.emit("SET_APP_NAME", new Array(appName));
}
