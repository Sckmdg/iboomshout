import {
    CREATE_TEXT,
    BOLD_TEXT,
    CREATE_CANVAS,
    CREATE_VALUE,
    EMPTY_VALUE,
    SET_INPUT
} from '../constants/constants';

/**
 * Takes text settings (text) as payload
 *
 * @param text - is variables for fabricJs - that settings how our text will be looking
 * @returns {function(*)} state(canvas) with object(text)
 */
export function createText(text) {
    return (dispatch) => {
        dispatch({
            type: CREATE_TEXT,
            payload: text
        })
    }
}
/**
 * @returns {function(*)} state(canvas) with property isBold (true/false) that making our text bold/normal
 */
export function boldText() {
    return (dispatch) => {
        dispatch({
            type: BOLD_TEXT
        })
    }
}
/**
 * This action called when our canvas-component did mount
 *
 * @param canvas it's fabricJs object with his params that render our canvas. We will need some functions(canvas.Add and etc)
 *  and _objects(that  contained our pics and text)
 *
 * @returns {function(*)} state with filled klass
 */
export function createCanvas(canvas) {
    return(dispatch) => {
        dispatch({
            type: CREATE_CANVAS,
            payload: canvas
        })
    }
}

export function createValue(value) {
    return(dispatch) => {
        dispatch({
            type: CREATE_VALUE,
            payload: value
        })
    }
}

export function emptyValue() {
    return(dispatch) => {
        dispatch({
            type: EMPTY_VALUE
        })
    }
}

export function setInput(value) {
    return(dispatch) => {
        dispatch({
            type: SET_INPUT,
            payload: value
        })
    }
}

export default {createText, boldText, createCanvas, createValue, emptyValue, setInput}