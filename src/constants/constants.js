export const CREATE_TEXT = 'CREATE_TEXT';
export const BOLD_TEXT = 'BOLD_TEXT';
export const CREATE_CANVAS = 'CREATE_CANVAS';
export const CREATE_SIZE_VALUE = 'CREATE_SIZE_VALUE';
export const EMPTY_SIZE_VALUE = 'EMPTY_SIZE_VALUE';
export const SIZE_INPUT = 'SIZE_INPUT';
export const CREATE_FONT = 'CREATE_FONT';
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
    text: {
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        fontSize: 30
    },
    klass:{},
    sizeValue: 0,
    fontValue: 'Helvetica Neue'
};