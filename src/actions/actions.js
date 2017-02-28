import {
    TEXT_ADD,
    BOLD,
    CANVAS
} from '../constants/constants';

export function textAdd(text) {
    return (dispatch) => {
        dispatch({
            type: TEXT_ADD,
            payload: text
        })
    }
}

export function bold(text) {
    return (dispatch) => {
        dispatch({
            type: BOLD,
            payload: text
        })
    }
}

export function canvas(canvas) {
    return(dispatch) => {
        dispatch({
            type: CANVAS,
            payload: canvas
        })
    }
}