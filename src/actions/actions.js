import {
    CREATE_TEXT,
    BOLD_TEXT,
    CREATE_CANVAS,
    CREATE_SIZE_VALUE,
    EMPTY_SIZE_VALUE,
    CREATE_FONT
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

export function createSizeValue(value) {
    return(dispatch) => {
        dispatch({
            type: CREATE_SIZE_VALUE,
            payload: value
        })
    }
}

export function emptySizeValue() {
    return(dispatch) => {
        dispatch({
            type: EMPTY_SIZE_VALUE
        })
    }
}

export function createFont(font) {
    return(dispatch) => {
        dispatch({
            type: CREATE_FONT,
            payload: font
        })
    }
}

export default {createText, boldText, createCanvas, createSizeValue, emptySizeValue, createFont}