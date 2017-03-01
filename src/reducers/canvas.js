import {
    CREATE_CANVAS,
    CREATE_TEXT,
    BOLD_TEXT,
    initialState
} from '../constants/constants';

export function canvas(state = initialState, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            return Object.assign(state, action.payload) ;
        case CREATE_TEXT:
            state._objects.push(action.payload);
            state.emptySize = true;
            return state;
        case BOLD_TEXT:
            state.checkBold = !state.checkBold;
            return state;
        default:
            return state
    }
}
