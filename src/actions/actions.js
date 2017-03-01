import {
    CREATE_TEXT,
    BOLD_TEXT,
    CREATE_CANVAS,
    SAVE_CANVAS
} from '../constants/constants';

export function createText(text) {
    return (dispatch) => {
        dispatch({
            type: CREATE_TEXT,
            payload: text
        })
    }
}

export function boldText() {
    return (dispatch) => {
        dispatch({
            type: BOLD_TEXT
        })
    }
}

export function saveCanvas() {
    return (dispatch) => {
        dispatch({
            type: SAVE_CANVAS
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

export default {createText, boldText, createCanvas, saveCanvas}