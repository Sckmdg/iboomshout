import {
    CREATE_CANVAS
} from '../constants/constants';

const initialState = {
    left: 305,
    top: 140,
    checkBold: false,
    emptySize: true,
    emptyUrl: true,
    text: {
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        fontSize: 30
    }
};

export default function canvas(state = initialState) {
    return state
}

export function createCanvas(state, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            return [...state, action.canvas];
        default:
            return state
    }
}

