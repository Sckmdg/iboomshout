import {
    CREATE_CANVAS,
    CREATE_TEXT,
    BOLD_TEXT,
    CREATE_SIZE_VALUE,
    EMPTY_SIZE_VALUE,
    CREATE_FONT,
    initialState
} from '../constants/constants';

export function canvas(state = initialState, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            return {...state, klass: action.payload};
        case CREATE_TEXT:
            state.klass.add(action.payload);
            return {...state, emptySize: true};
        case BOLD_TEXT:
            return {...state, checkBold: !state.checkBold};
        case CREATE_SIZE_VALUE:
            return {...state, sizeValue: action.payload};
        case EMPTY_SIZE_VALUE:
            return {...state, sizeValue: ''};
        case CREATE_FONT:
            return{...state, fontValue: action.payload};
        default:
            return state
    }
}