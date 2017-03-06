import {
    CREATE_CANVAS,
    CREATE_TEXT,
    BOLD_TEXT,
    CREATE_VALUE,
    EMPTY_VALUE,
    SET_INPUT,
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
        case CREATE_VALUE:
            return {...state, value: action.payload};
        case EMPTY_VALUE:
            return {...state, value: {}};
        case SET_INPUT:
            return {...state, value: action.payload};
        default:
            return state
    }
}