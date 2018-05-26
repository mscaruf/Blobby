import axios from 'axios';

export function get(url, event_type, args = new Array()) {
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

export function post(url, body, event_type, args = new Array()) {
    return function (dispatch) {
        axios.post(url, body)
        .then((response) => dispatch({
            type: event_type,
            args: new Array(response.data, ...args)
        })).catch((response) => dispatch({
            type: "ERROR",
            response: response
        }));
    }
}

export function put(url, body, event_type, args = new Array()) {
    return function (dispatch) {
        axios.put(url, body)
        .then((response) => dispatch({
            type: event_type,
            args: new Array(response.data, ...args)
        })).catch((response) => dispatch({
            type: "ERROR",
            response: response
        }));
    }
}

export function del(url, body, event_type, args = new Array()) {
    return function (dispatch) {
        axios.delete(url, body)
        .then((response) => dispatch({
            type: event_type,
            args: new Array(response.data, ...args)
        })).catch((response) => dispatch({
            type: "ERROR",
            response: response
        }));
    }
}

export function patch(url, body, event_type, args = new Array()) {
    return function (dispatch) {
        axios.patch(url, body)
        .then((response) => dispatch({
            type: event_type,
            args: new Array(response.data, ...args)
        })).catch((response) => dispatch({
            type: "ERROR",
            response: response
        }));
    }
}

export function emit(event_type, args = new Array()) {
    return { type: event_type, args: args };
}
