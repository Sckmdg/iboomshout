import {
    CREATE_CANVAS,
    CREATE_TEXT,
    BOLD_TEXT,
    SAVE_CANVAS,
    initialState
} from '../constants/constants';
import {fabric} from 'fabric';

export function canvas(state = initialState, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            state.klass = action.payload;
            return state;
        case CREATE_TEXT:
            state.klass.add(action.payload);
            state.emptySize = true;
            state.klass.renderAll();
            return state;
        case BOLD_TEXT:
            state.checkBold = !state.checkBold;
            return state;
        case SAVE_CANVAS:
            (fabric.Canvas.supports('toDataURL') == true) ?
            window.open(state.toDataURL('png')) : alert('This browser doesn\'t provide means to serialize canvas to an image');
            return state;
        default:
            return state
    }
}
