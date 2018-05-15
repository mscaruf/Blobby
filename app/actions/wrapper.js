import axios from 'axios';

export function get(url, event_type, args) {
    return function (dispatch) {
        axios.get(url)
            .then((response) => dispatch({
                type: event_type,
                args: new Array(response.data, ...args)
            })).catch((response) => dispatch({
                type: "ERROR",
                response: response
            }));
    }
}

export function emit(event_type, args) {
    return { type: event_type, args: args };
}
