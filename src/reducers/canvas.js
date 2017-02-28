import {fabric} from 'fabric';

let myCanvas = new fabric.Canvas();

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
    },
    myCanvas: myCanvas
};

export default function canvas(state = initialState) {
    return state
}