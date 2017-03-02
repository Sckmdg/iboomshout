import {
    CREATE_CANVAS,
    CREATE_TEXT,
    BOLD_TEXT,
    initialState
} from '../constants/constants';

// export function canvas(state = initialState, action) {
//     switch (action.type) {
//         case CREATE_CANVAS:
//             Object.assign(state, {klass: action.payload}) ;
//             return state;
//         case CREATE_TEXT:
//             state.klass.add(action.payload);
//             Object.assign(state, {emptySize: true});
//             state.klass.renderAll();
//             return state;
//         case BOLD_TEXT:
//             Object.assign(state, {checkBold: !state.checkBold});
//             return state;
//         default:
//             return state
//     }
// }

export function canvas(state = initialState, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            return Object.assign({}, state, {klass: action.payload});
        case CREATE_TEXT:
            state.klass.add(action.payload);
            return Object.assign({}, state, {emptySize: true}, state.klass.renderAll());
        case BOLD_TEXT:
            return Object.assign({}, state, {checkBold: !state.checkBold});
        default:
            return state
    }
}