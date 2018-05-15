import axios from 'axios';

export function get(url, event_type) {
    return function (dispatch) {
        axios.get(url)
            .then((response) => dispatch({
                type: event_type,
                response: response,
            })).catch((response) => dispatch({
                type: "ERROR",
                response: response
            }));
    }
}
