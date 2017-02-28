import {
    TEXT_ADD,
    BOLD
} from '../constants/constants';

export default function textAdd(state, action) {
    switch (action.type) {
        case TEXT_ADD:
            return [...state, action.textAdd];
        default:
            return state
    }
}

export default function bold(state, action) {
    switch (action.type) {
        case BOLD:
            return [...state, action.bold];
        default:
            return state
    }
}