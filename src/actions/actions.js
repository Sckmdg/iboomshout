import {
    TEXT_ADD,
    BOLD,
    CREATE_CANVAS
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

export function createCanvas(canvas) {
    return(dispatch) => {
        dispatch({
            type: CREATE_CANVAS,
            payload: canvas
        })
    }
}

export default { textAdd, bold, createCanvas }