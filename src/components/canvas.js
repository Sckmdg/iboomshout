import React, {PropTypes, Component} from 'react';
import {fabric} from 'fabric';
import windowGlass from '../img/windowGlass.jpg';
class Canvas extends Component {
    /*Here we creating our canvas and background*/
    componentDidMount() {
        let canvas = new fabric.Canvas('canvas');

        canvas.setBackgroundImage(windowGlass, canvas.renderAll.bind(canvas), {
            width: canvas.width,
            height: canvas.height
        });
        this.props.createCanvas(canvas);

        /*This code let us downloading our images*/

        let self = this;
        document.getElementById('file').addEventListener('change', function (e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = function (f) {
                let data = f.target.result;
                fabric.Image.fromURL(data, function (img) {
                    let oImg = img.set({
                        left: self.state.left,
                        top: self.state.top
                    });
                    canvas.add(oImg);
                });
            };
            reader.readAsDataURL(file);
        });

        document.getElementById('fontSize').onchange = function () {
            if (canvas.getActiveObject()) {
                canvas.getActiveObject().setFontSize(this.value);
            }
            canvas.renderAll();
        };

        document.getElementById('fontFamily').onchange = function () {
            if (canvas.getActiveObject()) {
                canvas.getActiveObject().setFontFamily(this.options[this.selectedIndex].text);
            }
            canvas.renderAll();
        };

        document.getElementById('checkbox').onchange = function () {
            if (canvas.getActiveObject()) {
                (self.state.checkBold == true)
                    ? canvas.getActiveObject().set('fontWeight', 'bold') : canvas.getActiveObject().set('fontWeight', 'normal');
            }
            canvas.renderAll();
        };
    }

    render() {
        return (
            <div className='col-md-8 canvas text-center'>
                <canvas id='canvas' width='720' height='450'></canvas>
            </div>
        );
    }
}

Canvas.propTypes = {
    createCanvas: PropTypes.func.isRequired,
    canvas: PropTypes.object.isRequired
};

export default Canvas