export const CREATE_TEXT = 'CREATE_TEXT';
export const BOLD_TEXT = 'BOLD_TEXT';
export const CREATE_CANVAS = 'CREATE_CANVAS';
export const CREATE_VALUE = 'CREATE_VALUE';
export const EMPTY_VALUE = 'EMPTY_VALUE';
export const SET_INPUT = 'SET_INPUT';
/**
 * Initial state for store
 * left/top - it position on canvas where object will render
 *
 * @type {{left: number, top: number, checkBold: boolean, emptySize: boolean, emptyUrl: boolean, text: {fontWeight: string, fontFamily: string, fontSize: number}, klass: {}}}
 */
export const initialState = {
    left: 305,
    top: 140,
    checkBold: false,
    emptySize: true,
    text: {
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        fontSize: 30
    },
    klass:{},
    value:{}
};