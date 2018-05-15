import axios from 'axios';
import * as wrapper from '../wrapper'

export function FetchFromApi() {
    return wrapper.get("http://jsonplaceholder.typicode.com/posts/1", "FETCH_FROM_API");
}
