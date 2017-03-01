import React, {PropTypes, Component} from 'react';
import {fabric} from 'fabric';
import windowGlass from '../img/windowGlass.jpg';
class Canvas extends Component {
    /**
     * Here we creating our canvas and background for him.
     *
     * width and height taken from element canvas.
     */
    componentDidMount() {
        let canvas = new fabric.Canvas('canvas');

        canvas.setBackgroundImage(windowGlass, canvas.renderAll.bind(canvas), {
            width: canvas.width,
            height: canvas.height
        });
        /**
         * Calling action
         * That send canvas to store
         */
        this.props.createCanvas(canvas);
    }

    render() {
        return (
            <div className='col-md-8 canvas text-center'>
                <canvas id='canvas' width='720' height='450'></canvas>
            </div>
        );
    }
}
/**
 * Setting propTypes for our canvas
 */
Canvas.propTypes = {
    createCanvas: PropTypes.func.isRequired,
    canvas: PropTypes.object.isRequired
};

export default Canvas