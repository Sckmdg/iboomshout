import React, {Component} from 'react';
import {fabric} from 'fabric';
import windowGlass from '../img/windowGlass.jpg';
export default class Canvas extends Component {
    /*Setting initial state*/
    constructor(props) {
        super(props);
        this.state = {
            left: 305,
            top: 140,
            checkBold: false,
            emptySize: true,
        };
        this.state.text = {
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
            fontSize: 30
        }
    }

    /**
     *Here we are taking ref value from input
     *and creating the title with options that we set,
     *also make fields empty after create title
     */
    TextAdd = () => {
        let canvas = this.state.canvas,
            inputSize = this.refs.size.value,
            fontWeight = this.state.text.fontWeight,
            left = this.state.left,
            top = this.state.top,
            weight,
            size,
            element,
            currentFont;

        element = this.refs.fontFamily;
        currentFont = element.options[element.selectedIndex].text;
        size = (inputSize == null || inputSize == '') ? this.state.text.fontSize : this.refs.size.value;

        (this.state.checkBold == true) ? weight = 'bold' : weight = fontWeight;

        let text = new fabric.IText('Tap and Type', {
            left: left,
            top: top,
            fontFamily: currentFont,
            fontSize: size,
            fontWeight: weight
        });

        canvas.add(text);

        this.refs.size.value = '';
        this.setState({emptySize: true});

        let self = this;

        text.on('selected', function () {
            self.refs.size.value = text.fontSize;
        });

        text.on('deselected', function () {
            self.refs.size.value = '';
        });
    };

    /*Making true/false checkbox value, that used in TextAdd*/

    Bold = () => {
        this.setState({checkBold: !this.state.checkBold});
    };

    /*Saving our image as png if browser can do it*/

    Save = () => {
        const canvas = this.state.canvas;
        (fabric.Canvas.supports('toDataURL') == true) ?
            window.open(canvas.toDataURL('png')) : alert('This browser doesn\'t provide means to serialize canvas to an image');
    };

    /*Here we creating our canvas and background*/
    componentDidMount() {
        let canvas = new fabric.Canvas('canvas');

        canvas.setBackgroundImage(windowGlass, canvas.renderAll.bind(canvas), {
            width: canvas.width,
            height: canvas.height
        });

        /*This code let us downloading our images*/
        this.setState({canvas: canvas});
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
            <div>
                <div className='col-md-8 canvas text-center'>
                    <canvas id='canvas' width='720' height='450'></canvas>
                </div>
                <div className='col-md-4 imageLoader'>
                    <h4 className='text-center'>Add some text</h4>
                    <div className='form-group'>
                        <label>Font-Size</label>
                        <input type='number' className='form-control' id='fontSize'
                               placeholder='input size number of Font-Size' ref='size'/>
                    </div>
                    <div className='form-group'>
                        <label>Font-Family</label>
                        <select className='form-control' id='fontFamily' ref='fontFamily'>
                            <option value='1'>Helvetica Neue</option>
                            <option value='2'>Helvetica</option>
                            <option value='3'>Arial</option>
                            <option value='4'>sans-serif</option>
                        </select>
                    </div>
                    <div className='checkbox'>
                        <label>
                            <input type='checkbox' id='checkbox' ref='bold' onChange={this.Bold}/> Bold
                        </label>
                    </div>
                    <button type='submit' className='btn btn-default' onClick={this.TextAdd}>Add text
                    </button>
                    <h4 className='text-center'>Add your own image</h4>
                    <div className='form-group'>
                        <label className="control-label">Select File</label>
                        <input id='file' type='file' className='file'/>
                    </div>
                    <div className='form-group'>
                        <h4 className='text-center'>Save canvas</h4>
                        <button type='submit' className='btn btn-default' onClick={this.Save}>Save</button>
                    </div>
                </div>
            </div>
        );
    }

}