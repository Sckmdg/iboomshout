import {
    TEXT_ADD,
    BOLD
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