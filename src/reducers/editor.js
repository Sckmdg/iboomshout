import {
    //CREATE_TEXT,
    BOLD_TEXT,
    initialState
} from '../constants/constants';

// export function createText(state = initialState, action) {
//     switch (action.type) {
//         case CREATE_TEXT:
//             return Object.assign(state, action.payload) ;
//         default:
//             return state
//     }
// }

export function boldText(state = initialState, action) {
    switch (action.type) {
        case BOLD_TEXT:
            return [...state, action.payload];
        default:
            return state
    }
}