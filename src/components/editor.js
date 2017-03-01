import React, {Component} from 'react';
import {fabric} from 'fabric';
export default class Editor extends Component {


    // document.getElementById('fontFamily').onchange = function () {
    //     if (canvas.getActiveObject()) {
    //         canvas.getActiveObject().setFontFamily(this.options[this.selectedIndex].text);
    //     }
    //     canvas.renderAll();
    // };
    //
    // document.getElementById('checkbox').onchange = function () {
    //     if (canvas.getActiveObject()) {
    //         (self.state.checkBold == true)
    //             ? canvas.getActiveObject().set('fontWeight', 'bold') : canvas.getActiveObject().set('fontWeight', 'normal');
    //     }
    //     canvas.renderAll();
    // };

    // onChangeSize = () => {
    //     let canvas = this.props.canvas;
    //         if (canvas.getActiveObject()) {
    //             canvas.getActiveObject().setFontSize(this.refs.size.value);
    //         }
    //         canvas.renderAll();
    // };

    TextAdd = () => {
        let inputSize = this.refs.size.value,
            fontWeight = this.props.canvas.text.fontWeight,
            left = this.props.canvas.left,
            top = this.props.canvas.top,
            weight,
            size,
            element,
            currentFont;

        element = this.refs.fontFamily;
        currentFont = element.options[element.selectedIndex].text;
        size = (inputSize == null || inputSize == '') ? this.props.canvas.text.fontSize : this.refs.size.value;
        (this.props.canvas.checkBold == true) ? weight = 'bold' : weight = fontWeight;

        let text = new fabric.IText('Tap and Type', {
            left: left,
            top: top,
            fontFamily: currentFont,
            fontSize: size,
            fontWeight: weight
        });

        this.props.createText(text);

        this.refs.size.value = '';

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
        this.props.boldText();
    };

    /*Saving our image as png if browser can do it*/

    Save = () => {
        let canvas = this.props.canvas;
        (fabric.Canvas.supports('toDataURL') == true) ?
            window.open(canvas.toDataURL('png')) : alert('This browser doesn\'t provide means to serialize canvas to an image');
    };

    render() {
        return (
            <div className='col-md-4 editor'>
                <h4 className='text-center'>Add some text</h4>
                <div className='form-group'>
                    <label>Font-Size</label>
                    <input type='number' className='form-control' id='fontSize'
                           placeholder='input size number of Font-Size' ref='size' />
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
        );
    }
}